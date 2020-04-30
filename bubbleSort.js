<!DOCTYPE html>
<html>
<body>

<h2>Bubble Sort</h2>

<script>
var array = [50,40,30,20,10];
var n = array.length;

//outer loop for checking passes
for(var i =0; i<n-1; i++){
//inner loop for iterating through the elements and swap accordingly
   for(var j=0; j<n-1-i; j++){
     if(array[j] > array[j+1]){
         var temp = array[j];
          array[j] = array[j+1];
          array[j+1] =temp;
     }
   
   }

}

document.write("After BubbleSort the array elements are "+array);
</script>

</body>
</html>
