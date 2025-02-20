import styled, { css } from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 50px;
      color: #43f55;
    `}
  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 40px;
      color: #24355;
    `}
  ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 30px;
      color: #23f55;
    `}

  line-height: 1.4
`;

export default Heading;
