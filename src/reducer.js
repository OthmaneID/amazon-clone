export const initialState = {
    basket: [],
    user: null,
};






const reducer = (state, action) => {
    switch (action.type) {
        // Adding an item to the basket
        case 'ADD_TO_BASKET':

            return { ...state, basket: [...state.basket, action.item] };
        case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id)
            let newBasket = [...state.basket];
            if (index >= 0) {
                newBasket.splice(index, 1)
            } else {
                console.warn(`can't remove   product(id:${action.id}) as basket`)
            }
            return { ...state, basket: newBasket };
        // Create a user
        case "SET_USER":
            return {
                ...state, user: action.user
            }
        // Editing the item Count
        case "INCREASE_ITEM_COUNT":
            return {
                ...state,
                basket: state.basket.map((item) =>
                    item.id === action.item.id ? {
                        ...item,
                        count: item.count + 1
                    }
                        : item)
            }

        case "DECREASE_ITEM_COUNT":
            return {
                ...state,
                basket: state.basket.map((item) =>
                    item.id === action.item.id ? {
                        ...item,
                        count: item.count - 1
                    }
                        : item)
            }
        case 'EMPTY_BASKET':
            return {
                ...state, basket: []
            }
        default:
            return state;
    }

}


export default reducer;