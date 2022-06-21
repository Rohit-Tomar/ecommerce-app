const initialState = {
  selectedCategory: null,
  allProducts: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CATEGORY": {
      return { ...state, selectedCategory: action.category };
    }
    case "SET_PRODUCTS": {
      return { ...state, allProducts: action.products };
    }
    default: {
      return state;
    }
  }
};

export default productReducer;
