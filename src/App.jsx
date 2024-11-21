import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import NewUser from "./pages/NewUser";
import Profile from "./pages/Profile";
import Footer from "./components/Footer";

function App() {
  const [users, setUsers] = useState([
    {
      id: 1,
      userName: "CaptainFrisk",
      name: "Test Testsson",
      age: 99,
      location: {
        country: "Sweden",
        city: "Stockholm",
      },
    },
    {
      id: 2,
      userName: "SpaceAce",
      name: "Anna Andersson",
      age: 25,
      location: {
        country: "Norway",
        city: "Oslo",
      },
    },
    {
      id: 3,
      userName: "PixelWizard",
      name: "Karl Karlsson",
      age: 42,
      location: {
        country: "Denmark",
        city: "Copenhagen",
      },
    },
    {
      id: 4,
      userName: "CodeNinja",
      name: "Maria Pettersson",
      age: 33,
      location: {
        country: "Finland",
        city: "Helsinki",
      },
    },
    {
      id: 5,
      userName: "ByteBuster",
      name: "Olof Olsson",
      age: 28,
      location: {
        country: "Iceland",
        city: "Reykjavik",
      },
    },
  ]);
  return (
    <div className="flex flex-col justify-between items-center h-screen m-0">
      <Header />
      <h1 className="text-3xl font-extrabold text-center my-10">
        React-Routers: User List App
      </h1>

      <Routes>
        <Route path="/" element={<Home users={users} />} />
        <Route
          path="/newuser"
          element={<NewUser users={users} setUsers={setUsers} />}
        />
        <Route path="/profile/:id" element={<Profile />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
