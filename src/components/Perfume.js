import cart from '../assets/perfume/shopping-cart.png'
import productDesktop from '../assets/perfume/product-desktop.jpg'
import productMobile from '../assets/perfume/product-mobile.jpg'
import Data from './constants/Data'



const Perfume = () => {


  return (
    <div className='perfume'> 
      <div className='perf--container'>
        <img src={productDesktop} />
        <div className='perf--texts'>
            <p id='perf--title'>{Data.title}</p>
            <h2 id='subtitle'>{Data.subTitle}</h2>
            <p id='same--color'>{Data.content}</p>
            <div>
              <p id='amount'>{Data.amount1}  
                  <span id='same--color'> <sup>{Data.amount2}</sup></span>
              </p>
            </div>
            <div>
              <button>{Data.button}</button>
            </div>  
        </div>
      </div>
    </div>
  )
}

export default Perfume;