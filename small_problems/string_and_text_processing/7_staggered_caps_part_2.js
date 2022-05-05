/*
Modify the function from the previous exercise so it ignores non-alphabetic characters when determining whether it should uppercase or lowercase each letter. 
The non-alphabetic characters should still be included in the return value; they just don't count when toggling the desired case.
*/

function staggeredCase(string) {
  let resultArray = [];
  let count = 0;
  string.split('').forEach((char, index) => {
    if ('abcdefghijklmnopqrstuvwxyz'.includes(char.toLowerCase())) {
      if (count === 0) {
        resultArray.push(char.toUpperCase());
        count += 1;
      } else {
        resultArray.push(char.toLowerCase());
        count -= 1;
      }
    } else {
      resultArray.push(char);
    }
  });
return resultArray.join('');
}

//Test
console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs");