function checkPal(){
let str = document.getElementById("input").value 
let strLength = str.length 
let isPalindrome = true

for(let i = 0; i < strLength/2; i++) {
    if(str[i] !== str[strLength - i - 1]) {
        isPalindrome = false
        break
    }
}

let result = document.getElementById("result")
if(isPalindrome) {
    result.innerHTML = "Yes, it's a Palindrome"
}
else{
    result.innerHTML = "No, it's not a Palindrome"
}
}
