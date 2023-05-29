import { Outlet } from "react-router-dom";

import { Container } from "react-bootstrap";
import { Header } from "../components/Layout";
import Notifications from "../components/Layout/Notifications/Notifications";

const Layout = () => {
  return (
    <Container>
      <Header />
      <Notifications/>
      <div>
        <Outlet />
      </div>
    </Container>
  );
};

export default Layout;
