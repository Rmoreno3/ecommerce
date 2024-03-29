import { useContext, useState, useRef } from 'react';
import { ShoppingCartContext } from '../../Context/';
import { Link, Navigate } from 'react-router-dom';

function SingIn() {
	const context = useContext(ShoppingCartContext);
	const [view, setView] = useState('user-info');
	const form = useRef(null);

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

	// HAS SIG IN
	const handleSingIn = () => {
		const stringifiedSingOut = JSON.stringify(false);
		localStorage.setItem('sing-out', stringifiedSingOut);
		context.setSingOut(false);

		// REDIRECT
		return <Navigate replace to={'/'} />;
	};

	// CREATE AN ACCOUNT
	const createAnAccount = () => {
		const formData = new FormData(form.current);
		const data = {
			name: formData.get('name'),
			email: formData.get('email'),
			password: formData.get('password'),
		};

		// CREATE ACCOUNT IN LOCALSTORAGE AND LOCALSTATE
		const stringifiedAccount = JSON.stringify(data);
		localStorage.setItem('account', stringifiedAccount);
		context.setAccount(data);

		// SIGN IN
		handleSingIn();
	};

	// LOGIN VIEW
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
						onClick={() => handleSingIn()}
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

	// CREATE USER VIEW
	const renderCreateUserInfo = () => {
		return (
			<form ref={form} className='flex flex-col gap-4 w-80'>
				<div className='flex flex-col gap-1'>
					<label htmlFor='name' className='font-liht text-sm'>
						Your Name:
					</label>
					<input
						type='text'
						id='name'
						name='name'
						defaultValue={parsedAccount?.name}
						placeholder='Your Name'
						className='rounded-l border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4'
					/>
				</div>
				<div className='flex flex-col gap-1'>
					<label htmlFor='email' className='font-liht text-sm'>
						Your Email:
					</label>
					<input
						type='email'
						id='email'
						name='email'
						defaultValue={parsedAccount?.email}
						placeholder='Your Email'
						className='rounded-l border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4'
					/>
				</div>
				<div className='flex flex-col gap-1'>
					<label htmlFor='password' className='font-liht text-sm'>
						Password:
					</label>
					<input
						type='password'
						id='password'
						name='password'
						defaultValue={parsedAccount?.password}
						placeholder='Password'
						className='rounded-l border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4'
					/>
				</div>
				<Link to='/'>
					<button
						className='bg-black text-white w-full rounded-lg py-3 '
						onClick={() => createAnAccount()}
					>
						Create
					</button>
				</Link>
			</form>
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
