import { describe, expect, test } from 'vitest';
import { encryptWithCaesarCipher } from './caesar_logic';

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
    expect(encryptWithCaesarCipher(lowerLetter)).toBe(lowerLetterCypherOne);
    expect(encryptWithCaesarCipher(lowerLetter,1)).toBe(lowerLetterCypherOne);
  });
  test('basic case : upperLetter -> upperLetterCypherOne', () => {
    expect(encryptWithCaesarCipher(upperLetter)).toBe(upperLetterCypherOne);
    expect(encryptWithCaesarCipher(upperLetter,1)).toBe(upperLetterCypherOne);
  });
  test('limit case : z -> a', () => {
    expect(encryptWithCaesarCipher("z")).toBe(lowerLetter);
    expect(encryptWithCaesarCipher("z",1)).toBe(lowerLetter);
  });
  test('limit case : Z -> A', () => {
    expect(encryptWithCaesarCipher("Z")).toBe(upperLetter);
    expect(encryptWithCaesarCipher("Z",1)).toBe(upperLetter);
  });

  test('basic case : lowerAlphabet-> lowerAlphabetCypherOne', () => {
    expect(encryptWithCaesarCipher(lowerAlphabet)).toBe(lowerAlphabetCypherOne);
    expect(encryptWithCaesarCipher(lowerAlphabet,1)).toBe(lowerAlphabetCypherOne);
  });
  test('basic case : upperAlphabet-> upperAlphabetCypherOne', () => {
    expect(encryptWithCaesarCipher(upperAlphabet)).toBe(upperAlphabetCypherOne);
    expect(encryptWithCaesarCipher(upperAlphabet,1)).toBe(upperAlphabetCypherOne);
  });

  test('basic case : word -> wordCypherOne', () => {
    expect(encryptWithCaesarCipher(word)).toBe(wordCypherOne);
    expect(encryptWithCaesarCipher(word,1)).toBe(wordCypherOne);
  });

  test('limit case : word & step : 26-> word', () => {
    expect(encryptWithCaesarCipher(word, 26)).toBe(word);
  });

  test('limit case : word & step : 0-> word', () => {
    expect(encryptWithCaesarCipher(word, 0)).toBe(word);
  });

  test('edge case : word & step : 27 -> wordCypherOne', () => {
    expect(encryptWithCaesarCipher(word, 27)).toBe(wordCypherOne);
  });

  test('edge case : wordCypherOne & step : -1 -> word', () => {
    expect(encryptWithCaesarCipher(wordCypherOne, -1)).toBe(word);
  });

  test('edge case : empty & step : 1 -> empty', () => {
    expect(encryptWithCaesarCipher("")).toBe("");
    expect(encryptWithCaesarCipher("",1)).toBe("");
  });
});


