
<!DOCTYPE html>
<html>
<body>

<h2>Iterative Merge Sort</h2>

<script>

function iterativeMergeSort(){
//Declaring an array
var array = [8,3,7,4,9,2,6,5,24];
var arrayLength = array.length;

/**
pass - Number of passes required
low - starting index
high - last element
mid - middle element
i - index
 */

var pass, low, high, mid,i;

for(pass=2;pass<=arrayLength;pass=pass*2){
  for( i=0; i+pass-1<arrayLength; i=i+pass){
     low = i;
     high = i+pass-1;
     mid = Math.floor((low+high)/2);
     mergeArray(array, low, high, mid);
     
  }

}
if(pass/2 < arrayLength){
    mergeArray(array, 0, pass/2-1, arrayLength-1);
} 

document.write("After Merge Sort >>>>>> "+array);
}



function  mergeArray(array, low, high, mid){
var sortedArray = [];

var i,j,k;
i = low;
j = mid+1;
k = low;

while(i<=mid && j<=high){
if(array[i]< array[j]){
 sortedArray[k++] = array[i++];
}
else{
 sortedArray[k++] = array[j++];
}
}

while(i <= mid){
 sortedArray[k++] = array[i++];
}

while(j <= high){
 sortedArray[k++] = array[j++];
}

for(var i=low;i<=high;i++){

array[i]=sortedArray[i];
}
}


//call to iterativeMergeSort >>>>>>starting point
iterativeMergeSort();

</script>

</body>
</html>

