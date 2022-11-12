const pronouns = /^(i|you|he|she|it|they|we)$/i
const fieldsSentence = /\b(\w+)\b/g


function pronoun(str = "") {
    const proList = {}
    const fieldStr = str.match(fieldsSentence)
    console.log(fieldStr);
    for(i = 1;i < fieldStr.length; i++) {
        const preViousWord = fieldStr[i-1].toLowerCase()
        const currentWord = fieldStr[i]
        if (pronouns.test(preViousWord)) {
            if (proList.hasOwnProperty(preViousWord)) {
                if (!pronouns.test(currentWord.toLocaleLowerCase())) {
                    proList[preViousWord].word.push(currentWord)
                }
                proList[preViousWord].count++
            } else {
                proList[preViousWord] = {}
                if (!pronouns.test(currentWord)) {
                    proList[preViousWord].word = [currentWord]
                } else {
                    proList[preViousWord].word = []
                }
                proList[preViousWord].count = 1
            }
        }
    }
    return proList
}

const test1 = "Your reducer function's returned value is assigned to the accumulator, whose value is remembered across each iteration throughout the array and ultimately becomes the final, single resulting value."
const test3 = "I buy,\ni to,\nYOU buy,\nit have,\nIt buys,\nit is,\nyou go"
const testX = 'she she she she is'
console.log(pronoun(testX));