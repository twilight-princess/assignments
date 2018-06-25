arr = [3,5,4,8,1,2,7]


function findMissing(numbArr){
	var sortedArr = numbArr.sort(function(a, b){
		return a - b
	})
	for (var i = 0; i < sortedArr.length-1; i++){
		if (sortedArr[i] + 1 != sortedArr[i+1]){
			return sortedArr[i]+1
		}
	}
}

console.log(findMissing(arr))
