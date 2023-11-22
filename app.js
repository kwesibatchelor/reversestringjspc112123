const string = "Khari Kwesi Batchelor";

const reverseEntireSentence = reverseBySeparator(string, "");

const reversesEachWord = reverseBySeparator(reverseEntireSentence, " ");

function reverseBySeparator(string, separator) {
    return string.split(separator).reverse().join(separator);
}

console.log(reverseEntireSentence);
console.log(reversesEachWord);
