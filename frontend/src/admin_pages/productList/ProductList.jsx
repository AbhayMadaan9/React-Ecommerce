import "./productList.css";
import { DataGrid } from '@mui/x-data-grid';
 import { DeleteOutline } from "@mui/icons-material";
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import Topbar from "../../admin_components/topbar/Topbar";
import Sidebar from "../../admin_components/sidebar/Sidebar";



export default function ProductList() {
  const {currentUser} = useSelector(state=>state.user)
  const [data, setData] = useState([]);
  useEffect(() => {
    const products = async()=>{
      const headers = {
        'token':  currentUser
      }
      const dataa = await axios.get('http://localhost:5000/product', {headers})
      setData(dataa.data);
    }
    products()
    
}, [currentUser]);

let ite = 1;
data.forEach(user=>{
  user.id = ite++;
})
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.img} alt="" />
            {params.row.name}
          </div>
        );
      },
    },
    { field: "stock", headerName: "Stock", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "price",
      headerName: "Price",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/products/" + params.row._id}>
              <button className="productListEdit" >Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <>
     <div className="home">
      <div className="left">
        <Sidebar/>
      </div>
      <div className="right">
      <div className="productList">
      <Topbar/>
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
      </div>
    </div>
    </div>
    </>
  );
}
