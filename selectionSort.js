<!DOCTYPE html>
<html>
<body>

<h2>Selection sort</h2>

<script>

{/* Declaring an array elements */}
var array = [9,3,1,4,2,7,5];  
var arraylen = array.length;  //get the length of an array

// outer for loop for the each element 
for(var i = 0; i<arraylen-1; i++){   
     var min = i; //maintain the minimum element in the array index
 //inner loop to iterate over all the elements and compare with the single element
 for(var j = i+1; j<arraylen; j++){  
      if(array[j] < array[min]){
           min = j;
      }
  }
  //Swap the elements
  var temp = array[i];
  array[i] = array[min];
  array[min]= temp;
  
}

document.write("After Selection Sort   "+array);

</script>

</body>
</html>

