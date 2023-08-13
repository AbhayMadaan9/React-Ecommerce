import "./newUser.css";
import Sidebar from "../../admin_components/sidebar/Sidebar";
import Topbar from "../../admin_components/topbar/Topbar";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

export default function NewUser() {
  const { currentUser } = useSelector(state => state.user);
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    gender: "male",
    active: "yes"
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      username: userData.username,
      fullName: userData.fullName,
      email: userData.email,
      password: userData.password,
      phone: userData.phone,
      address: userData.address,
      gender: userData.gender,
      active: userData.active === "yes"
    };

    try {
      const headers = {
        'token': currentUser
      }
      const response = await axios.post('http://localhost:5000/user', {data, headers});
      alert(response.data);
      setUserData({
        username: "",
        fullName: "",
        email: "",
        password: "",
        phone: "",
        address: "",
        gender: "male",
        active: "yes"
      });
    } catch (error) {
      alert("Error creating user:", error.message);
    }
  };

  return (
    <>
      <div className="home">
        <div className="left">
          <Sidebar />
        </div>
        <div className="right">
          <Topbar />
          <div className="newUser">
            <h1 className="newUserTitle">New User</h1>
            <form className="newUserForm" onSubmit={handleSubmit}>
              <div className="newUserItem">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="john"
                  name="username"
                  value={userData.username}
                  onChange={handleInputChange}
                />
              </div>
              <div className="newUserItem">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="John Smith"
                  name="fullName"
                  value={userData.fullName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="newUserItem">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="john@gmail.com"
                  name="email"
                  value={userData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="newUserItem">
                <label>Password</label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  value={userData.password}
                  onChange={handleInputChange}
                />
              </div>
              <div className="newUserItem">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="+1 123 456 78"
                  name="phone"
                  value={userData.phone}
                  onChange={handleInputChange}
                />
              </div>
              <div className="newUserItem">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="New York | USA"
                  name="address"
                  value={userData.address}
                  onChange={handleInputChange}
                />
              </div>
              <div className="newUserItem">
                <label>Gender</label>
                <div className="newUserGender">
                  <input
                    type="radio"
                    name="gender"
                    id="male"
                    value="male"
                    checked={userData.gender === "male"}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="male">Male</label>
                  <input
                    type="radio"
                    name="gender"
                    id="female"
                    value="female"
                    checked={userData.gender === "female"}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="female">Female</label>
                  <input
                    type="radio"
                    name="gender"
                    id="other"
                    value="other"
                    checked={userData.gender === "other"}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="other">Other</label>
                </div>
              </div>
              <div className="newUserItem">
                <label>Active</label>
                <select
                  className="newUserSelect"
                  name="active"
                  id="active"
                  value={userData.active}
                  onChange={handleInputChange}
                >
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
                <button className="newUserButton" type="submit">
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
