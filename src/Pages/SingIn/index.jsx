import { useContext, useState } from 'react';
import { ShoppingCartContext } from '../../Context/';
import { Link } from 'react-router-dom';

function SingIn() {
	const context = useContext(ShoppingCartContext);
	const [view, setView] = useState('user-info');

	// ACOUNT
	const account = localStorage.getItem('account');
	const parsedAccount = JSON.parse(account);

	// HAS ACCOUNT
	const noAccountInLocalStorage = parsedAccount
		? Object.keys(parsedAccount).length === 0
		: true;
	const noAccountInLocalState = context.account
		? Object.keys(context.account).length === 0
		: true;
	const hasUserAnAccount = !noAccountInLocalState || !noAccountInLocalStorage;

	const renderLogin = () => {
		return (
			<div className='flex flex-col w-80'>
				<p>
					<span className='font-light text-sm'>Email:</span>
					<span>{parsedAccount?.email}</span>
				</p>
				<p>
					<span className='font-light text-sm'>Password:</span>
					<span>{parsedAccount?.password}</span>
				</p>
				<Link to='/'>
					<button
						className='bg-black disabled:bg-black/40 text-white w-full rounded-lg py-3 mt-4 mb-2'
						disabled={!hasUserAnAccount}
					>
						Login
					</button>
				</Link>
				<div className='text-center'>
					<a className='font-light text-xs underline underline-offset-4'>
						Forgot My Password
					</a>
				</div>
				<button
					className='border border-black disabled:text-black/40 disabled:border-black/40 rounded-lg mt-6 py-3'
					disabled={hasUserAnAccount}
					onClick={() => setView('create-user-info')}
				>
					Sign Up
				</button>
			</div>
		);
	};

	const renderCreateUserInfo = () => {
		return (
			<>
				<div>crear usuario</div>
				{/* <button onClick={() => setView('user-info')}>login</button> */}
			</>
		);
	};

	const renderView = () =>
		view === 'create-user-info' ? renderCreateUserInfo() : renderLogin();

	return (
		<>
			<h1 className='font-medium text-xl text-center mb-6 w-80'>Welcome</h1>
			{renderView()}
		</>
	);
}

export default SingIn;
