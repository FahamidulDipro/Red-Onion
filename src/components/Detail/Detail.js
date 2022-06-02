import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { FoodLoad } from "../../App";
import { TrashIcon, PlusSmIcon, MinusSmIcon } from "@heroicons/react/solid";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Detail = () => {
  const { foodId } = useParams();
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const foods = useContext(FoodLoad);
  const { breakfasts, lunches, dinners } = foods;

  const breakFastDetail = breakfasts?.find(
    (breakfast) => breakfast._id === foodId
  );
  const lunchDetail = lunches?.find((lunch) => lunch._id === foodId);
  const dinnerDetail = dinners?.find((dinner) => dinner._id === foodId);
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure you want to delete?");
    if (proceed) {
      fetch(`http://localhost:5000 /delete/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          navigate("/", {
            state: {
              id: foodId,
            },
          });
          console.log("Deleted Item", data);

          window.location.reload();
        });
    }
  };
  const [count, setCount] = useState(1);
  const addCount = () => {
    setCount(count + 1);
  };
  const removeCount = () => {
    if (count > 0) setCount(count - 1);
  };
  const addToCartHandler = () => {
    const cartInfo = {
      foodName:
        breakFastDetail?.name || lunchDetail?.name || dinnerDetail?.name,
      price:
        breakFastDetail?.price || lunchDetail?.price || dinnerDetail?.price,
      quantity: count,
    };
    fetch(`http://localhost:5000/cart/${user?.email}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(cartInfo),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <section className="d-flex justify-content-center align-items-center">
      <div
        className="container d-flex justify-content-around flex-lg-row flex-md-row flex-sm-column flex-column  w-75"
        style={{ marginTop: "200px" }}
      >
        <div className="w-100 mt-5 text-start order-1">
          <h1>
            {breakFastDetail?.name || lunchDetail?.name || dinnerDetail?.name}
          </h1>
          <p>
            {breakFastDetail?.detail ||
              lunchDetail?.detail ||
              dinnerDetail?.detail}
          </p>
          <p style={{ fontSize: "30px" }} className="d-flex ">
            <b>
              {" "}
              $
              {breakFastDetail?.price ||
                lunchDetail?.price ||
                dinnerDetail?.price}
            </b>
            <span
              className="d-flex justify-content-around border rounded-pill border-dark ms-3"
              style={{ width: "150px" }}
            >
              <MinusSmIcon
                style={{
                  width: "40px",
                  color: "grey",
                  marginTop: "10px",
                  cursor: "pointer",
                }}
                onClick={removeCount}
              ></MinusSmIcon>
              {count}
              <PlusSmIcon
                style={{
                  width: "40px",
                  marginTop: "10px",
                  cursor: "pointer",
                }}
                className="text-danger"
                onClick={addCount}
              ></PlusSmIcon>
            </span>
          </p>
          <Button
            variant="danger"
            className="px-5 rounded-pill  mt-3 me-3"
            style={{ fontSize: "20px" }}
            onClick={addToCartHandler}
          >
            Add
          </Button>

          <TrashIcon
            style={{
              width: "40px",
              color: "red",
              marginTop: "10px",
              cursor: "pointer",
            }}
            onClick={() => handleDelete(foodId)}
          />
        </div>
        <div className="w-50 order-sm-0 order-0 order-lg-3 order-md-3">
          <img
            src={
              breakFastDetail?.picture ||
              lunchDetail?.picture ||
              dinnerDetail?.picture
            }
            alt="foodPic"
            className="img-fluid"
          />
        </div>
      </div>
    </section>
  );
};

export default Detail;
