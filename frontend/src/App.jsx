import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);
  //const [data, setData] = useState(null);

  const fetchApi = async () => {
    const d = await axios.get("/api/something");
    console.log(d);
  };

  useEffect(() => {
    fetchApi();
  }, []);

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
        <button className="btn" onClick={() => dataHandler()}>
          {" "}
          Send Data
        </button>
        <div className="Recorded Data"> </div>
      </div>
    </div>
  );
}

export default App;
