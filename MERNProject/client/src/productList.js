import { useEffect, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./common.css";
import axios from "axios";
import { Link} from "react-router-dom";

function ProductList() {
  const URL = `http://127.0.0.1:5000/product`;
  const [products, setProducts] = useState([]);

  const getProductList = () => {
    axios
      .get(URL)
      .then((result) => {
        setProducts(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };


  const handleDeleteConfirmation=(id)=>
  {
    if(window.confirm("Are you sure you want to delete?"))
    {
      RemoveRecodrd(id);
    }
  }
  const RemoveRecodrd=(id)=>{
      const deleteUrl=URL+"/"+id;
      axios.delete(deleteUrl).then((result)=>{
        if(result.data.affectedRows>0 && result.data.affectedRows!==undefined)
            {
                getProductList();
            }
      }).catch();
  }

  useEffect(() => {
    getProductList();
  }, []);
  return (
    <div className="container con">
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>No</th>
              <th>Product Title</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => {
              return (
                <tr key={product.productid}>
                  <td>{product.productid}</td>
                  <td>{product.producttitle}</td>
                  <td>{product.price}</td>
                  <td>{product.stock}</td>
                  <td>
                    <button className="btn btn-primary">
                      {/* <Link
                        className="link"
                        to={{
                          pathname: `/edit/${product.productid}`,
                          state: { product },
                        }}
                      >
                        Edit
                      </Link> */}
                      <Link
                      className="link"
                      to={`/edit`}
                      state={{product}}
                      >Edit</Link>
                    </button>
                    {"  "}
                    <button className="btn btn-danger"
                    onClick={()=>{
                     handleDeleteConfirmation(product.productid)
                    }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductList;
