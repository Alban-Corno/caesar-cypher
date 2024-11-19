import { Card, Input, InputNumber } from "antd";
import { useState } from "react";
import { Typography } from "antd";
import { encryptWithCaesarCypher } from "./logic_caesar";

const { Title, Paragraph } = Typography;

export default function CaesarCypherDemo() {
  const defaultTextSentence = "Write your sentence";
  const defaultTextStep = "Write your step";
  const [text, setText] = useState<string>();
  const [step, setStep] = useState<number>();

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
      <div style={{display : "flex", gap:"5px"}}>
      <Input
        placeholder={defaultTextSentence}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <InputNumber
        placeholder={defaultTextStep}
        value={step}
        onChange={(e) => setStep(e ?? 0)}
      />

      </div>
      <Paragraph style={{ marginTop: 20 }}>
        { (!text || text == '') ? 
          <span style={{ fontStyle: "italic", color: "gray" }}>
            {defaultTextSentence}
          </span>
         : encryptWithCaesarCypher(text,step)
        }
      </Paragraph>
    </Card>
  );
}
