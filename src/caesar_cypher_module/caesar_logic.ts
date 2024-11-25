import { useState } from "react";

const useCaesarCipher = (defaultText = "Write your sentence", defaultStep = 0) => {
  const [text, setText] = useState<string>(defaultText);
  const [step, setStep] = useState<number>(defaultStep);

  const updateText = (newText: string) => setText(newText);
  const updateStep = (newStep: number) => setStep(newStep);

  return {
    text,
    step,
    encryptWithCaesarCipher,
    updateText,
    updateStep,
  };
};

export default useCaesarCipher;

export const encryptWithCaesarCipher = (letter: string, step?: number): string => {
    let cypherLetter: string = '';
    const cypherStep = step != undefined ? step % 26 : 1;

    if (letter.length != 0 && letter != "") {
        for (let index = 0; index < letter.length; index++) {
            const char = letter[index];

            if (char.match(/[a-z]/i)) {
                const isUpperCase = char === char.toUpperCase();
                const base = isUpperCase ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);

                const temp = ((char.charCodeAt(0) - base + cypherStep) % 26 + 26) % 26 + base;
                cypherLetter += String.fromCharCode(temp);
            } else {
                cypherLetter += char;
            }
        }
    }
    return cypherLetter;
};
