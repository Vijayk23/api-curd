import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function Update() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/users/" + id)
      .then((res) => setValues(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handelupdate = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:3000/users/" + id, values)

      .then((res) => {
        console.log(res.data);
        navigate("/");
      })

      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
      <div className="w-500 boder bg-white shadow px-5 pt-3 pb-5 rounded">
        <h1>Update User</h1>
        <form onSubmit={handelupdate}>
          <div className="md-2">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter Name"
              onChange={(e) => setValues({ ...values, name: e.target.value })}
              required
              value={values.name}
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
              value={values.email}
              required
            />
          </div>
          <div className="md-2">
            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              name="phone"
              onChange={(e) => setValues({ ...values, phone: e.target.value })}
              className="form-control"
              placeholder="Enter Phone Number"
              value={values.phone}
              required
            />
          </div>
          <button className="btn btn-success">Update</button>
          <Link to="/">
            <button className="btn btn-primary ms-3">Back</button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Update;
