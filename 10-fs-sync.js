const {readFileSync,writeFileSync}=require('fs');
console.log('start');


 const first=readFileSync('./content/first.txt','utf8');
 const second=readFileSync('./content/second.txt','utf8');

// console.log(first,second);


writeFileSync('./content/result-sync.txt',`here is the result: ${first},${second}`,{flag:'a'});// if there is a file we override the text in it if no we create one

console.log('done with this task');
console.log('starting the next one');

