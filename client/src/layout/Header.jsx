import styled from "styled-components";
const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;
const Button = styled.button`
  background: linear-gradient(to left, #9198e5, #e66465);
  padding: 12px 24px;
  border-radius: 22px;
  border: none;
  font-size: 14px;
  weight: normal;
  color: white;
`;
export default function Header() {
  return (
    <Container>
      <Button>Add Song</Button>
    </Container>
  );
}
