import Banner from "./components/banner";
import Company from "./components/company";
import Header from "./components/header";
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
    </>
  );
}

export default App;
