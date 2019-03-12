function isPalindrome(str) {
    return str === str.split("").reverse().join("");
}
// let p = isPalindrome("abba");
// console.log(p);