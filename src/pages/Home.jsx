import style from "../App.module.css";
import Header from "../Components/header/Header";
import Location from "../Components/layout/location/Location";
import Products from "../Components/layout/products/Products";
import TrustedCompanies from "../Components/layout/trustedCompanies/TrustedCompanies";
import Quality from "../Components/layout/quality/Quality";
import Footer from "../Components/footer/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <main className={style.main}>
        <Location />
        <Products />
        <TrustedCompanies />
        <Quality />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Home;
