import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import NewUser from "./pages/NewUser";
import Profile from "./pages/Profile";
import Footer from "./components/Footer";

function App() {
  const users = [
    {
      userName: "CaptainFrisk",
      name: "Test Testsson",
      age: 99,
      location: {
        country: "Sweden",
        city: "Stockholm",
      },
    },
    {
      userName: "SpaceAce",
      name: "Anna Andersson",
      age: 25,
      location: {
        country: "Norway",
        city: "Oslo",
      },
    },
    {
      userName: "PixelWizard",
      name: "Karl Karlsson",
      age: 42,
      location: {
        country: "Denmark",
        city: "Copenhagen",
      },
    },
    {
      userName: "CodeNinja",
      name: "Maria Pettersson",
      age: 33,
      location: {
        country: "Finland",
        city: "Helsinki",
      },
    },
    {
      userName: "ByteBuster",
      name: "Olof Olsson",
      age: 28,
      location: {
        country: "Iceland",
        city: "Reykjavik",
      },
    },
  ];
  return (
    <div className="flex flex-col justify-between items-center h-screen m-0">
      <Header />
      <h1 className="text-3xl font-extrabold text-center my-10">
        React-Routers: User List App
      </h1>
      <Routes>
        <Route path="/" element={<Home users={users} />} />
        <Route path="/newuser" element={<NewUser />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
