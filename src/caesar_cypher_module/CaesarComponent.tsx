import { Input, InputNumber } from "antd";
import { useEffect } from "react";
import { Typography } from "antd";
import useCaesarCipher from "./caesar_logic";
const { Paragraph } = Typography;

export default function CaesarComponent() {
    const defaultTextSentence = "Write your sentence";
    const {
        text,
        step,
        encryptWithCaesarCipher,
        updateText,
        updateStep,
      } = useCaesarCipher();
    const minWidth: string = "50px";
    const communeBorderRadius = 0;
    const defaultStep = 0;
    const marginTop = 20;

    useEffect(() => { if (text == '') { updateStep(0) } }, [text, updateStep]);

    return (
        <>
            < div style={{ display: "flex" }}>
                <Input
                    placeholder={defaultTextSentence}
                    value={text}
                    onChange={(e) => updateText(e.target.value)}
                    style={{ borderTopRightRadius: communeBorderRadius, borderBottomRightRadius: communeBorderRadius }}
                    data-testid="text-input"
                />
                <InputNumber
                    defaultValue={defaultStep}
                    value={step ?? defaultStep}
                    onChange={(e) => updateStep(e ?? defaultStep)}
                    style={{ borderTopLeftRadius: communeBorderRadius, borderBottomLeftRadius: communeBorderRadius, minWidth: minWidth }}
                    data-testid="step-input"
                />
            </div >
            <Paragraph style={{ marginTop: marginTop }} data-testid="paragraph-output">
                {(!text || text == '') ?
                    <span style={{ fontStyle: "italic", color: "black" }}>
                        {defaultTextSentence}
                    </span>
                    : encryptWithCaesarCipher(text, step)
                }
            </Paragraph>
        </>
    )
}

