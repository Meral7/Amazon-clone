export  const getBasketTotal = (basket) => {
  //return basket?.reduce((amount, item) => item.price + amount, 0);
 return basket.reduce((amount,item)=>{return item.price + amount},0)
}
export const initialState = {
  user: null,
basket:[]
};
const AppReducer = (state = initialState, action) => {
  switch(action.type){
    case 'SET_USER':
      return {
        ...state,
        user: action.user
      };
      case 'ADD_TO_BASKET':
        return {
          ...state,
          basket: [...state.basket, action.item] // ...state.basket to save another item in the basket
        };
        case 'REMOVE_FROM_BASKET':
     {     const index= state.basket.findIndex((basketItem) => basketItem.id === action.id);
          var newBasket = [...state.basket]
          if(index>=0){
            newBasket.splice(index,1)
          }
        else `can't remove product (id: ${action.id}) as it's not in the basket`;}
        return {
          ...state,
          basket: newBasket // ...state.basket to save another item in the basket
        };
        case 'Empty_Basket':
        return {
          ...state,
          basket: [] 
        };
      default:
        return state;
  }
}
export default AppReducer
