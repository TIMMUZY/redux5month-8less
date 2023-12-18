import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../api/api';

const fetchAllCartItems = createAsyncThunk('cart/fetchall', async (payload, thunkApi) => {
    try {
        const response = await api.getCart();
        return response.data;
    } catch (error) {
        return thunkApi.rejectWithValue(error);
    }
});

export const fetchToAddItem = createAsyncThunk('cart/addItem', async (payload, thunkApi) => {
    try {
        const { books } = thunkApi.getState().bookList;
        const { cart } = thunkApi.getState().cartList;
        const book = books.find(({ id }) => id === payload);
        const item = cart.find(({ id }) => id === payload);

        if (!item) {
            const newItem = {
                total: book.price,
                title: book.title,
                id: book.id,
                count: 1,
            };

            api.addCartItem(newItem);
            return [...cart, newItem];
        } else {
            const newItem = {
                ...item,
                total: item.total + book.price,
                count: item.count + 1,
            };

            api.updateCartItem(newItem);
            return cart.map((el) => (newItem.id === el.id ? newItem : el));
        }

    } catch (error) {
        return thunkApi.rejectWithValue(error);
    }
})

export default fetchAllCartItems;