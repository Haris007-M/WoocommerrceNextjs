// import { AppProvider } from '../context';
import Header from "../Layout/Header/Header";
import Footer from "../Layout/Footer/Footer";

import { AppProvider } from "../context";

const Layout = ({ children, data }) => {
  const { header, footer } = data || {};
  return (
    <AppProvider>
      <div>
        <Header header={header} />
        <main className="container mx-auto py-4">{children}</main>
        <Footer footer={footer} />
      </div>
    </AppProvider>
  );
};

export default Layout;
