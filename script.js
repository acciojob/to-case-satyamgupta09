function toCase(text) {
  // write your code here
	if(text.length==0) return '-';
	let s1=text.toLowerCase().trim();
	let s2=text.toUpperCase().trim();

	return (s1+'-'+s2);
}

// DO not change the code below

// const text = prompt("Enter text:");
alert(toCase(text));
