function firstNonRepeatedChar(str) {
let res="";
for(let i=0;i<=str.length;i++){
	let count=0;
	for(let j=0;j<=str.length;j++){
		if(str[i]===str[j]){
			count++;
		}
	}if(count==1){
		return str[i];
	}
}return null;
		// Write your code here
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
