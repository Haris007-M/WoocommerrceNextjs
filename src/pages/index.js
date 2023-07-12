import Header from "@/components/Layout/Header/Header";
import axios from "axios";
import Footer from "@/components/Layout/Footer/Footer";
import Layout from "../components/Layout";
import {
  GET_PRODUCTS_ENDPOINT,
  HEADER_FOOTER_ENDPOINT,
} from "@/utils/constants/endpoints";
import Products from "@/components/products";

export default function Home({ data, productsData }) {
  //   const { header, footer } = data || {};
  console.log(productsData);
  return (
    <div>
      <Layout data={data || {}}>
        <Products productsData={productsData} />
      </Layout>
      {/* <Header header={header} />
      <main className="container mx-auto p-4">
	  <Products productsData={productsData}/>
      </main>

      <Footer footer={footer} /> */}
    </div>
  );
}

export async function getStaticProps() {
  const { data } = await axios.get(HEADER_FOOTER_ENDPOINT);
  const { data: productsData } = await axios.get(GET_PRODUCTS_ENDPOINT);

  return {
    props: {
      ...data,
      productsData: productsData || null,
    },
    // props: productsData || {},

    /**
     * Revalidate means that if a new request comes to server, then every 1 sec it will check
     * if the data is changed, if it is changed then it will update the
     * static file inside .next folder with the new data, so that any 'SUBSEQUENT' requests should have updated data.
     */
    revalidate: 1,
  };
}
