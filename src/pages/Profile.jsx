import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
export default function Profile() {
  const location = useLocation();
  console.log(location);
  return (
    <div className="flex flex-col gap-10">
      {location.state ? (
        <>
          <h1 className="text-4xl">Profile details:</h1>
          <h3 className="text-xl">
            UserName: <strong>{location.state.userName}</strong>
          </h3>
          <h3 className="text-xl">
            Age:
            <strong> {location.state.age}</strong>
          </h3>
          <h3 className="text-xl">City: {location.state.location.city}</h3>
          <h3 className="text-xl">
            Country: {location.state.location.country}
          </h3>
        </>
      ) : (
        ""
      )}
    </div>
  );
}
