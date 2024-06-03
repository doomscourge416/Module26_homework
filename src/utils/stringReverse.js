export function reverseString(str){
    let newStr = '';
    for(let i = str.length - 1; i >= 0; i--){
        newStr += str[i];
    }
    return newStr
}

// let string1 = 'Привет, как дела!';
// let strstr = reverseString(string1);
// console.log(strstr);