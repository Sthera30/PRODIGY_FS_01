import jwt from 'jsonwebtoken'
import nodemailer from 'nodemailer'
import genOTP from 'otp-generator'
import dotenv from 'dotenv'
import { userModel } from '../model/user.js'
import { hashPassword, hasConfrimPassword, hashOtp, compareOtp, comparePassword } from '../security/security.js'
import { otpModel } from '../model/otp.js'
dotenv.config()


export const register = async (req, res) => {

    const { name, email, password, confirmPassword } = req.body

    try {

        if (!name) {
            return res.status(200).json({ error: 'Name is required!', success: false })
        }

        if (!email) {
            return res.status(200).json({ error: 'email is required!', success: false })
        }

        if (!password || password.length < 6) {
            return res.status(200).json({ error: 'password is required and must be atleast 6 characters!', success: false })
        }

        if (!confirmPassword || confirmPassword.length < 6) {
            return res.status(200).json({ error: 'confirm password is required and must be atleast 6 characters!', success: false })
        }

        const match = await userModel.findOne({ email })

        if (match) {
            return res.status(200).json({ error: 'Email already exists!', success: false })
        }

        if (password === confirmPassword) {


            //Increase security
            const hashPass = await hashPassword(password)
            const hashConfirmPass = await hasConfrimPassword(confirmPassword)

            const user = await userModel.create({ name: name, email: email, password: hashPass, confirmPassword: hashConfirmPass })


            //JWT stores user information

            const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, {

                expiresIn: '1d'

            })


            //lets store the token in a cookie

            res.cookie('token', token, {
                httpOnly: true,
                secure: true,
            })


            return res.status(200).json({
                message: 'Successfully registered!', success: true, data: {
                    user: user,
                    token

                }
            })

        }

        else {
            return res.status(200).json({ error: 'Passwords do not match!', success: false })
        }

    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Failed to register', success: false })
    }

}


export const authUser = async (req, res) => {

    try {

      /*  const email = 'tinisthera@gmail.com'

        console.log(email);
        */

        const user = await userModel.findOne({ email: req.user.email })

        if (!user) {
            return res.status(200).json({ error: 'User not found!', success: false })

        }

        return res.status(200).json({
            message: 'User Found!', success: true, data: {
                user: user
            }
        })


    } catch (error) {
        console.log(error);
        return res.status(200).json({ error: 'Failed Authenticating User!', success: false })
    }


}


