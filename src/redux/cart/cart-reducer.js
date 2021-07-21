import { toggleCart } from "./cart-actions";
const INITIAL_STATE={hidden:true};

const cartReducer=(state=INITIAL_STATE, action)=>{
    switch(action.payload){
        case 'TOGGLE_CART':
            return{
                ...state,
                hidden:!state.hidden
            };
        default: return state;   

    }
}

export default cartReducer;