import { useEffect,useContext } from "react";

import "./Home.scss";
import Banner from "./Banner/Banner"
import Category from "../Home/Category/Category";
import Products from "../Products/Products";
import { fetchDataFromApi } from "../../utils/api";
import { Context } from "../../utils/context";

const Home = () => {
    const {categories,setCategories,products,setProducts}=useContext(Context)

    useEffect(()=>{
        getproducts();
        getCategories();
    },[]);

    const getCategories=()=>{
        fetchDataFromApi("/api/categories?populate=*").then(res=>{
            console.log(res);
            setCategories(res)
        })
    }
    const getproducts=()=>{
        fetchDataFromApi("/api/products?populate=*").then(res=>{
            console.log(res);
            setProducts(res)
        })
    }

    return (
    <div>
        <Banner/>
        <div className="main-content">
            <div className="layout">
                <Category categories={categories}/>
                <Products products={products} headingText="Popular Products"/>
            </div>
        </div>
    </div>
    );
};

export default Home;
