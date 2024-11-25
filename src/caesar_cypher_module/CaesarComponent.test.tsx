import { render, screen, fireEvent } from "@testing-library/react";
import CaesarComponent from "./CaesarComponent";
import { describe, expect, test } from "vitest";

describe('encrypt string with Caesar Cypher', () => {
    test("resets step to 0 on empty text input", () => {
        render(<CaesarComponent />);

        const textInput = screen.getByTestId("text-input") as HTMLInputElement;
        const stepInput = screen.getByTestId("step-input") as HTMLInputElement;

        fireEvent.change(textInput, { target: { value: "Hello" } });
        expect(stepInput.value).toBe("0");

        fireEvent.change(textInput, { target: { value: "" } });
        expect(stepInput.value).toBe("0");
    });
});