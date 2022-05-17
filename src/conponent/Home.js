import React from "react";
import About from "./About";
import Content from "./Content";
import Header from "./Header";

function Home() {
  return (
    <>
      <Header />
      <Content title='Recent Book' />
      <About />
    </>
  );
}

export default Home;
