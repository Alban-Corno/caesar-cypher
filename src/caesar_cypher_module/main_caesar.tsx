import { Card, Input } from "antd";
import { useState } from "react";
import { Typography } from "antd";
import { encryptWithCaesarCypher } from "./logic_caesar";

const { Title, Paragraph } = Typography;

export default function CaesarCypherDemo() {
  const defaultText = "Write your sentence";
  const [text, setText] = useState<string>();

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
      <Input
        placeholder={defaultText}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Paragraph style={{ marginTop: 20 }}>
        { (!text || text == '') ? 
          <span style={{ fontStyle: "italic", color: "gray" }}>
            {defaultText}
          </span>
         : encryptWithCaesarCypher(text)
        }
      </Paragraph>
    </Card>
  );
}
