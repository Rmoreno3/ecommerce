/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from 'react';

export const ShoppingCartContext = createContext();

export const initializeLocalStorage = () => {
	const accountInLocalStorage = localStorage.getItem('account');
	const singOutInLocalStorage = localStorage.getItem('sing-out');

	let parsedAccount;
	let parsedSingOut;

	if (!accountInLocalStorage || !singOutInLocalStorage) {
		localStorage.setItem('account', JSON.stringify({}));
		localStorage.setItem('sing-out', JSON.stringify(false));
		parsedAccount = {};
		parsedSingOut = false;
	} else {
		parsedAccount = JSON.parse(accountInLocalStorage);
		parsedSingOut = JSON.parse(singOutInLocalStorage);
	}
};

export const ShoppingCartProvider = ({ children }) => {
	// GET Products
	const API = 'https://api.escuelajs.co/api/v1/products';
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

	// GET Producrs by SerachTitleBar
	const [filteredProducts, setFilteredProducts] = useState([]);
	const [searchTitleBar, setSearchTitleBar] = useState('');

	const handleClearSearch = () => {
		setSearchTitleBar('');
	};

	const Search = event => {
		setSearchTitleBar(event.target.value);
	};
	const FilteredProductsByTitle = (product, searchTitleBar) => {
		return product?.filter(product =>
			product.title.toLowerCase().includes(searchTitleBar.toLowerCase())
		);
	};

	useEffect(() => {
		if (searchTitleBar)
			setFilteredProducts(FilteredProductsByTitle(product, searchTitleBar));
	}, [product, searchTitleBar]);

	// MY ACCOUNT
	const [account, setAccount] = useState({});

	// SING OUT
	const [singOut, setSingOut] = useState(false);

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
				searchTitleBar,
				Search,
				handleClearSearch,
				filteredProducts,
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
				setOrder,
				account,
				setAccount,
				singOut,
				setSingOut,
			}}
		>
			{children}
		</ShoppingCartContext.Provider>
	);
};
