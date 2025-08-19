import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import AddPost from "./pages/AddPost";
import ProductList from "./pages/ProductList";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Layout>
        <Routes>
          <Route path="/add" element={<AddPost />} />
          <Route path="/edit/:id" element={<AddPost />} />
          <Route path="/" element={<ProductList />} />
        </Routes>
      </Layout>
    </Provider>
  );
}

export default App;
