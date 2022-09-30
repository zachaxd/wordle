import wordBank from "./wordle-bank.txt"

export const boardDefault = [
["", "", "", "", ""],
["B", "U", "N", "N", "Y"],
["", "", "", "", ""],
["", "", "", "", ""],
["", "", "", "", ""],
["", "", "", "", ""],
];

const generateWordSet = async () => {
    let wordSet;
    await fetch(wordBank).then((response) => response.text()).then
}