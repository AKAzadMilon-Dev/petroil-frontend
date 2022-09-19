import Banner from "./components/banner";
import Blog from "./components/blog";
import Brand from "./components/brand";
import Company from "./components/company";
import Header from "./components/header";
import Maps from "./components/maps";
import Member from "./components/member";
import Navbar from "./components/navbar";
import Service from "./components/service";
import Supplier from "./components/supplier";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Banner/>
      <Supplier/>
      <Service/>
      <Company/>
      <Brand/>
      <Blog/>
      <Maps/>
      <Member/>
    </>
  );
}

export default App;
