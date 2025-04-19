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
      default:
        return state;
  }
}
export default AppReducer
