import { useState } from "react";
import axios from "axios";

function App() {

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    age: "",
    qualification: "",
    shiftType: "",
    mobile1: "",
    assignedLocation: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const saveGuard = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8057/api/security",
        formData
      );

      console.log("Saved:", response.data);
      alert("Guard added successfully!");

    } catch (error) {
      console.log(error.response?.data || error.message);
    }
  };

  return (
    <div>
      <input
        name="name"
        placeholder="Name"
        onChange={handleChange}
      />

      <input
        name="address"
        placeholder="Address"
        onChange={handleChange}
      />

      <input
        name="age"
        placeholder="Age"
        onChange={handleChange}
      />

      <input
        name="qualification"
        placeholder="Qualification"
        onChange={handleChange}
      />

      <input
        name="shiftType"
        placeholder="Shift Type"
        onChange={handleChange}
      />

      <input
        name="mobile1"
        placeholder="Mobile Number"
        onChange={handleChange}
      />

      <input
        name="assignedLocation"
        placeholder="Assigned Location"
        onChange={handleChange}
      />

      <button onClick={saveGuard}>
        Save Guard
      </button>
    </div>
  );
}

export default App;