import Layout from '../components/Layout';
import { HEADER_FOOTER_ENDPOINT } from '../utils/constants/endpoints';
import axios from 'axios';
import { WOOCOMMERCE_COUNTRIES_ENDPOINT } from '../utils/constants/endpoints';
import CheckoutForm from '../components/checkout/checkout-form';

export default function Checkout({ data, countries }) {
    console.log("countries", countries);
	return (
		<Layout data={data || {}}>
			<h1>Checkout</h1>
			<p>you can checkout</p>
			<CheckoutForm countriesData={countries}/>
		</Layout>
	);
}

export async function getStaticProps() {
	
	const { data } = await axios.get( HEADER_FOOTER_ENDPOINT );
	const {data : countries } = await axios.get( WOOCOMMERCE_COUNTRIES_ENDPOINT );
	return {
		props: {
			...data,
            countries: countries || {}
		},
		
		/**
		 * Revalidate means that if a new request comes to server, then every 1 sec it will check
		 * if the data is changed, if it is changed then it will update the
		 * static file inside .next folder with the new data, so that any 'SUBSEQUENT' requests should have updated data.
		 */
		revalidate: 1,
	};
}