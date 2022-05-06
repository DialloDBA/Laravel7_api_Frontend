import React from "react";
import { BrowserRouter, Route,Switch } from 'react-router-dom';
import ShowProducts from "./components/ShowProducts";
import EditProduct from "./components/EditProduct";
import CreateProducts from "./components/CreateProducts";
import Navbar from "./components/Navbar";


class App extends React.Component{
  render(){
    return (
        <div className="">
        <BrowserRouter>
            <Navbar />
            <div className="container">
            <Switch>
                <Route exact path="/" component={ShowProducts}/>
                <Route path="/create" component={CreateProducts}/>
                <Route path="/edit/:id" component={EditProduct}/>
            </Switch>
            </div>
        </BrowserRouter>
        </div>
    )
}
}

export default App;
