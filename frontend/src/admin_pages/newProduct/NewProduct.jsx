import axios from "axios";
import Topbar from "../../admin_components/topbar/Topbar";
import "./newProduct.css";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Sidebar from "../../admin_components/sidebar/Sidebar";
export default function NewProduct() {
  const [data, setdata] = useState({
    title: "",
    desc: "",
    img: "",
    categories: [],
    size: [],
    color: [],
    price: 0,
    stock: 0
  })
  const { currentUser } = useSelector(state => state.user)
  const handle_create = async () => {
    try {
      const headers = {
        'token': currentUser
      }
      const res = await axios.post("http://localhost:5000/product", { headers, data })
      console.log(res.data)
      alert(res.data)
    } catch (error) {
      alert("ERROR." + error.message)
    }
  }

  return (
    <>
      <div className="home">
        <div className="left">
          <Sidebar />
        </div>
        <div className="right">
            <Topbar />
            <div className="newProduct">
              <form className="addProductForm" onSubmit={handle_create}>
                <h1 className="addProductTitle">New Product</h1>
                <div className="addProductItem">
                  <h4>Image</h4>
                  <input type="file" id="file" />
                </div>
                <div className="addProductItem">
                  <h4>Name</h4>
                  <input type="text" placeholder="Apple Airpods" name="title" value={data.title} onChange={(e) => setdata({ ...data, title: e.target.value })} />
                </div>
                <div className="addProductItem">
                  <h4>Description</h4>
                  <input type="text" placeholder="Description" onChange={(e) => setdata({ ...data, desc: e.target.value })} />
                </div>
                <div className="addProductItem">
                  <h4>Category</h4>
                  <div className="label">
                    <input type="checkbox" name="categories" value="loungwear" onChange={(e) => setdata({
                      ...data,
                      categories: e.target.checked
                        ? [...data.categories, e.target.value]
                        : data.categories.filter((category) => category !== e.target.value),
                    })} />
                    <label>Loungwear</label>
                  </div>
                  <div className="label">
                    <input type="checkbox" name="categories" value="shirts" onChange={(e) => setdata({
                      ...data,
                      categories: e.target.checked
                        ? [...data.categories, e.target.value]
                        : data.categories.filter((category) => category !== e.target.value),
                    })} />
                    <label>Shirts</label>
                  </div>
                  <div className="label">
                    <input type="checkbox" name="categories" value="jackets" onChange={(e) => setdata({
                      ...data,
                      categories: e.target.checked
                        ? [...data.categories, e.target.value]
                        : data.categories.filter((category) => category !== e.target.value),
                    })} />
                    <label>Jackets</label>
                  </div>
                </div>
                <div className="addProductItem">
                  <h4>Size</h4>
                  <div className="label">
                    <input type="checkbox" name="size" value="S" onChange={(e) => setdata({
                      ...data,
                      size: e.target.checked
                        ? [...data.size, e.target.value]
                        : data.size.filter((category) => category !== e.target.value),
                    })} />
                    <label>S</label>
                  </div>
                  <div className="label">
                    <input type="checkbox" name="size" value="M" onChange={(e) => setdata({
                      ...data,
                      size: e.target.checked
                        ? [...data.size, e.target.value]
                        : data.size.filter((category) => category !== e.target.value),
                    })} />
                    <label>M</label>
                  </div>
                  <div className="label">
                    <input type="checkbox" name="size" value="L" onChange={(e) => setdata({
                      ...data,
                      size: e.target.checked
                        ? [...data.size, e.target.value]
                        : data.size.filter((category) => category !== e.target.value),
                    })} />
                    <label>L</label>
                  </div>
                  <div className="label">
                    <input type="checkbox" name="size" value="XL" onChange={(e) => setdata({
                      ...data,
                      size: e.target.checked
                        ? [...data.size, e.target.value]
                        : data.size.filter((category) => category !== e.target.value),
                    })} />
                    <label>XL</label>
                  </div>
                </div>
                <div className="addProductItem">
                  <h4>Color</h4>
                  <div className="label">
                    <input type="checkbox" name="color" value="black" onChange={(e) => setdata({
                      ...data,
                      color: e.target.checked
                        ? [...data.color, e.target.value]
                        : data.color.filter((category) => category !== e.target.value),
                    })} />
                    <label>black</label>
                  </div>
                  <div className="label">
                    <input type="checkbox" name="color" value="white" onChange={(e) => setdata({
                      ...data,
                      color: e.target.checked
                        ? [...data.color, e.target.value]
                        : data.color.filter((category) => category !== e.target.value),
                    })} />
                    <label>white</label>
                  </div>
                  <div className="label">
                    <input type="checkbox" name="color" value="red" onChange={(e) => setdata({
                      ...data,
                      color: e.target.checked
                        ? [...data.color, e.target.value]
                        : data.color.filter((category) => category !== e.target.value),
                    })} />
                    <label>red</label>
                  </div>
                  <div className="label">
                    <input type="checkbox" name="color" value="blue" onChange={(e) => setdata({
                      ...data,
                      color: e.target.checked
                        ? [...data.color, e.target.value]
                        : data.color.filter((category) => category !== e.target.value),
                    })} />
                    <label>blue</label>
                  </div>
                  <div className="label">
                    <input type="checkbox" name="color" value="yellow" onChange={(e) => setdata({
                      ...data,
                      color: e.target.checked
                        ? [...data.color, e.target.value]
                        : data.color.filter((category) => category !== e.target.value),
                    })} />
                    <label>yellow</label>
                  </div>
                  <div className="label">
                    <input type="checkbox" name="color" value="green" onChange={(e) => setdata({
                      ...data,
                      color: e.target.checked
                        ? [...data.color, e.target.value]
                        : data.color.filter((category) => category !== e.target.value),
                    })} />
                    <label>green</label>
                  </div>
                  <div className="label">
                    <input type="checkbox" name="color" value="Rainbow" onChange={(e) => setdata({
                      ...data,
                      color: e.target.checked
                        ? [...data.color, e.target.value]
                        : data.color.filter((category) => category !== e.target.value),
                    })} />
                    <label>rainbow</label>
                  </div>
                </div>
                <div className="addProductItem">
                  <h4>Stock</h4>
                  <input type="number" placeholder="123" onChange={(e) => setdata({ ...data, stock: e.target.value })} />
                </div>
                <div className="addProductItem">
                  <h4>Price</h4>
                  <input type="number" placeholder="per product" name="price" value={data.price} onChange={(e) => setdata({ ...data, price: e.target.value })} />
                </div>

                <button className="addProductButton" type="submit">Create</button>
              </form>
            </div>
        </div>
      </div >
    </>
  );
}
