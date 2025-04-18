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
      default:
        return state;
  }
}
export default AppReducer
