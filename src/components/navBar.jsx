import smartphone from "../icons/smartphone.png";
import home from "../icons/house.png";
import cards from "../icons/rating.png";
import about from "../icons/about.png";
import signUp from "../icons/add-friend.png";
import signIn from "../icons/signIn.png";
import search from "../icons/magnifying-glass.png";
import exit from "../icons/turn-off.png";
import signUpBiz from "../icons/new-arrival.png";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../context/authContext";
const NavBar = () => {
  const { user } = useAuth();

  return (
    <>
      <header className="text-bg-dark d-flex justify-content-center pt-2">
        <Link to="/" className="text-decoration-none text-white">
          <h1>
            {" "}
            My <img src={smartphone} height={55} alt="icon" /> App
          </h1>
        </Link>
      </header>
      <nav
        className="navbar navbar-expand-md navbar-dark"
        aria-label="Fourth navbar example"
      >
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample04"
            aria-controls="navbarsExample04"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsExample04">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link d-flex flex-column align-items-center"
                  to="/"
                >
                  <img src={home} alt="home" height={25} />
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link d-flex flex-column align-items-center"
                  to="/about"
                >
                  <img src={about} alt="about" height={25} />
                  About
                </NavLink>
              </li>
              {user?.biz && (
                <li className="nav-item">
                  <NavLink
                    className="nav-link d-flex flex-column align-items-center"
                    to="/myCards"
                  >
                    <img src={cards} alt="" height={25} width={35} />
                    My Cards
                  </NavLink>
                </li>
              )}
            </ul>

            <ul className="navbar-nav ms-auto mb-2 mb-md-0">
              {!user ? (
                <>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link d-flex flex-column align-items-center"
                      to="/signIn"
                    >
                      <img src={signIn} alt="" height={25} />
                      Sign In
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link d-flex flex-column align-items-center"
                      to="/signUp"
                    >
                      <img src={signUp} alt="" height={25} />
                      Sign Up
                    </NavLink>
                  </li>{" "}
                  <li className="nav-item">
                    <NavLink
                      className="nav-link d-flex flex-column align-items-center"
                      to="/signUpBiz"
                    >
                      <img src={signUpBiz} alt="" height={25} />
                      Business
                    </NavLink>
                  </li>
                </>
              ) : (
                <li className="nav-item">
                  <NavLink
                    className="nav-link d-flex flex-column align-items-center"
                    to="/signOut"
                  >
                    <img src={exit} alt="" height={25} />
                    Sign Out
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
      <div className="text-bg-dark header">
        <div className="container mb-4 pb-3 justify-content-center d-flex ">
          <form role="search" className="d-flex align-items-center">
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button type="submit" className="btn">
              <img src={search} alt="" height={35} />
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default NavBar;
