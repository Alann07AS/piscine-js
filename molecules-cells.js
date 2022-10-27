const RNAls = ['C', 'G', 'A', 'U']
const DNAls = ['G', 'C', 'T', 'A']

function RNA(params) {
    let toDNA = []
    for (let i = 0; i < params.length; i++) {
        toDNA.push(RNAls[DNAls.indexOf(params[i])])
    }
    return toDNA.join('')
}
function DNA(params) {
    let toRNA = []
    for (let i = 0; i < params.length; i++) {
        toRNA.push(DNAls[RNAls.indexOf(params[i])])
    }
    return toRNA.join('')
}
