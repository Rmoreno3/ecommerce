/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  // Shopping cart - Imcrement quantity
  const [count, setCount] = useState(0);

  // Shopping cart - Add product to cart
  const [cartProducts, setCartProducts] = useState([]);

  // Product Detail - Open / Close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);

  // Product Detail - Show Product
  const [productToShow, setProductToShow] = useState([]);

  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        isProductDetailOpen,
        openProductDetail,
        closeProductDetail,
        productToShow,
        setProductToShow,
        cartProducts,
        setCartProducts,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
