  /* Push method task */
let arr1 = [];

for (i = 01 ; i <= 10; i++){
    arr1.push(i);
}
console.log(arr1);

// Pop method task //
arr1.pop();
console.log(arr1);

// Concat method task // 
arr2 = ['A','B','C','D'];
arr3 = arr1.concat(arr2);
console.log(arr3);

// Slice method task //

console.log(arr2.slice(2 , 4));

//  Includes method task //
console.log(arr1.includes(11));

// Join method task //
arr4 = ['Car' , 'House' , 'Money'];
console.log(arr4);
console.log(arr4.join(' - '));

// Sort method task //
arr5 = [4 , 5 ,3 ,2 , 1];
console.log(arr5);
arr5.sort();
console.log(arr5);