let passWord = document.getElementById('passwordTxt');
let passwordLength = document.getElementById('passwordLength');
let rangeValue = document.getElementById('rangeValue');

//Range function
const rangeDisplay = () => {
    rangeValue.innerHTML = passwordLength.value;
};

//random password function
const randomPass = () => {
    let result = Math.floor(Math.random() * 62);
    return result;
}

const indexModifier = (length) => {
    let charSet = "abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let arrNum = [];
    let result = "";

    for(let x = 0; x < length; x++){
        arrNum.push(randomPass());
    }

    for(let y = 0; y < arrNum.length;y++){
        result += charSet[arrNum[y]];
    }

    return result;
};

//Password Generator Function
document.getElementById('generateBtn').addEventListener('click', function(){
    let passWords = indexModifier(passwordLength.value);
    passWord.innerHTML = passWords;
});

// Copy Password Function
copyBtn.addEventListener('click', function(){
    let passwordToCopy = passWord.textContent;
    
    // Create a temporary input element to copy the text
    let tempInput = document.createElement('textarea');
    tempInput.value = passwordToCopy;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    
    // Provide visual feedback or alert to indicate successful copy
    alert('Password copied to clipboard: ' + passwordToCopy);
});