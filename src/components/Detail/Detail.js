import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { FoodLoad } from "../../App";

const Detail = () => {
  const { foodId } = useParams();

  const foods = useContext(FoodLoad);
  const { breakfasts, lunchs, dinners } = foods;
  const breakFastDetail = breakfasts?.find(
    (breakfast) => breakfast.id === foodId
  );
  const lunchDetail = lunchs?.find((lunch) => lunch.id === foodId);
  const dinnerDetail = dinners?.find((dinner) => dinner.id === foodId);

  return (
    <div
      className="container d-flex justify-content-between "
      style={{ marginTop: "200px" }}
    >
      <div className="w-50 mt-5 text-start">
        <h1>
          {breakFastDetail?.name || lunchDetail?.name || dinnerDetail?.name}
        </h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam,
          expedita. Veniam quibusdam officiis labore aperiam, est, aliquid
          doloremque tenetur architecto beatae at iste nisi repellendus ut in
          sapiente voluptas facilis?
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
          className="px-5 rounded-pill"
          style={{ fontSize: "25px" }}
        >
          Add
        </Button>
      </div>
      <div className="w-50">
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
  );
};

export default Detail;
