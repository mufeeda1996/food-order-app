import { createSlice } from '@reduxjs/toolkit';
import products from '../../public/product.json'; 

const initialState = {
  allProducts: products,
  items: [], // Cart items should be defined here
};

const productSlice = createSlice({
  name: 'products',
  initialState, // ✅ only initialState here
  reducers: {
    setProducts(state, action) {
      state.allProducts = action.payload;
    },
    deleteProduct(state, action) {
      state.allProducts = state.allProducts.filter(p => p.id !== action.payload);
    },
    addProduct(state, action) {
      state.allProducts.push(action.payload);
    },
    addToCart(state, action) {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});

export const { setProducts, deleteProduct, addProduct, addToCart, removeFromCart } = productSlice.actions;

export default productSlice.reducer;
