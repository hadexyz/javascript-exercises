const reverseString = function(str){
    toString(str);
    let finalStr = ""
    for (let i=1;i <= str.length; i++) {
        let lastLetter = str.charAt(str.length - i);
        finalStr += lastLetter
    } 
    return finalStr
};

// Do not edit below this line
module.exports = reverseString;
