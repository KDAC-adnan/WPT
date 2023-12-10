import { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./common.css";
import axios from "axios";


function Entry() {
    const URL = `http://127.0.0.1:5000/product`;
    const [titleErr,setTtitlError]=useState("");
    const [priceErr,setPriceError]=useState("");
    const [stockErr,setStockError]=useState("");
    const [message,setMessage]=useState("");

    const [product, setProduct] = useState({
        productid: "",
        producttitle: "",
        stock: "",
        price: "",
      });

    const OnTextChange=(args)=>{
        var copyOfProduct={...product};
        copyOfProduct[args.target.name]=args.target.value;
        setProduct(copyOfProduct);
        setTtitlError("");
        setPriceError("");
        setStockError("");
    }

    const checkData=()=>{
        if(product.producttitle=="")
        {
            setTtitlError("Product title is empty")
        }
        if(product.stock=="")
        {
            setPriceError("Stcok is empty");
        }
        if(product.price=="")
        {
            setStockError("Price is empty");
        }

        if(titleErr.length===0 && priceErr.length===0 && stockErr.length===0)
        {
            axios.post(URL,product).then((result)=>{
                if(result.data.affectedRows>0 && result.data.affectedRows!==undefined)
                {
                    setMessage("Data added Successfully");
                    window.setTimeout(()=>{
                        setMessage("")
                    },2000);
                    Reset();
                }
                else
                {
                    setMessage("Ops! Something went wrong");
                    window.setTimeout(()=>{
                        setMessage("")
                    },2000);
                }
            }).catch();    
        }
    }

    const Reset=()=>{
        setProduct({productid:"",producttitle:"",stock:"",price:""});
    }



    return (
        <div className="container">
            <div className="table-responsive">
        <table className="table">
          <tbody>
            <tr>
              <td>Product title</td>
              <td>
                <input
                  id="ptitle"
                  value={product.producttitle}
                  name="producttitle"
                  onChange={OnTextChange}
                ></input>
              </td>
              <td>{titleErr}</td>
            </tr>
            <tr>
              <td>Price</td>
              <td>
                <input
                  id="pPrice"
                  value={product.price}
                  name="price"
                  onChange={OnTextChange}
                ></input>
              </td>
              <td>{priceErr}</td>
            </tr>
            <tr>
              <td>Stock</td>
              <td>
                <input
                  id="pStock"
                  value={product.stock}
                  name="stock"
                  onChange={OnTextChange}
                ></input>
              </td>
              <td>{stockErr}</td>
            </tr>
            <tr>
              <td colSpan={3}>
                <button onClick={checkData} className="btn btn-success">
                  Add Product
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        <hr></hr>
        <div className="alert alert-primary">
          <h3>{message}</h3>
        </div>
        <hr></hr>
      </div>
      
        </div>
    );
}

export default Entry;