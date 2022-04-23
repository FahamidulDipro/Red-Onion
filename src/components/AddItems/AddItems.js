import React from "react";
import { useForm } from "react-hook-form";

const AddItems = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div style={{ marginTop: "100px" }}>
      <h1>Add Food Item</h1>
      <section className="d-flex justify-content-center container">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-5 shadow-lg w-50 p-3"
        >
          {/* register your input into the hook by invoking the "register" function */}
          <input
            defaultValue="test"
            {...register("example")}
            className="form-control p-3 text-secondary"
            style={{ background: "lightGrey" }}
            placeholder="Name"
          />
          <br />
          {/* include validation with required or other standard HTML validation rules */}
          <input
            {...register("exampleRequired", { required: true })}
            className="form-control p-3 text-secondary"
            style={{ background: "lightGrey" }}
            placeholder="Image"
          />
          <br />
          <input
            {...register("exampleRequired", { required: true })}
            className="form-control p-3 text-secondary"
            style={{ background: "lightGrey" }}
            placeholder="Price"
          />
          <br />
          <textarea
            {...register("exampleRequired", { required: true })}
            className="form-control p-3 text-secondary"
            style={{ background: "lightGrey" }}
            placeholder="Description"
          />
          <br />
          {/* errors will return when field validation fails  */}
          {errors.exampleRequired && <span>This field is required</span>}
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
