import "./userList.css";
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios'
import { useSelector } from "react-redux";
import Topbar from "../../admin_components/topbar/Topbar";
import Sidebar from "../../admin_components/sidebar/Sidebar";

export default function UserList() {
  const {currentUser} = useSelector(state=>state.user)
  const [data, setData] = useState([]);
  useEffect(() => {
    const users = async()=>{
      const headers = {
        'token':  currentUser
      }
      const dataa = await axios.get('http://localhost:5000/user', {headers})
      setData(dataa.data);
      console.log(dataa.data)
    }
    users()
    
}, [currentUser])
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
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.avatar} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "active",
      headerName: "Active",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "Transaction Volume",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/users/" + params.row._id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
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
