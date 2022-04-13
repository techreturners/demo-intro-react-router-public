
import { Routes, Route } from "react-router-dom";
import About from "../about/about";
import Home from "../home/home";
import NotFound from '../not_found/not_found';
import MainLayout from "../layouts/main_layout";
import Help from "../help/help";
import Products from "../products/products";
import Product from "../products/product/product";

const Router = () => <Routes>
    <Route path="/" element={<MainLayout/>}>
        <Route index element={<Home/>}/>
        <Route path="about" element={<About/>} />
        <Route path="help" element={<Help/>} />

        <Route path="products" element={<Products/>}/>
        <Route path="products/:productId" element={<Product/>}/>            

        <Route path="*" element={<NotFound/>} />
    </Route>
</Routes>;

export default Router;