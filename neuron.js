const getFirstKey = /^[^:]*/gi
const getQuestion = /(?<=: ).*(?= -)/gi
const getCamelQuestion = /\w*/gi
const getRep = /(?<=Response: ).*$/gi
function neuron(arr = "") {
    const objToReturn = {}
    for (let i = 0; i < arr.length; i++) {
        const key = arr[i].match(getFirstKey)[0].toLowerCase()
        const question = arr[i].match(getQuestion)[0]
        const camelQuestion = question.match(getCamelQuestion).filter((a)=>a).join('_').toLowerCase()
        const rep = arr[i].match(getRep)[0]
        if (!objToReturn.hasOwnProperty(key)) {
            objToReturn[key] = {}
        }
        if (!objToReturn.hasOwnProperty(camelQuestion)) {
            objToReturn[key][camelQuestion] = {}
            objToReturn[key][camelQuestion][key] = ''
            objToReturn[key][camelQuestion].responses = []
        }
        objToReturn[key][camelQuestion][key] = question
        objToReturn[key][camelQuestion].responses.push(rep)
    }
    return objToReturn
}

console.log(neuron([
    'Questions: how are you? - Response: well thanks, and you?',
    'affirmations: i am fine - Response: cool',
    'Orders: turn on the lights! - Response: done',
    'affirmations: i am fine - Response: awesome',
  ]));
