import { useState } from "react";
import Form from "../components/Form";
export default function NewUser() {
  const [user, setUser] = useState([]);
  return (
    <div>
      <h1 className="text-5xl">Please add a new user here..</h1>
      <Form />
    </div>
  );
}
