import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import Api from "../utils/api_config";
function PlaceOrder(props) {
  const history = useHistory();
  const [user, setUser] = useState({
    address: "",
    email: "",
    fullName: "",
    phoneNumber: 0,
  });

  // useEffect(() => {
  //   async function getUserData() {
  //     try {
  //       const refreshToken = localStorage.getItem("refreshToken");
  //       const response = await Api.get("/auth/userData/" + refreshToken);
  //       console.log(response.data.user);
  //       setUser(response.data.user);
  //     } catch (error) {
  //       alert("Pleaes login first");
  //       // history.push("/login");
  //     }
  //   }
  //   getUserData();
  // }, []);

  async function getUserData() {
    try {
      const refreshToken = localStorage.getItem("refreshToken");
      const response = await Api.post("/auth/userData", {
        refreshToken: refreshToken,
        bookId: props.bookid,
        quantity: props.quantity,
      });
      const userData = response.data.user;
      document.getElementById("userData").innerHTML = `

      Please contact user with these details <br><br>
      Name = ${userData.fullName} <br>
      Phone Number = ${userData.phoneNumber}  <br>
      Email = ${userData.email} <br> 
      Address = ${userData.address} <br>
      `;
      setUser(userData);
    } catch (error) {
      alert("Pleaes login first");
      // history.push("/login");
    }
  }

  function goToHomePage() {
    document
      .getElementById("closeModal")
      .addEventListener("click", function () {
        history.push("/");
      });
  }
  goToHomePage();
  return (
    <div className='placeOrder'>
      <a
        href='/'
        className='cart-btn dark-blue-75-2 ms-auto fw-semiBold font-21'
        data-bs-toggle='modal'
        data-bs-target='#exampleModal'
        onClick={async () => {
          await getUserData();
        }}
      >
        Place Order
      </a>
    </div>
  );
}

export default PlaceOrder;
