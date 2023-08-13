import { Link } from "react-router-dom";
import "./product.css";
import Chart from "../../admin_components/chart/Chart"
import {productData} from "../../dummyData"
import Sidebar from "../../admin_components/sidebar/Sidebar";
 import { Publish } from "@mui/icons-material"
import Topbar from "../../admin_components/topbar/Topbar";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";


export default function UpdateProduct() {
    let {_id} = useParams()
    const [data, setData] = useState({});
    useEffect(() => {
      const products = async()=>{
        const dataa = await axios.get(`http://localhost:5000/product/${_id}`)
        setData(dataa.data);
      }
      products()
      
  }, [_id]);
  return (
    <>
    <div className="home">
    <div className="left">
      <Sidebar/>
    </div>
    <div className="right">
    <div className="productList">
    <Topbar/>
    <div className="product">
    <div className="productTitleContainer">
      <h1 className="productTitle">Product</h1>
      <Link to="/newproduct">
        <button className="productAddButton">Create</button>
      </Link>
    </div>
    <div className="productTop">
        <div className="productTopLeft">
            <Chart data={productData} dataKey="Sales" title="Sales Performance"/>
        </div>
        <div className="productTopRight">
            <div className="productInfoTop">
                <img src={data.img} alt="" className="productInfoImg" />
                <span className="productName">{data.title}</span>
            </div>
            <div className="productInfoBottom">
                <div className="productInfoItem">
                    <span className="productInfoKey">id:</span>
                    <span className="productInfoValue">{data._id}</span>
                </div>
                <div className="productInfoItem">
                    <span className="productInfoKey">sales:</span>
                    <span className="productInfoValue">xxx</span>
                </div>
                <div className="productInfoItem">
                    <span className="productInfoKey">active:</span>
                    <span className="productInfoValue">yes</span>
                </div>
                <div className="productInfoItem">
                    <span className="productInfoKey">in stock:</span>
                    <span className="productInfoValue">{data.stock}</span>
                </div>
            </div>
        </div>
    </div>
    <div className="productBottom">
        <form className="productForm">
            <div className="productFormLeft">
                <label>Product Name</label>
                <input type="text" placeholder={data.title} />
                <label>In Stock</label>
                <select name="inStock" id="idStock">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
                <label>Active</label>
                <select name="active" id="active" defaultValue={data.active}>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>
            <div className="productFormRight">
                <div className="productUpload">
                    <img src={data.img} alt="" className="productUploadImg" />
                    <label for="file">
                        <Publish/> 
                    </label>
                    <input type="file" id="file" style={{display:"none"}} />
                </div>
                <button className="productButton">Update</button>
            </div>
        </form>
    </div>
  </div>
    </div>
  </div>
  </div>
  </>
  );
}
