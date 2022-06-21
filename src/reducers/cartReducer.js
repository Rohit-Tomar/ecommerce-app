const initialProducts = []; //  [{id, quantity}]

const cartReducer = (products = initialProducts, action) => {
  switch (action.type) {
    // action: {id}
    case "ADD_PRODUCT": {
      const id = action.id;
      const index = products.findIndex(product => product.id === id);
      let updatedProducts;
      if (products[index]) {
        updatedProducts = [...products];
        const updatedProduct = updatedProducts[index];
        updatedProduct.quantity += 1;
        updatedProducts[index] = updatedProduct;
      } else {
        updatedProducts = products.concat({ id: id, quantity: 1 });
      }
      return updatedProducts;
    }
    case "REMOVE_PRODUCT": {
      const id = action.id;
      const index = products.findIndex(product => product.id === id);
      let updatedProducts;
      if (!products[index]) {
        return products;
      } else if (products[index].quantity === 1) {
        updatedProducts = [...products];
        updatedProducts.splice(index, 1);
      } else {
        updatedProducts = [...products];
        const updatedProduct = updatedProducts[index];
        updatedProduct.quantity -= 1;
        updatedProducts[index] = updatedProduct;
      }
      return updatedProducts;
    }
    case "DELETE_PRODUCT": {
      const id = action.id;
      const filteredProducts = products.filter(product => product.id !== id);
      return filteredProducts;
    }
    case "CLEAR": {
      return [];
    }
    default:
      return products;
  }
};

export default cartReducer;
