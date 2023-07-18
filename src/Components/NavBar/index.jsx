import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';

export default function NavBar() {
	const activeStyle = 'underline underline-offset-4 text-slate-500';
	const context = useContext(ShoppingCartContext);

	// SING OUT
	const singOut = localStorage.getItem('sing-out');
	const parsedSingOut = JSON.parse(singOut);
	const isUserSingOut = context.singOut || parsedSingOut;

	// ACCOUNT
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

	const handleSingOut = () => {
		const stringifiedSingOut = JSON.stringify(true);
		localStorage.setItem('sing-out', stringifiedSingOut);
		context.setSingOut(true);
	};

	const renderView = () => {
		if (hasUserAnAccount && !isUserSingOut) {
			return (
				<>
					<li className='text-black/60'>{parsedAccount?.email}</li>
					<li>
						<NavLink
							to='/my-orders'
							className={({ isActive }) => (isActive ? activeStyle : undefined)}
						>
							My Orders
						</NavLink>
					</li>
					<li>
						<NavLink
							to='/my-account'
							className={({ isActive }) => (isActive ? activeStyle : undefined)}
						>
							My Account
						</NavLink>
					</li>
					<li>
						<NavLink
							to='/sing-in'
							className={({ isActive }) => (isActive ? activeStyle : undefined)}
							onClick={() => handleSingOut()}
						>
							Sing Out
						</NavLink>
					</li>
				</>
			);
		} else {
			return (
				<li>
					<NavLink
						to='/sing-in'
						className={({ isActive }) => (isActive ? activeStyle : undefined)}
						onClick={() => handleSingOut()}
					>
						Sign in
					</NavLink>
				</li>
			);
		}
	};

	return (
		<nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light shadow-md bg-white'>
			<ul className='flex items-center gap-2'>
				<li className='font-semibold text-lg'>
					<NavLink to={`${isUserSingOut ? '/sing-in' : '/'}`}>Amazon</NavLink>
				</li>
				<li>
					<NavLink
						to='/'
						className={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						All
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/clothes'
						className={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						Clothes
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/electronics'
						className={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						Electronics
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/furniture'
						className={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						Furnitures
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/shoes'
						className={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						Shoes
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/others'
						className={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						Others
					</NavLink>
				</li>
			</ul>
			<ul className='flex items-center gap-2'>
				{renderView()}
				<li className='flex justify-center items-center'>
					<ShoppingCartIcon className='w-5 h-5 mr-1' />
					{context.count}
				</li>
			</ul>
		</nav>
	);
}
