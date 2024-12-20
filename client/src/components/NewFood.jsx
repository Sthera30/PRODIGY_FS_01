import React from 'react'
import { FaUtensilSpoon } from 'react-icons/fa'
import img1 from '../assets/front-view-person-holding-burger-with-fried-egg.png'
import img2 from '../assets/delicious-truffle-pasta-still-life-high-angle.jpg'
import img3 from '../assets/side-view-grilled-fish-steak-with-slices-lemon-tomato-cucumber-plate.jpg'
import img4 from '../assets/flat-lay-delicious-food-assortment.png'
import img5 from '../assets/side-view-chicken-doner-with-greens-cucumber-tomato-sauce-cucumber-red-onion-pita-slice-lemon-board.png'
import img6 from '../assets/hand-spoon-with-delicious-fried-churros.png'
import img7 from '../assets/bbq-ribs-meat-steak.png'

import '../css/NewFood.css'

function NewFood() {
    return (
        <>

            <div className='box-container'>

                <h3><FaUtensilSpoon className='spoon' /> Latest Food</h3>

                <div className='box-container-inner'>

                    <div className='box'>

                        <img src={img1} />
                        <h6>Grilled Salmon</h6>
                        <p>Fresh Atlantic salmon with lemon herb butter</p>

                        <div className='price'>

                            <span>R200</span>

                        </div>

                    </div>

                    <div className='box'>
                        <img src={img2} />
                        <h6>Truffle Pasta</h6>
                        <p>Homemade fettuccine with black truffle cream</p>

                        <div className='price'>

                            <span>R120</span>

                        </div>
                    </div>

                    <div className='box'>
                        <img src={img3} />
                        <h6>Wagyu Burger</h6>
                        <p>Premium beef with caramelized onions</p>

                        <div className='price'>

                            <span>R300</span>

                        </div>
                    </div>

                    <div className='box'>
                        <img src={img4} />
                        <h6>Churros</h6>
                        <p>Deep-fried dough sticks coated in cinnamon sugar, often served with chocolate sauce.</p>

                        <div className='price'>

                            <span>R450</span>

                        </div>
                    </div>


                    <div className='box'>
                        <img src={img5} />
                        <h6>Shawarma</h6>
                        <p>Middle Eastern wrap filled with shaved meat, vegetables, and tahini sauce.</p>

                        <div className='price'>

                            <span>R320</span>

                        </div>
                    </div>


                    <div className='box'>
                        <img src={img6} />
                        <h6>Arepas</h6>
                        <p>Cornmeal cakes from South America, often stuffed with cheese or meat.
                        </p>

                        <div className='price'>

                            <span>R500</span>

                        </div>
                    </div>



                </div>

            </div>

            <div className='burner'>

                <div className='burner-inner'>

                    <h4>Unleash the Flame of Flavor</h4>
                    <p>Transform your cooking experience with our premium burner, designed to deliver precise heat control for perfect results every time. Whether you're searing, simmering, or flambéing, this burner is your key to unlocking bold and unforgettable flavors.</p>

                </div>

                <div className='burner-right'>

                    <img src={img7} alt="" />

                </div>

            </div>


        </>
    )
}

export default NewFood
