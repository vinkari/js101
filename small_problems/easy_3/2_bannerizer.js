/*
Write a function that will take a short line of text, and write it to the console log within a box.

Example:
bannerizer('To boldly go where no one has gone before.');
will log on the console:
+--------------------------------------------+
|                                            |
| To boldly go where no one has gone before. |
|                                            |
+--------------------------------------------+

Further Exploration:
Modify this function so that it truncates the message if it doesn't fit inside a maximum width provided as a second argument (the width is the width of the box itself). 
You may assume no maximum if the second argument is omitted.
For a challenging but fun exercise, try word wrapping messages that are too long to fit, so that they appear on multiple lines but are still contained within the box. 
This isn't an easy problem, but it's doable with basic JavaScript.
*/

function bannerizer (string) {
  console.log(`+${'-'.repeat(string.length + 2)}+`);
  console.log(`|${' '.repeat(string.length + 2)}|`);
  console.log(`| ${string} |`);
  console.log(`|${' '.repeat(string.length + 2)}|`);
  console.log(`+${'-'.repeat(string.length + 2)}+`);
}

//Test
bannerizer('123');
bannerizer('this is a sentence');
bannerizer('');

//Further Exploration #1
function bannerizerF (string, width = string.length + 2) {
  let cutString = string.slice(0, width - 2);
  let horizontalLine = `+${'-'.repeat(cutString.length + 2)}+`;
  let emptySpace = `|${' '.repeat(cutString.length + 2)}|`
  
  console.log(horizontalLine);
  console.log(emptySpace);
  console.log(`| ${cutString} |`);
  console.log(emptySpace);
  console.log(horizontalLine);
}

//Test
bannerizerF('123', 2);
bannerizerF('this is a sentence', 4);

//Further Exploration #2
//Some edge cases left unaccounted for
function bannerizerF2 (string, width = string.length + 2) {
  let strWidth = width - 2;
  let partialStringArr = [];
  partialStringArr.push(string.slice(0, strWidth))
  for (let i = 1; i < Math.ceil(string.length / strWidth); i++) {
      partialStringArr.push(string.slice(i * strWidth, i * strWidth + strWidth));
  }
 
  if (partialStringArr[partialStringArr.length -1].length < strWidth) {
    partialStringArr[partialStringArr.length -1] += ' '.repeat(strWidth - partialStringArr[partialStringArr.length -1].length)
  }
  
  let horizontalLine = `+${'-'.repeat(width)}+`;
  let emptySpace = `|${' '.repeat(width)}|`

  console.log(horizontalLine);
  console.log(emptySpace);
  partialStringArr.forEach(string => console.log(`| ${string} |`));
  console.log(emptySpace);
  console.log(horizontalLine);
}

//Test
bannerizerF2('12345678910', 3);
bannerizerF2('This thing took me way too long to do', 5);
bannerizerF2('');
