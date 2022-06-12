const arr= [4,34357,3,67,8,3,8,0,45,];
arr.sort((a,b) => a - b, arr.filter((element, i) => i === arr.indexOf(element)) );
simarr = arr.filter((element, i) => i === arr.indexOf(element));
console.log(simarr);