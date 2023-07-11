// COMPONENTS
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import Card from '../../Components/Card';
import ProductDetail from '../../Components/ProductDetail';
import { XMarkIcon } from '@heroicons/react/24/outline';

function Home() {
	const context = useContext(ShoppingCartContext);
	const currentPath = window.location.pathname;
	const index = currentPath.substring(currentPath.lastIndexOf('/') + 1);

	const renderView = () => {
		if (context.searchTitleBar?.length > 0) {
			if (context.filteredProducts?.length > 0) {
				if (index) {
					return context.filteredProducts
						?.filter(product => product.category.name.toLowerCase() === index)
						.map(product => <Card key={product.id} data={product} />);
				} else {
					return context.filteredProducts?.map(product => (
						<Card key={product.id} data={product} />
					));
				}
			} else {
				return <div>NOT FOUND</div>;
			}
		} else {
			return context.product?.map(product => (
				<Card key={product.id} data={product} />
			));
		}
	};

	return (
		<>
			<div className='m-4 flex relative items-center'>
				<input
					className='border border-black rounded-lg w-80 p-4 mb-4 focus:outline-none relative'
					type='text'
					value={context.searchTitleBar}
					placeholder='Search'
					onChange={context.Search}
				/>
				{context.searchTitleBar?.length > 0 && (
					<XMarkIcon
						className='h-6 w-6 cursor-pointer text-black absolute right-4 top-4'
						onClick={context.handleClearSearch}
					/>
				)}
			</div>
			<div className='grid gap-4 grid-cols-3 w-full max-w-screen-md'>
				{renderView()}
			</div>
			<ProductDetail />
		</>
	);
}

export default Home;
