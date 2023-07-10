/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  // GET Products
  const API = "https://api.escuelajs.co/api/v1/products";
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API);
        const data = await response.json();
        setProduct(data);
        // console.log(data.title);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);


  // Shopping cart - Imcrement quantity
  const [count, setCount] = useState(0);

  // Shopping cart - Add product to cart
  const [cartProducts, setCartProducts] = useState([]);

  // Shopping cart - Order
  const [order, setOrder] = useState([]);

  // Product Detail - Open / Close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);
  
  // Product Detail - Show Product
  const [productToShow, setProductToShow] = useState([]);

  // Checkout Side Menu - Open / Close
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);


  return (
    <ShoppingCartContext.Provider
      value={{
        product,
        setProduct,
        count,
        setCount,
        isProductDetailOpen,
        openProductDetail,
        closeProductDetail,
        isCheckoutSideMenuOpen,
        openCheckoutSideMenu,
        closeCheckoutSideMenu,
        productToShow,
        setProductToShow,
        cartProducts,
        setCartProducts,
        order,
        setOrder
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
