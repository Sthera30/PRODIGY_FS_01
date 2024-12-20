import React from 'react'
import img1 from '../assets/front-view-person-holding-burger-with-fried-egg.png'
import img2 from '../assets/delicious-truffle-pasta-still-life-high-angle.jpg'
import img3 from '../assets/side-view-grilled-fish-steak-with-slices-lemon-tomato-cucumber-plate.jpg'
import img4 from '../assets/flat-lay-delicious-food-assortment.png'
import img5 from '../assets/side-view-chicken-doner-with-greens-cucumber-tomato-sauce-cucumber-red-onion-pita-slice-lemon-board.png'
import img6 from '../assets/hand-spoon-with-delicious-fried-churros.png'
import img7 from '../assets/bbq-ribs-meat-steak.png'
import img8 from '../assets/chicken-steak-placed-wooden-tray.png'
import img9 from '../assets/halved-melon-with-slices-fruits-bowl.png'
import img10 from '../assets/side-view-pasta-with-cheese-chicken-with-slices-bread.png'


import '../css/ourFood.css'

function OurFood() {
  return (
    <>

      <div className='our-food-burner'>

        <div className='our-food-berner-inner'>

          <span>OUR FOOD</span>

        </div>

      </div>

      <div className='box-containe'>

        <div className='box-con'>

          <img src={img1} />
          <h6>Grilled Salmon</h6>
          <p>Fresh Atlantic salmon with lemon herb butter</p>

          <div className='price'>

            <span>R200</span>

          </div>

        </div>

        <div className='box-con'>
          <img src={img2} />
          <h6>Truffle Pasta</h6>
          <p>Homemade fettuccine with black truffle cream</p>

          <div className='price'>

            <span>R120</span>

          </div>
        </div>

        <div className='box-con'>
          <img src={img3} />
          <h6>Wagyu Burger</h6>
          <p>Premium beef with caramelized onions</p>

          <div className='price'>

            <span>R300</span>

          </div>
        </div>

        <div className='box-con'>
          <img src={img4} />
          <h6>Churros</h6>
          <p>Deep-fried dough sticks coated in cinnamon sugar, often served with chocolate sauce.</p>

          <div className='price'>

            <span>R450</span>

          </div>
        </div>


        <div className='box-con'>
          <img src={img5} />
          <h6>Shawarma</h6>
          <p>Middle Eastern wrap filled with shaved meat, vegetables, and tahini sauce.</p>

          <div className='price'>

            <span>R320</span>

          </div>
        </div>


        <div className='box-con'>
          <img src={img6} />
          <h6>Arepas</h6>
          <p>Cornmeal cakes from South America, often stuffed with cheese or meat.
          </p>

          <div className='price'>

            <span>R500</span>

          </div>
        </div>


        <div className='box-con'>
          <img src={img8} />
          <h6>Arepas</h6>
          <p>Juicy and tender chicken breasts marinated in a zesty blend of olive oil, garlic, lemon, and herbs, grilled to perfection. A healthy and flavorful dish that's perfect for a light lunch or dinner.
          </p>

          <div className='price'>

            <span>R550</span>

          </div>
        </div>


        <div className='box-con'>
          <img src={img9} />
          <h6>Arepas</h6>
          <p>A comforting bowl of fettuccine tossed in a rich and creamy Alfredo sauce with a touch of sautéed spinach. This dish is a perfect balance of indulgence and nutrition, topped with a sprinkle of Parmesan cheese.
          </p>

          <div className='price'>

            <span>R400</span>

          </div>
        </div>


        <div className='box-con'>
          <img src={img10} />
          <h6>Arepas</h6>
          <p>A refreshing salad featuring ripe mangoes, creamy avocado slices, mixed greens, and a tangy lime-honey dressing. Perfect as a side dish or a light meal on a sunny day.
          </p>

          <div className='price'>

            <span>R360</span>

          </div>
        </div>

      </div>

    </>
  )
}

export default OurFood
