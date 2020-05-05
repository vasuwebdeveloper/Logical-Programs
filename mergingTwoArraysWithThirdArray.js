<!DOCTYPE html>
<html>
<body>

<h2>Merging two arrays in a single array</h2>

<script>


function initialize (){
var arrayA = [2,10,18,20,23];
var arrayB = [4,9,19,25];
var arrayC = [];

//Call to the merge function
mergeArray(arrayA,arrayB,arrayC);
document.write(arrayC);

}


function mergeArray(arrayA,arrayB,arrayC){

var arrayAlength = arrayA.length;
var arrayBlength = arrayB.length;

//initialize with zero value as index starts from 0
var i,j,k;
i = j = k =0;

//Iterate over the two arrays A and B
while(i < arrayAlength && j < arrayBlength ){

//If array A as lesser element than array B then store that element in the array C and increase the indexes to give chances to next element
if(arrayA[i] < arrayB[j]){
  arrayC[k++] = arrayA[i++];
}
//viceversa of above statement
else{
 arrayC[k++] = arrayB[j++];
}
}

// if there are any elements are still left in the single array whether A or B then Iterate over them and store it into arrayC

for(;i<arrayAlength;i++){
 arrayC[k++] = arrayA[i++];
}

for(;j<arrayBlength;j++){
 arrayC[k++] = arrayB[j++];
}

}

// Call to Initizalize
initialize();
</script>

</body>
</html>

