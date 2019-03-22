//方法一：
var arr1  = [...new Set([6,6,7,8,8,])];
console.log(arr1);


//方法二：
var	arr2 = [6,6,7,8,8,999];
var set = new Set(arr2)
console.log(set);

//方法三：
var arr = [3,5,5,6,6,7,7,8,8]; 
var set = new Set(arr);
var newArr = Array.from(set);
console.log(newArr);  