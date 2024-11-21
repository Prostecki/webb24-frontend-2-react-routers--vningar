import Form from "../components/Form";
export default function NewUser({ users, setUsers }) {
  return (
    <div>
      <h1 className="text-5xl">Please add a new user here..</h1>
      <Form users={users} setUsers={setUsers} />
    </div>
  );
}
