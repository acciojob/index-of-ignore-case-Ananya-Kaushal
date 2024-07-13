function indexOfIgnoreCase(s1, s2) {
  // write your code here
	//let index=-1;
	s1=s1.toLowerCase();
	let index=s1.indexOf(s2)
	console.log(index);
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
