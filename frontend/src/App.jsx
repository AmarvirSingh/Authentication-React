import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchApi();
  }, [data]);

  const saveData = async () => {
    await axios.post("http://localhost:3200/add", {
      name,
      email,
      age,
    });
  };

  const fetchApi = async () => {
    const response = await axios.get("http://localhost:3200/allusers");
    setData(response.data);
  };

  return (
    <div className="container">
      <div className="form">
        <div className="heading">
          <p>Please Enter Data</p>
        </div>
        <div className="inputFields">
          <input
            placeholder="Enter your Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            placeholder="Enter your Email Address"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="number"
            placeholder="Enter your age "
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <button
          className="btn"
          onClick={() => {
            saveData();
            setAge(0);
            setName("");
            setEmail("");
          }}
        >
          {" "}
          Send Data
        </button>
      </div>
      <div className="Recorded Data">
        <h2>Recorded Users From Database</h2>
        <ul>
          {data.map((d, id) => (
            <>
              <li key={id}>
                {" "}
                {d.name} | {d.email} | {d.age}
              </li>
            </>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
