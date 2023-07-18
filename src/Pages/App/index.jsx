import { useContext } from 'react';
import { useRoutes, BrowserRouter, Navigate } from 'react-router-dom';
// CONTEXT
import {
	ShoppingCartProvider,
	initializeLocalStorage,
	ShoppingCartContext,
} from '../../Context';
//  PAGES
import Home from '../Home';
import MyAccount from '../MyAccount';
import MyOrder from '../MyOrder';
import MyOrders from '../MyOrders';
import SingIn from '../SingIn';
import NotFound from '../NotFound';
// COMPONENTS
import NavBar from '../../Components/NavBar';
import CheckoutSideMenu from '../../Components/CheckoutSideMenu';
import './App.css';

const AppRoutes = () => {
	const context = useContext(ShoppingCartContext);

	// ACCOUNT
	const account = localStorage.getItem('account');
	const parsedAccount = JSON.parse(account);

	// SING OUT
	const singOut = localStorage.getItem('sing-out');
	const parsedSingOut = JSON.parse(singOut);

	// HAS ACCOUNT
	const noAccountInLocalStorage = parsedAccount
		? Object.keys(parsedAccount).length === 0
		: true;
	const noAccountInLocalState = Object.keys(context.account).length === 0;
	const hasUserAnAccount = !noAccountInLocalState || !noAccountInLocalStorage;
	const isUserSignOut = context.singOut || parsedSingOut;

	const routes = useRoutes([
		{
			path: '/',
			element:
				hasUserAnAccount && !isUserSignOut ? (
					<Home />
				) : (
					<Navigate replace to={'/sing-in'} />
				),
		},
		{
			path: '/:category',
			element:
				hasUserAnAccount && !isUserSignOut ? (
					<Home />
				) : (
					<Navigate replace to={'/sing-in'} />
				),
		},
		{ path: '/my-account', element: <MyAccount /> },
		{ path: '/my-order', element: <MyOrder /> },
		{ path: '/my-orders', element: <MyOrders /> },
		{ path: '/my-orders/last', element: <MyOrder /> },
		{ path: '/my-orders/:id', element: <MyOrder /> },
		{ path: '/sing-in', element: <SingIn /> },
		{ path: '*', element: <NotFound /> },
	]);

	return routes;
};

function App() {
	initializeLocalStorage();

	return (
		<ShoppingCartProvider>
			<BrowserRouter>
				<AppRoutes />
				<NavBar />
				<CheckoutSideMenu />
			</BrowserRouter>
		</ShoppingCartProvider>
	);
}

export default App;
