import { Outlet } from "react-router";
import Sidebar from "./Sidebar";
import Header from "./Header";
import styled from "styled-components";

const StyledLayoute = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
`;

const Main = styled.main`
  background-color: var(--color-grey-100);
  padding: 4rem 4.8rem 6.4rem;
  overflow: scroll;
`;

const Contianer = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

function AppLayout() {
  return (
    <StyledLayoute>
      <Header />
      <Sidebar />
      <Main>
        <Contianer>
          <Outlet />
        </Contianer>
      </Main>
    </StyledLayoute>
  );
}

export default AppLayout;
