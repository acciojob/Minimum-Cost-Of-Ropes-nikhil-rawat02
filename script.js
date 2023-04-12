function calculateMinCost() {
  //your code here
	let str = document.getElementById("rope-lengths").value;
  let arr = str.split(',');

	let res = 0;
	while(arr.length > 1){
		arr.sort((a,b) =>{
			return a-b;
		});

		let min_first = parseInt(arr.shift());
		let min_second = parseInt(arr.shift());

		let avg = min_first + min_second;

		res += avg;
		arr.push(avg);
	}
	
	let div = document.getElementById("result");
	div.innerText = res;
  return res;
}  
