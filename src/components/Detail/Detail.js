import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { FoodLoad } from "../../App";
import { TrashIcon } from "@heroicons/react/solid";

const Detail = () => {
  const { foodId } = useParams();

  const foods = useContext(FoodLoad);
  const { breakfasts, lunches, dinners } = foods;
  const breakFastDetail = breakfasts?.find(
    (breakfast) => breakfast._id === foodId
  );
  const lunchDetail = lunches?.find((lunch) => lunch._id === foodId);
  const dinnerDetail = dinners?.find((dinner) => dinner._id === foodId);
  const handleDelete = (id) => {
    console.log(id);
  };
  return (
    <section className="d-flex justify-content-center align-items-center">
      <div
        className="container d-flex justify-content-around flex-lg-row flex-md-row flex-sm-column flex-column  w-75"
        style={{ marginTop: "200px" }}
      >
        {console.log(foodId)}
        <div className="w-100 mt-5 text-start order-1">
          <h1>
            {breakFastDetail?.name || lunchDetail?.name || dinnerDetail?.name}
          </h1>
          <p>
            {breakFastDetail?.detail ||
              lunchDetail?.detail ||
              dinnerDetail?.detail}
          </p>
          <p style={{ fontSize: "35px" }}>
            <b>
              {" "}
              $
              {breakFastDetail?.price ||
                lunchDetail?.price ||
                dinnerDetail?.price}
            </b>
            <input
              type="text"
              name=""
              id=""
              className="mx-3 rounded-pill p-2 w-25"
            />
          </p>
          <Button
            variant="danger"
            className="px-5 rounded-pill  mt-3 me-3"
            style={{ fontSize: "20px" }}
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
