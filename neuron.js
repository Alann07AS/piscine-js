const getFirstKey = /^.*(?=s:)/gi
const getQuestion = /(?<=: ).*(?= -)/gi
const getCamelQuestion = /\w*/gi
const getRep = /(?<=Response: ).*$/gi
function neuron(arr = "") {
    const objToReturn = {}
    for (let i = 0; i < arr.length; i++) {
        const subKey = arr[i].match(getFirstKey)[0].toLowerCase()
        const mainKey = subKey+'s'
        const question = arr[i].match(getQuestion)[0]
        const camelQuestion = question.match(getCamelQuestion).filter((a)=>a).join('_').toLowerCase()
        const rep = arr[i].match(getRep)[0]
        if (!objToReturn.hasOwnProperty(mainKey)) {
            objToReturn[mainKey] = {}
        }
        if (!objToReturn.hasOwnProperty(camelQuestion)) {
            objToReturn[mainKey][camelQuestion] = {}
            objToReturn[mainKey][camelQuestion][subKey] = ''
            objToReturn[mainKey][camelQuestion].responses = []
        }
        objToReturn[mainKey][camelQuestion][subKey] = question
        objToReturn[mainKey][camelQuestion].responses.push(rep)
    }
    return objToReturn
}

console.log(neuron([
    'Questions: how are you? - Response: well thanks, and you?',
    'affirmations: i am fine - Response: cool',
    'Orders: turn on the lights! - Response: done',
    'affirmations: i am fine - Response: awesome',
  ]));

// console.log(neuron([
//     'Questions: what is life? - Response: The condition that distinguishes animals and plants from inorganic matter',
//     'Questions: what is life? - Response: Life is a characteristic that distinguishes physical entities that have biological processes',
//   ]));