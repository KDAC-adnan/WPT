import { Route, Link, Routes } from "react-router-dom";
import ProductList from "./productList";
import Entry from "./Enrty";
import NotFound from "./NotFound";
import Edit from "./Edit";

function Launcher() {
  return (
    <div className="container jumbotron">
      <h1>Welcome</h1>
      <hr></hr>
      <Link to="/">Product List</Link> {" | "}
      <Link to="/entry">Add Product</Link> {" | "}
      <hr></hr>
      <Routes>
        <Route exact path="/entry" element={<Entry/>} />
        <Route exact path="/edit" element={<Edit/>} /> {/* Specific route */}
        <Route exact path="/" element={<ProductList/>}></Route>
        <Route exact path="*/*" element={<NotFound/>} /> {/* Catch-all route */}
      </Routes>
    </div>
  );
}

export default Launcher;
