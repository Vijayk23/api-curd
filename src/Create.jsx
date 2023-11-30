import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Create() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const navigate = useNavigate();
  const handelsubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/users", values)

      .then((res) => {
        console.log(res);
        navigate("/");
      })

      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
      <div className="w-500 boder bg-white shadow px-5 pt-3 pb-5 rounded">
        <h1>Add a User</h1>
        <form onSubmit={handelsubmit}>
          <div className="md-2">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter Name"
              onChange={(e) => setValues({ ...values, name: e.target.value })}
              required
            />
          </div>
          <div className="md-2">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter Email"
              onChange={(e) => setValues({ ...values, email: e.target.value })}
              required
            />
          </div>
          <div className="md-2">
            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              name="phone"
              className="form-control"
              placeholder="Enter Phone Number"
              onChange={(e) => setValues({ ...values, phone: e.target.value })}
              required
            />
          </div>
          <button className="btn btn-success">Submit</button>
          <Link to="/">
            <button className="btn btn-primary ms-3">Back</button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Create;
