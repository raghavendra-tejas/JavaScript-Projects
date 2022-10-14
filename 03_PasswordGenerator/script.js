// There are total of 26 alphabets adding it with 97 gives random values falls between 97 to 122 (lowercase browser character set)
// Here number is converted to alphabet
function getRandomLower() {
    let lowerCase = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    return lowerCase;
}

// Upper case character set lies between 65 to 90 hence the 26 is added with the 65
// Here number is converted to alphabet
function getRandomUpper() {
    let upperCase = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    return upperCase;
}

// Browser character set for the numbers 0 to 9 lies between 48 to 57
function getRandomNumber() {
    let randomNumber = String.fromCharCode(Math.floor(Math.random() * 10) + 48);
    return randomNumber;
}

// To get the random symbol
function getRandomSymbol() {
    let symbol = "!@#$%^&*(){}[]=<>/,.";
    return symbol[Math.floor(Math.random() * symbol.length)];
}

// Putting all the functions into an object
const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

// DOM Elements
const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')

// Generate password function
function generatePassword(upper, lower, number, symbol, length) {
    // 1. Initialize password variable
    // 2. Filter out unchecked types
    // 3. Loop over the password length call a generator function for each type
    // 4. Add final password to the password variable and return
    let password = "";
    const typesCount = lower + upper + number + symbol;
    // console.log("typesCount: ", typesCount);
    const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(item => Object.values(item)[0])
    // console.log("typesArr: ", typesArr);
    if (typesCount === 0) {
        return "";
    }
    for (let i = 0; i < length; i++) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0];
            // console.log("funcName: ", funcName);
            password += randomFunc[funcName]();
        }) 
    }
    // console.log(password.slice(0, length));
    const finalPassword = password.slice(0, length);
    return finalPassword;
}

// There are two events in this project
// Generate password event listener
generateEl.addEventListener('click', () => {
    let length = +lengthEl.value;       // Adding '+' will convert the datatype to number
    let hasUpper = uppercaseEl.checked;
    let hasLower = lowercaseEl.checked;
    let hasNumbers = numbersEl.checked;
    let hasSymbols = symbolsEl.checked;
    resultEl.innerText = generatePassword(hasUpper, hasLower, hasNumbers, hasSymbols, length);
})

// clipboard event listener - copy password to clipboard
clipboardEl.addEventListener('click', () => {
    const textArea = document.createElement("textArea");
    const password2 = resultEl.innerText;
    if (!password2) {
        return;
    }
    textArea.value = password2;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    textArea.remove();
    alert("Password copied to clipboard");
})