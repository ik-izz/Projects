
let cipher = 'lrvmnir bpr sumvbwvr jx bpr lmiwv yjeryrkbi jx qmbm wi bpr xjvni mkd ymibrut jx irhx wi bpr riirkvr jx ymbinlmtmipw utn qmumbr dj w ipmhh but bj rhnvwdmbr bpr yjeryrkbi jx bpr qmbm mvvjudwko bj yt wkbrusurbmbwjk lmird jk xjubt trmui jx ibndt wb wi kjb mk rmit bmiq bj rashmwk rmvp yjeryrkb mkd wbi iwokwxwvmkvr mkd ijyr ynib urymwk nkrashmwkrd bj ower m vjyshrbr rashmkmbwjk jkr cjnhd pmer bj lr fnmhwxwrd mkd wkiswurd bj invp mk rabrkb bpmb pr vjnhd urmvp bpr ibmbr jx rkhwopbrkrd ywkd vmsmlhr jx urvjokwgwko ijnkdhrii ijnkd mkd ipmsrhrii ipmsr w dj kjb drry ytirhx bpr xwkmh mnbpjuwbt lnb yt rasruwrkvr cwbp qmbm pmi hrxb kj djnlb bpmb bpr xjhhjcwko wi bpr sujsru msshwvmbwjk mkd wkbrusurbmbwjk w jxxru yt bprjuwri wk bpr pjsr bpmb bpr riirkvr jx jqwkmcmk qmumbr cwhh urymwk wkbmvb'

// outputs the current state of the ciphertext
console.log(`Cipher text: \n${cipher}`)

//Declares empty object and then initializes 26 alphabetical keys and sets them to a value of 0
let relativeFreq = {};
for(i = 0; i < 26; i++){
    relativeFreq[String.fromCharCode(i+97)] = 0
}

// Takes the original cipher text and removes the spaces
let cipherLetters = cipher.split(' ').join('');

//It iterates over each letter and incrementing the value that corresponds to the letter
for(i = 0; i < cipherLetters.length; i++){
    relativeFreq[cipherLetters[i]] += 1
}
console.log(relativeFreq)

//Converts the original cipher into an array of string, as strings are immutable
plainText = [...cipher]

//The letter I want to substitute in as plaintext
let newValue = 'Q';

// substitutes the plaintext for the cipher text
for(i = 0; i < plainText.length; i++){
    if(plainText[i] === 'f'){
        plainText[i] = newValue;
    }
}

// Converts the array of string back into a single string and outputs the current state of the plaintext
console.log(`\n Plaintext: \n${plainText.join("")}`)

