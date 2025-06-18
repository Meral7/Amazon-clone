import { useAuth } from '../context/GlobalState';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';

export default function CheckoutProduct({ images, price, title, rating, id, hiddenButton ,   brand}) {
  const {  dispatch } = useAuth();

  const removed_from_basket = () => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id,
    });
  };

  return (
    <>
      <div
        key={id}
        className='p-4 w-full flex flex-col sm:flex-row gap-4 justify-between items-center bg-white hover:bg-[#bdc3c7] rounded-lg shadow-sm transition-all duration-300'
      >
        <img
          src={images}
          alt={`${title} ${brand}`}
          className='rounded-lg w-24 h-24 object-contain sm:w-32 sm:h-32'
        />

        <div className='flex flex-col items-center sm:items-start text-center sm:text-left flex-1'>
          <p className='font-semibold text-base sm:text-lg'>{title}</p>
          <p className='text-gray-700 mt-1'>$ {price}</p>
          <div className="flex text-yellow-500 mt-2">
             <StarOutlinedIcon  /> <strong>{rating}</strong>
            {/* {Array(rating).fill().map((_, i) => (
              <StarOutlinedIcon key={i} />
            ))} */}
          </div>
        </div>

        {!hiddenButton && (
          <button
            onClick={removed_from_basket}
            className='bg-red-600 text-white px-4 py-2 rounded-md hover:scale-105 transition-transform text-sm sm:text-base'
          >
            Remove
          </button>
        )}
      </div>
      <br />
    </>
  );
}
