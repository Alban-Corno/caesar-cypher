import { Card, Typography } from "antd";
import CaesarComponent from "./CaesarComponent";

const { Title } = Typography;

export default function CaesarCypherDemo() {

  return (
    <Card
      style={{
        maxWidth: 400,
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      <Title level={3} style={{ textAlign: "center" }}>
        Caesar Cypher
      </Title>
      <CaesarComponent/>
    </Card>
  );
}
