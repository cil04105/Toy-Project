/* eslint-disable */

import Banner from "./components/Banner";
import Card from "./components/Card";
import NavBar from "./components/NavBar";

import { useState } from "react";
import Data from "./data";

import { Link, Route, Switch } from "react-router-dom";
function App() {
  let [products, setProducts] = useState(Data);
  return (
    <>
      <div className="App">
        <NavBar />

        <Route exact path="/">
          <Banner />
          <div className="container">
            <div className="row">
              {products.map((product, i) => {
                return <Card products={product} key={product.id} i={i} />;
              })}
            </div>
          </div>
        </Route>
        <Route path="/detail">
          <div>상세페이지</div>
        </Route>

        {/* <Route path="/" component={Modal}></Route> */}
      </div>
    </>
  );
}

export default App;
