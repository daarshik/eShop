import "./App.css";
import Home from "./Home";
import Header from "./Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
// <Router>
//         <Routes>
//           <Route path="/login" element={<Login />} />
//         </Routes>
//         <Routes>
//           <Route path="/checkout" element={<Header />} />
//         </Routes>
//         <Routes>
//           <Route path="/checkout" element={<Checkout />} />
//         </Routes>
//         <Routes>
//           <Route path="/" element={<Header />} />
//         </Routes>
//         <Routes>
//           <Route path="/" element={<Home />} />
//         </Routes>
//       </Router>
