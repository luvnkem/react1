
import './App.css';
import React from "react";

import Cart from './components/Cart';


function App(){
    return (
            <div className="App">
            <nav>
              {/* <a href="/Product">Product</a>
              <a href="/Shop">Shop</a>
              <a href="/Contactpage">Contactpage</a> */}


              {/* <Link to="/About">About</Link>
              <Link to="/Contact">Contact</Link>
              <Link to="/">Home</Link> */}
             </nav>
             {/* <h1>Hello World</h1>  */}

              {/* <Switch>
             <Route path="/product">
               <Product/>
             </Route>

             <Route path="/Shop">
               <Shop/>
             </Route>

             <Route path="/Contactpage">
               <Contactpage/>
             </Route>
             </Switch> */}

             
             <Cart/>
            </div>
          );
}


export default App;
