import { Input, InputNumber } from "antd";
import { useEffect, useState } from "react";
import { Typography } from "antd";
import { encryptWithCaesarCypher } from "./caesar_logic";
const { Paragraph } = Typography;

export default function CaesarComponent() {
    const defaultTextSentence = "Write your sentence";
    const [text, setText] = useState<string>();
    const [step, setStep] = useState<number>();
    const minWidth: string = "50px";
    const communeBorderRadius = 0;
    const defaultStep = 0;
    const marginTop = 20;

    useEffect(() => { if (text == '') { setStep(0) } }, [text]);

    return (
        <>
            < div style={{ display: "flex" }}>
                <Input
                    placeholder={defaultTextSentence}
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    style={{ borderTopRightRadius: communeBorderRadius, borderBottomRightRadius: communeBorderRadius }}
                />
                <InputNumber
                    defaultValue={defaultStep}
                    value={step ?? defaultStep}
                    onChange={(e) => setStep(e ?? defaultStep)}
                    style={{ borderTopLeftRadius: communeBorderRadius, borderBottomLeftRadius: communeBorderRadius, minWidth: minWidth }}
                />
            </div >
            <Paragraph style={{ marginTop: marginTop }}>
                {(!text || text == '') ?
                    <span style={{ fontStyle: "italic", color: "gray" }}>
                        {defaultTextSentence}
                    </span>
                    : encryptWithCaesarCypher(text, step)
                }
            </Paragraph>
        </>
    )
}

