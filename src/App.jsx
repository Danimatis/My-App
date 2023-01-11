import "./App.css";
import NavBar from "./components/navBar";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap-icons/font/bootstrap-icons.css";
import Home from "./components/home";
import { Routes, Route } from "react-router-dom";
import About from "./components/about";
import Footer from "./components/footer";
import MyCards from "./components/myCards";
import SignIn from "./components/signIn";
import SignUp from "./components/signUp";
import SignOut from "./components/signOut";
import ProtectedRoutes from "./components/common/protectedRoutes";
import CreateCard from "./components/createCard";
import DeleteCard from "./components/deleteCard";
import UpdateCard from "./components/updateCard";
import SignUpBiz from "./components/signUpBiz";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App d-flex flex-column min-vh-100">
      <header className="mb-5">
        <NavBar />
      </header>
      <main className="container flex-fill">
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route
            path="myCards"
            element={
              <ProtectedRoutes onlyBiz>
                <MyCards />
              </ProtectedRoutes>
            }
          />
          <Route
            path="createCard"
            element={
              <ProtectedRoutes onlyBiz>
                <CreateCard />
              </ProtectedRoutes>
            }
          />
          <Route path="signIn" element={<SignIn />} />
          <Route path="signUp" element={<SignUp />} />
          <Route path="signOut" element={<SignOut />} />
          <Route
            path="/cards/delete/:id"
            element={
              <ProtectedRoutes onlyBiz>
                <DeleteCard />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/cards/:id"
            element={
              <ProtectedRoutes onlyBiz>
                <UpdateCard />
              </ProtectedRoutes>
            }
          />
          <Route path="/signUpBiz" element={<SignUpBiz />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
