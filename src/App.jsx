import "./styles/index.css";
import "./styles/features.css";
import { NavBar } from "./components/navigation/NavBar";
import { CustomBanner } from "./components/banners/CustomBanner";
import { CustomSection } from "./components/sections/CustomSection";
import { Footer } from "./components/navigation/Footer";
import { useState } from "react";

const App = () => {
  const [IsLogged, setIsLogged] = useState(false);

  const onClickLogin = () => {
    setIsLogged(!IsLogged);
    console.log("Hiciste click");
  };

  return (
    <>
      <NavBar onClickLogin={onClickLogin} />
      <CustomBanner />
      <CustomSection IsLogged={IsLogged} />
      <Footer />
    </>
  );
};

export default App;
