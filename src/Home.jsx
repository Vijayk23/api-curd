import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Home() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    //async approach
    // (async () => {
    //   const API_URl = await fetch("http://localhost:3000/users");

    //   try {
    //     const response = await API_URl.json();
    //     console.log(response);
    //   } catch (err) {
    //     console.log(err);
    //   }
    // })();
    axios
      .get("http://localhost:3000/users")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handeldelete = (id) => {
    const confirm = window.confirm("would you like to delete?");
    if (confirm) {
      axios
        .delete("http://localhost:3000/users/" + id)
        .then((res) => {
          location.reload();
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="d-flex flex-column w-100 vh-100 justify-content-center align-items-center bg-light">
      <h1>List of users</h1>
      <div className="w-75 rounded bg-white border shadow p-4">
        <div className="d-flex justify-content-end">
          <Link to="/create" className="btn btn-success">
            Add +
          </Link>
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <td>ID</td>
              <td>Name</td>
              <td>Email</td>
              <td>Phone</td>
              <td>Actions</td>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>
                  <Link to={`/read/${item.id}`}>
                    <button className="btn btn-sm btn-info me-2">Read</button>
                  </Link>
                  <Link to={`/update/${item.id}`}>
                    <button className="btn btn-sm btn-primary me-2">
                      Edit
                    </button>
                  </Link>

                  <button
                    onClick={() => handeldelete(item.id)}
                    className="btn btn-sm btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
