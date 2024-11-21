import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Form({ users, setUsers }) {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const addUser = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") return "";

    //new object with default values
    const newUser = {
      id: users.length + 1,
      userName: inputValue,
      name: "unknown",
      age: NaN,
      location: { country: "none", city: "none" },
    };

    //Update users with spread operator
    setUsers((prevUser) => [...prevUser, newUser]);
    setInputValue("");
    //Comeback to Home.jsx
    navigate(`/profile/${newUser.id}`, { state: newUser });
  };
  return (
    <form
      action=""
      className="flex flex-col items-center my-10 gap-5 border p-5"
    >
      <label htmlFor="">Name</label>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="w-[300px] p-1 rounded-sm border"
        placeholder="Name..."
        type="text"
      />
      <button
        onClick={addUser}
        className="border p-1 w-36 bg-slate-500 text-white rounded-sm shadow-xl btn-hover duration-500"
      >
        Add user
      </button>
    </form>
  );
}
