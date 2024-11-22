import { describe, expect, test } from 'vitest';
import { encryptWithCaesarCypher } from './caesar_logic';

const lowerLetter: string = "a";
const lowerLetterCypherOne: string = "b";

const upperLetter: string = "A";
const upperLetterCypherOne: string = "B";

const lowerAlphabet: string = Array.from({ length: 26 }, (_, i) =>
  String.fromCharCode(97 + i)
).join("");

const lowerAlphabetCypherOne: string = Array.from({ length: 26 }, (_, i) =>
  i === 25 ? String.fromCharCode(97) : String.fromCharCode(98 + i)
).join("");

const upperAlphabet: string = lowerAlphabet.toUpperCase();
const upperAlphabetCypherOne: string = lowerAlphabetCypherOne.toUpperCase();

const word: string = "1B^o!n6JOURzZ";
const wordCypherOne: string = "1C^p!o6KPVSaA";

describe('vitest works', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(1 + 2).toBe(3);
    expect(1 + 3).not.toBe(3);
  });
});

describe('encrypt string with Caesar Cypher', () => {

  test('basic case : lowerLetter -> lowerLetterCypherOne', () => {
    expect(encryptWithCaesarCypher(lowerLetter)).toBe(lowerLetterCypherOne);
    expect(encryptWithCaesarCypher(lowerLetter,1)).toBe(lowerLetterCypherOne);
  });
  test('basic case : upperLetter -> upperLetterCypherOne', () => {
    expect(encryptWithCaesarCypher(upperLetter)).toBe(upperLetterCypherOne);
    expect(encryptWithCaesarCypher(upperLetter,1)).toBe(upperLetterCypherOne);
  });
  test('limit case : z -> a', () => {
    expect(encryptWithCaesarCypher("z")).toBe(lowerLetter);
    expect(encryptWithCaesarCypher("z",1)).toBe(lowerLetter);
  });
  test('limit case : Z -> A', () => {
    expect(encryptWithCaesarCypher("Z")).toBe(upperLetter);
    expect(encryptWithCaesarCypher("Z",1)).toBe(upperLetter);
  });

  test('basic case : lowerAlphabet-> lowerAlphabetCypherOne', () => {
    expect(encryptWithCaesarCypher(lowerAlphabet)).toBe(lowerAlphabetCypherOne);
    expect(encryptWithCaesarCypher(lowerAlphabet,1)).toBe(lowerAlphabetCypherOne);
  });
  test('basic case : upperAlphabet-> upperAlphabetCypherOne', () => {
    expect(encryptWithCaesarCypher(upperAlphabet)).toBe(upperAlphabetCypherOne);
    expect(encryptWithCaesarCypher(upperAlphabet,1)).toBe(upperAlphabetCypherOne);
  });

  test('basic case : word -> wordCypherOne', () => {
    expect(encryptWithCaesarCypher(word)).toBe(wordCypherOne);
    expect(encryptWithCaesarCypher(word,1)).toBe(wordCypherOne);
  });

  test('limit case : word & step : 26-> word', () => {
    expect(encryptWithCaesarCypher(word, 26)).toBe(word);
  });

  test('limit case : word & step : 0-> word', () => {
    expect(encryptWithCaesarCypher(word, 0)).toBe(word);
  });

  test('edge case : word & step : 27 -> wordCypherOne', () => {
    expect(encryptWithCaesarCypher(word, 27)).toBe(wordCypherOne);
  });

  test('edge case : wordCypherOne & step : -1 -> word', () => {
    expect(encryptWithCaesarCypher(wordCypherOne, -1)).toBe(word);
  });

  test('edge case : empty & step : 1 -> empty', () => {
    expect(encryptWithCaesarCypher("")).toBe("");
    expect(encryptWithCaesarCypher("",1)).toBe("");
  });
});


