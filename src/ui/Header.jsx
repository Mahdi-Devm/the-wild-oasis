import styled from "styled-components";

const StatledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem;
  border-bottom: 1px solid var(--color-grey-100);
`;

function Header() {
  return <StatledHeader>Hi header</StatledHeader>;
}

export default Header;
