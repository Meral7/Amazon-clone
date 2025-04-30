
import { useAuth } from '../context/GlobalState';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
export default function CheckoutProduct({ image, price, title, rating , id ,hiddenButton }) {
    const {basket, dispatch} = useAuth();
    const removed_from_basket = () => {
        console.log('removed from basket')
        console.log(basket)
        dispatch({
            type: 'REMOVE_FROM_BASKET',
             
          id:id})}
           
  return (
    <>
      
      <div key={id} className='text-center p-4  w-full flex justify-between items-center hover:black hover:text-black  bg-[white] hover:bg-[#bdc3c7]'>
      <img src={image} alt="product" className=' rounded-lg h-20 ' />
      <div className='flex flex-col'>
        <p>{title}</p>
        <p>$ {price}</p>
        <div className="flex text-yellow-500">
          {Array(rating).fill().map((_, i) => (
            <span key={i}> <StarOutlinedIcon  key={i}/></span>

          ))}
    
        </div>
      </div>
{!hiddenButton &&       <button onClick={removed_from_basket} className='bg-red-600 hover:scale-110 transition-all duration-300 h-fit p-6 ustify-self-end rounded-lg'>Remove from Basket</button>}
    </div>
    <br/>
    </>
  )
}
