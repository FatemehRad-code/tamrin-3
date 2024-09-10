function isPalindrome(str) {
   
    str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    
    
    for (let i = 0; i < Math.floor(str.length / 2); i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    }
    
    return true;
}


const str = "A man, a plan, a canal, Panama";
console.log(isPalindrome(str)); 