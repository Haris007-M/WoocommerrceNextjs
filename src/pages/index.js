
import axios from "axios";

import Layout from "../components/Layout";
import {
  HEADER_FOOTER_ENDPOINT,
} from "@/utils/constants/endpoints";
import Products from "@/components/products";
import { getProductsData } from "@/utils/products";

export default function Home({ data, productsData }) {
 
  console.log(productsData);
  return (
    <div>
      <Layout data={data || {}}>
        <Products productsData={productsData} />
      </Layout>
      
    </div>
  );
}

export async function getStaticProps() {
  const { data } = await axios.get('https://mydemo.codeytek.com/wp-json/rae/v1/header-footer?header_location_id=hcms-menu-header&footer_location_id=hcms-menu-footer');
  const { data: productsData } = await getProductsData();

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
