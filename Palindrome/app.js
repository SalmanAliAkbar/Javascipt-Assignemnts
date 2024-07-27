function checkPal() {
    const str = document.getElementById("input").value.toLowerCase().replace(/[^a-z0-9]/g, '');
    const length = str.length;
    let isPalindrome = true;

    for (let i = 0; i < length / 2; i++) {
        if (str[i] !== str[length - i - 1]) {
            isPalindrome = false;
            break;
        }
    }

    const result = document.getElementById("result");
    if (isPalindrome) {
        result.innerHTML = "Yes, it's a Palindrome";
    } else {
        result.innerHTML = "No, it's not a Palindrome";
    }
}
