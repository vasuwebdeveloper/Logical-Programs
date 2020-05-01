<!DOCTYPE html>
<html>
<body>
<h2>Insertion Sort</h2>
<script>

//Declaring an array
var array = [5,4,10,1,6,2]
var n = array.length;
//index starting from 1 (first index 0 is already sorted by itself)
for(var i = 1; i < n; i++){
// storing the current index value in the array to compare with all the elements
var temp = array[i]; 
var j = i-1;
//j should iterate until index 0 and checking whether prev element is greater than temp
while(j>=0 && array[j] > temp){
//storing j element in the primary element
array[j+1] = array[j];
//decrease the j value to compare with other elements
j--;
}
//If the array element is not greater than temp it should remain in it's position
array[j+1] = temp;
}

document.write("After Insertion sorting "+ array)
</script>

</body>
</html>


