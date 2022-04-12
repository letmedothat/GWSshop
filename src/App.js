import style from "./App.module.css";
import Header from "./Components/header/Header";
import Info from "./Components/layout/info/Info";
import Location from "./Components/layout/location/Location";
import Products from "./Components/layout/products/Products";
import TrustedCompanies from "./Components/layout/trustedCompanies/TrustedCompanies";
import Quality from "./Components/layout/quality/Quality";
import Footer from "./Components/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <main className={style.main}>
        <Info />
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
}

export default App;
