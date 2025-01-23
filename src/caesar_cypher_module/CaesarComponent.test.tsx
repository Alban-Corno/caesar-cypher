import { render, screen, fireEvent } from "@testing-library/react";
import CaesarComponent from "./CaesarComponent";
import { describe, expect, test } from "vitest";

describe('encrypt string with Caesar Cypher', () => {
    test("resets step to 0 on empty text input", () => {
        render(<CaesarComponent />);

        const word: string = "1B^o!n6JOURzZ";
        const wordCypherOne: string = "1C^p!o6KPVSaA";

        // Get references to inputs and output paragraph
        const textInput = screen.getByTestId("text-input") as HTMLInputElement;
        const stepInput = screen.getByTestId("step-input") as HTMLInputElement;
        const paragraphOutput = screen.getByTestId("paragraph-output");

        // Change text and check step reset
        fireEvent.change(textInput, { target: { value: "Hello" } });
        expect(stepInput.value).toBe("0");  // Step should reset to 0
        expect(textInput.value).toBe("Hello");

        // Change step to 1, then text to a ciphered word
        fireEvent.change(stepInput, { target: { value: "1" } });
        expect(stepInput.value).toBe("1");

        fireEvent.change(textInput, { target: { value: word } });
        expect(textInput.value).toBe(word);

        // Expect the paragraph output to match encrypted text
        expect(paragraphOutput.textContent).toBe(wordCypherOne); // Check textContent

        // Clear text input and check step reset
        fireEvent.change(textInput, { target: { value: "" } });
        expect(stepInput.value).toBe("0"); // Step should reset to 0
        expect(textInput.value).toBe(""); // Text input should be cleared
    });
});
