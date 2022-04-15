import style from "../App.module.css";
import LogoSection from "../Components/header/logoSection/Logo";
import Navigation from "../Components/header/Navigation/Navigation";
import Products from "../Components/layout/products/Products";
import ProductsHeader from "../Components/productsPage/header/Header";
import ProductList from "../Components/productsPage/productList/ProductList";
import Footer from "../Components/footer/Footer";

const ProductsPage = () => {
  return (
    <>
      <LogoSection />
      <Navigation />
      <main className={style.main}>
        <ProductsHeader />
        <ProductList />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default ProductsPage;
