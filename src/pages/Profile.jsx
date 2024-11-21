import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
export default function Profile() {
  const { id } = useParams();
  console.log(id);

  const location = useLocation();
  console.log("Location state:", location.state);

  const user = location.state;

  console.log("User data from location.state:", user);
  return (
    <div className="flex flex-col gap-10 border border-black p-10 rounded-xl shadow-lg shadow-gray-400">
      {user ? (
        <>
          <h1 className="text-4xl">Profile details:</h1>
          <h3 className="text-xl">
            UserName: <strong>{user.userName}</strong>
          </h3>
          <h3 className="text-xl">
            Age:
            <strong> {user.age}</strong>
          </h3>
          <h3 className="text-xl">City: {user.location.city}</h3>
          <h3 className="text-xl">Country: {user.location.country}</h3>
        </>
      ) : (
        <p>No user data found</p>
      )}
    </div>
  );
}
