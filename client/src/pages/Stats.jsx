import Layout from "../layout/Layout";
import styled from "styled-components";

const Title = styled.h1`
  color: #e66465;
`;

const Body = styled.div`
  background: white;
  border-radius: 4px;
  padding: 32px;
  border: solid 0.5px #d1d1d1;
`;

export default function Stats() {
  return (
    <Layout>
      <Title>Albums</Title>
      <Body>Body Text</Body>
    </Layout>
  );
}
