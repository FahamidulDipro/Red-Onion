import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const AddItems = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    fetch("https://boiling-tor-09845.herokuapp.com/additems", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        navigate("/");
        window.location.reload();
      });
  };
  return (
    <div style={{ marginTop: "100px" }}>
      <h1>Add Food Item</h1>
      <section className="d-flex justify-content-center container">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-5 shadow-lg w-50 p-3"
        >
          <input
            {...register("name", { required: true, maxLength: 20 })}
            className="form-control p-3 text-secondary"
            style={{ background: "lightGrey" }}
            placeholder="Title"
          />
          <br />
          <input
            type="text"
            {...register("picture")}
            className="form-control p-3 text-secondary"
            style={{ background: "lightGrey" }}
            placeholder="Image"
          />
          <br />
          <input
            type="number"
            {...register("price")}
            className="form-control p-3 text-secondary"
            style={{ background: "lightGrey" }}
            placeholder="Price"
          />
          <br />
          <textarea
            type="text"
            {...register("detail")}
            className="form-control p-3 text-secondary"
            style={{ background: "lightGrey" }}
            placeholder="Description"
          />
          <br />
          <input
            type="submit"
            className="w-100 bg-danger text-light fw-bold border-0 p-3 rounded"
            value="Add Item"
          />
        </form>
      </section>
    </div>
  );
};

export default AddItems;
