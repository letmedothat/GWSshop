import style from "../App.module.css";
import Header from "../Components/header/Header";
import Products from "../Components/layout/products/Products";
import Footer from "../Components/footer/Footer";

const Contact = () => {
  return (
    <>
      <Header />
      <main className={style.main}>
        <Products />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Contact;
