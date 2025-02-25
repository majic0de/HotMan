import styled from "styled-components";
import Logout from "../features/authentication/Logout";
import DarkModeToggle from "./DarkModeToggle";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);
  display: flex;
  justify-content: flex-end;
`;

const Header = () => {
  return (
    <StyledHeader>
      <DarkModeToggle />
      <Logout />
    </StyledHeader>
  );
};

export default Header;
