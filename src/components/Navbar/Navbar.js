import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Container } from "../../style/GlobalStyle";
import { NavbarStyled, MobileMenu, TogglerMenu, MenuWrap } from "./style";

const Navbar = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("Auth");
  const [logged, setLogged] = useState(isLoggedIn);
  const [menuMobile, setMenuMobile] = useState(false);

  useEffect(() => {
    if (isLoggedIn) setLogged(true);
  }, [logged, isLoggedIn]);

  const handleLogout = () => {
    localStorage.removeItem("Auth");
    setLogged(false);
    navigate("/login");
  };

  const activeStyle = {
    color: "var(--primary)",
    opacity: 0.5,
  };

  return (
    <NavbarStyled>
      <Container>
        <nav>
          <NavLink to="/">
            <p>Events</p>
          </NavLink>

          <ul>
            <li>
              {logged && (
                <NavLink to="/" end activeStyle={activeStyle}>
                  Todos eventos
                </NavLink>
              )}
            </li>

            <li>
              {logged && (
                <NavLink to="/events/post" end activeStyle={activeStyle}>
                  Publicar evento
                </NavLink>
              )}
            </li>

            <li>
              <NavLink
                to="/login"
                activeStyle={activeStyle}
                onClick={handleLogout}
              >
                {logged ? "Sair" : "Entrar / cadastrar"}
              </NavLink>
            </li>
          </ul>
        </nav>

      <MenuWrap>
        <NavLink to="/" style={{zIndex: '1111'}}>
            <p>Events</p>
        </NavLink>

        <TogglerMenu
            onClick={() => setMenuMobile(!menuMobile)}
            menuMobile={menuMobile}
          >
            <div className="d1"></div>
            <div className="d2"></div>
            <div className="d3"></div>

          </TogglerMenu>
          
        <MobileMenu style={{
          transform: menuMobile
            ? "translate3d(0px,0px,0px)"
            : "translate3d(-500px,0px,0px)",
        }}>
          <ul>
            <li>
              {logged && (
                <NavLink to="/" end activeStyle={activeStyle}>
                  Todos eventos
                </NavLink>
              )}
            </li>

            <li>
              {logged && (
                <NavLink to="/events/post" end activeStyle={activeStyle}>
                  Publicar evento
                </NavLink>
              )}
            </li>

            <li>
              <NavLink
                to="/login"
                activeStyle={activeStyle}
                onClick={handleLogout}
              >
                {logged ? "Sair" : "Entrar / cadastrar"}
              </NavLink>
            </li>
          </ul>
        </MobileMenu>
        </MenuWrap>
      </Container>
    </NavbarStyled>
  );
};

export default Navbar;
