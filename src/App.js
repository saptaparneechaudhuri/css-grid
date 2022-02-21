import "./App.scss";
import React from "react";
import Sidebar from "../src/components/sidebar/Sidebar";
import Header from "../src/components/header/Header";
import Realtors from "../src/components/realtors/Realtors";
import Story from "../src/components/story/Story";
import Homes from "../src/components/homes/Homes";
import Gallery from "../src/components/gallery/Gallery";
import Footer from "../src/components/footer/Footer";
import Features from "./components/features/Features";

const App = (props) => {
  return (
    <div className="container">
      <Sidebar />
      <Header />
      <Realtors />
      <Features />
      <Story />
      <Homes />
      <Gallery />
      <Footer />
    </div>
  );
};
export default App;
