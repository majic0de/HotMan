import styled from "styled-components";
import { useDarkMode } from "../context/DarkModeContext";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;

  ${({ invert }) => invert && `filter:invert(1);`}
`;

const Logo = () => {
  const { isDarkMode } = useDarkMode();
  return (
    <StyledLogo>
      <Img src="/hot_man_icon.svg" alt="Logo" invert={isDarkMode} />
    </StyledLogo>
  );
};

export default Logo;
