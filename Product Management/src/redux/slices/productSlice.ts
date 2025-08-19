import {
  createSlice,
  createAsyncThunk,
  type PayloadAction,
} from "@reduxjs/toolkit";
import axios from "axios";

export interface Product {
  id: number;
  title: string;
  category: string;
  price: number;
  description: string;
  image: string;
  rating?: { rate: number; count: number };
}

interface ProductState {
  items: Product[];
  loading: boolean;
  error: string | null;
  search: string;
  category: string;
  page: number;
  perPage: number;
}

// LocalStorage helpers
const loadFromLocalStorage = (): Product[] => {
  const data = localStorage.getItem("products");
  return data ? JSON.parse(data) : [];
};
const saveToLocalStorage = (products: Product[]) => {
  localStorage.setItem("products", JSON.stringify(products));
};

// API Thunks
export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  const res = await axios.get<Product[]>("https://fakestoreapi.com/products");
  return res.data;
});

const initialState: ProductState = {
  items: loadFromLocalStorage(),
  loading: false,
  error: null,
  search: "",
  category: "",
  page: 1,
  perPage: 10,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      state.items.push(action.payload);
      saveToLocalStorage(state.items);
    },
    updateProduct: (
      state,
      action: PayloadAction<{ id: number; productBody: Product }>
    ) => {
      const idx = state.items.findIndex((p) => p.id === action.payload.id);
      if (idx !== -1) state.items[idx] = action.payload.productBody;
      saveToLocalStorage(state.items);
    },
    deleteProduct: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((p) => p.id !== action.payload);
      saveToLocalStorage(state.items);
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setPerPage: (state, action: PayloadAction<number>) => {
      state.perPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
        saveToLocalStorage(action.payload);
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to fetch products";
      });
  },
});

export const {
  addProduct,
  updateProduct,
  deleteProduct,
  setSearch,
  setCategory,
  setPage,
  setPerPage,
} = productSlice.actions;

export default productSlice.reducer;
