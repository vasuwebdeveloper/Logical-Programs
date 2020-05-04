<!DOCTYPE html>
<html>
<body>

<h2>Quick Sort</h2>

<script>

//function used for partitioning the elements 
//Ex: 1234(5)6789>>>>> 5 is the partioning element.

function partition (array,low,high){
//Selected Pivot element
var pivotElement = array[low];
var i = low;
var j = high;

do{
do{
//increase i still It finds the greater element && array size 
i++;
} while(array[i] <= pivotElement);

//increase j still It finds the smaller or equal element

do{
j--;
}while(array[j]> pivotElement);

if(i<j){
//swapping two elements
var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

}while(i<j);
//positioning the pivot element here
var temp = array[low];
array[low] = array[j];
array[j] = temp;

//returns the partition index
return j;

}


function quickSort(array,low,high){
var j;
//check the elements atleast the array has two elements because quick sort cannot be applied less than two elements

if(low<high){
    //Call to partition function to sort the element and find the partitioning position. 'j' is the index of the partition element
	j = partition(array,low,high);
	quickSort(array,low,j);
	quickSort(array,j+1,high);
}
}

function initialize(){
//Declaration of variables 
var array = [11,13,7,12,16,9,24,5,10,3];
var low = 0; //low index
var high = array.length; //high index
quickSort(array,low,high);
document.write(array);
}

//call to initialize function to start the process
initialize();

</script>

</body>
</html>

