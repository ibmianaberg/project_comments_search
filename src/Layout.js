import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {

  return (
    <>
      <header className="headOfPages">
        <NavLink to="/" className="linkStyle">
          Комментарии
        </NavLink>
        <NavLink to="search" className="linkStyle">
          Поиск
        </NavLink>
      </header>
      <Outlet />
      <div className="line"></div>
      <footer className="footer">© 2023</footer>
    </>
  );
};
export { Layout };
