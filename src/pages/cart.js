import {useContext} from 'react';
import Layout from '../components/Layout/index';
import {HEADER_FOOTER_ENDPOINT} from '../utils/constants/endpoints'
import axios from 'axios';
import CartItemsContainer from '../components/cart/cart-items-container';

export default function Cart({ data }) {
	return (
		<Layout data={data || {}}>
			<h1>Cart</h1>
			<CartItemsContainer/>
		</Layout>
	);
}

export async function getStaticProps() {
	
	const { data } = await axios.get( HEADER_FOOTER_ENDPOINT );
	
	return {
		props: {
			data: data?.data ?? {},
		},
		
		/**
		 * Revalidate means that if a new request comes to server, then every 1 sec it will check
		 * if the data is changed, if it is changed then it will update the
		 * static file inside .next folder with the new data, so that any 'SUBSEQUENT' requests should have updated data.
		 */
		revalidate: 1,
	};
}