import { Outlet } from "react-router-dom";
import GlobalStyles from "../styles/GlobalStyles";

function AppLayout() {
  return (
    <>
      <GlobalStyles />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default AppLayout;