export const create_otp = async (req, res) => {

    const { email } = req.body

    try {

        const otpGen = genOTP.generate(6, {

            digits: true,
            lowerCase: false,
            upperCase: false,
            lowerCaseAlphabets: false,
            upperCaseAlphabets: false,
            specialChars: false
        })

        const hashedOtp = await hashOtp(otpGen)

        await otpModel.create({ otp: hashedOtp, userEmail: email })

        const transporter = nodemailer.createTransport({

            service: 'Gmail',
            auth: {

                user: 'tinisthera@gmail.com',
                pass: 'evhrsmudgmuasuxk'

            }

        })

        const mailOptions = {

            from: 'Food Eats Team',
            to: email,
            subject: 'OTP Verification Code',
            text: `${otpGen} is your verification code`

        }

        transporter.sendMail(mailOptions, (err, info) => {

            if (err) {
                return res.status(200).json({ error: 'Failed sending an email....', success: false })
            }

            return res.status(200).json({ message: 'Email sent...!', success: true })
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Internal Server Error!' })
    }

}


export const verifyOtp = async (req, res) => {

    const { otp, email } = req.body

    if (!otp) {
        return res.status(200).json({ error: 'OTP is required!', success: false })
    }

    if (otp.length != 6) {
        return res.status(200).json({ error: 'OTP must be 6 digits!', success: false })
    }

    try {

        const otp_ = await otpModel.findOne({ userEmail: email })

        const user = await userModel.findOne({ email: email })

        user.isVerified = true

        await user.save()

        // console.log(`Hello ${otp_}`);


        const isMatch = await compareOtp(otp, otp_.otp)


        if (!isMatch) {
            return res.status(200).json({ error: 'OTP Do Not Match!', success: false })
        }

        await otpModel.deleteOne({ otp: otp_.otp })

        return res.status(200).json({
            message: 'OTP Verified!', success: true, data: {
                otp_: otp_
            }
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Internal Server Error!' })
    }

}


export const verifyEmail = async (req, res) => {

    const { email } = req.body

    if (!email) {
        return res.status(200).json({ error: 'Email is required!', success: false })
    }

    try {


        const otpGen = genOTP.generate(6, {

            digits: true,
            upperCase: false,
            lowerCase: false,
            upperCaseAlphabets: false,
            lowerCaseAlphabets: false,
            specialChars: false

        })

        const hashedOtp = await hashOtp(otpGen)


        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'tinisthera@gmail.com',
                pass: 'evhrsmudgmuasuxk'
            }
        })

        const mailOptions = {
            from: 'Food Eats Team',
            to: email,
            subject: 'OTP Verification Code',
            text: `${otpGen} is your verification code`
        }

        transporter.sendMail(mailOptions, (err, info) => {

            if (err) {
                return res.status(200).json({ error: 'Failed sending an email...', success: false })
            }

            return res.status(200).json({ message: 'OTP sent successfully!', success: true })

        })


        const user_email = await userModel.findOne({ email })

        if (!user_email) {
            return res.status(200).json({ error: 'Please first register email address!', success: false })
        }

        await otpModel.create({ otp: hashedOtp, userEmail: email })


        return res.status(200).json({
            message: 'OTP sent to your email address!', success: true, data: {
                user_email: user_email
            }
        })


    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Internal Server Error!' })
    }


}


export const change_password = async (req, res) => {

    const { currentPassword, newPassword, email } = req.body


    if (!currentPassword || !currentPassword.length > 6) {
        return res.status(200).json({ error: 'Current password is required and must be atleast 6 characters long!', success: false })
    }

    if (!newPassword || !newPassword.length > 6) {
        return res.status(200).json({ error: 'New password is required and must be atleast 6 characters long!!', success: false })
    }


    try {

        const user = await userModel.findOne({ email: email })

        if (user.isVerified) {

            if (currentPassword === newPassword) {

                const hashCurrentPassword = await hashPassword(currentPassword)
                const hashNewPassword = await hasConfrimPassword(newPassword)

                user.password = hashCurrentPassword || user.password
                user.confirmPassword = hashNewPassword || user.confirmPassword

                await user.save()

                return res.status(200).json({ message: 'Password changed successfully!', success: true })
            }

            else {
                return res.status(200).json({ error: 'Passwords Do Not Match!', success: false })
            }

        }

        else {
            return res.status(200).json({ error: 'Please verify your OTP sent to your email!', success: false })
        }


    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Internal Server Error!' })
    }


}

export const loginUser = async (req, res) => {

    const { password, email } = req.body

    try {

        if (!email) {
            return res.status(200).json({ error: 'Email is required!', success: false })
        }

        if (!password) {
            return res.status(200).json({ error: 'Password is required!', success: false })
        }

        const user = await userModel.findOne({ email: email })

        

        if (!user) {
            return res.status(200).json({ error: 'invalid login details!', success: false })
        }

        //Used to store user info
        const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, {
            expiresIn: '1d'
        })

        //Store token in cookie

        res.cookie('token', token, {

            httpOnly: true,
            secure: true

        })

        //compare passwords

        const isMatch = await comparePassword(password, user.password)

        if (!isMatch) {
            return res.status(200).json({ error: 'Wrong Password!', success: false })
        }

        return res.status(200).json({
            message: '', success: true, data: {
                user: user,
                token
            }
        })


    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Internal Server Error!' })
    }


}

export const logout = async (req, res) => {

    try {

        res.clearCookie('token', {

            httpOnly: true,
            secure: true
        })

        return res.status(200).json({message: 'Logged out successfully!', success:true})
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({error: 'Logout error!'})
        
        
    }


}