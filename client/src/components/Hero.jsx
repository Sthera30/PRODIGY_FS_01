import React from 'react'
import '../css/hero.css'
import Img1 from '../assets/italian-pasta-with-green-herbs-white-bowl.png'

function Hero() {
    return (
        <>

            <div className='hero-container'>


                <div className='hero-left'>

                    <h3>Your Ultimate Culinary Adventure Awaits</h3>
                    <p>At Food Eats, we bring you a world of flavor, one bite at a time. From mouthwatering recipes to expert cooking tips and the latest food trends, we curate the best in food to inspire your next meal. Explore, discover, and savor every delicious moment.</p>
                    <button type='submit' className='btnExplore'>Explore More</button>

                </div>


                <div className='hero-right'>

                    <img src={Img1} />


                </div>


            </div>


        </>
    )
}

export default Hero
