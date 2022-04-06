/* eslint-disable */

import Banner from "./components/Banner";
import Card from "./components/Card";
import NavBar from "./components/NavBar";
import Detail from "./components/Detail";
import Data from "./data";

import { useState } from "react";

import { Link, Route, Switch } from "react-router-dom";
import data from "./data";
function App() {
  let [shoes, setShoes] = useState(Data);

  return (
    <>
      <div className="App">
        <NavBar />
        {/* Switch : 중복 출현 방지 */}
        <Switch>
          <Route exact path="/">
            <Banner />
            <div className="container">
              <div className="row">
                {shoes.map((item, i) => {
                  return <Card shoes={item} key={item.id} i={i} />;
                })}
              </div>
            </div>
          </Route>
          <Route path="/detail/:id">
            <Detail shoes={shoes} />
          </Route>
          <Route path="/:id">
            <div>/뒤에 아무거나 적었을때 보이기</div>
          </Route>
        </Switch>

        {/* <Route path="/" component={Modal}></Route> */}
      </div>
    </>
  );
}

export default App;
