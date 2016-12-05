// var arr = [23, 42, 4, 16, 8, 15]

var sorted ={
    //break array in two. sort each side, then merge back together. do this recursively.
    mergeSort: function ( arr ) {
        if(arr.length < 2){
            return
        }
        else{
            //find the middle index in the original arr
            let middle = Math.floor(arr.length/2);
            //split the arr into two arrays, based on the middle index.
            let leftArr = arr.slice(0, middle);
            let rightArr = arr.slice(middle, arr.length);

            this.mergeSort(leftArr);
            this.mergeSort(rightArr);
            return mergeTogether(leftArr, rightArr, arr);

        //start of sub function recursion
        function mergeTogether(left,right,orig){
            let i = 0; //increments the left array
            let j = 0; //increments the right array
            let k = 0; //increments the orig array
        //for the length of the sub arrays:
            while(i < left.length && j < right.length){
                    // compare the same index number of the left array to the same index number of the right array. whichever is smaller overwrites the index in orig array.
                    if(left[i] <= right[j]){
                        orig[k] = leftArr[i];
                        i++;
                    }
                    else{
                        orig[k] = right[j];
                        j++;
                    }
                    k++;
            }
            //if one sub array exhausts its indexes before the other, the remaining values in the remaining array go onto the end of the orig array.
            while(i < left.length){
                orig[k] = left[i];
                i++;
                k++;
            }
            while(j < right.length){
                orig[k] = right[j];
                j++;
                k++;
                }
                return orig
            }//end of mergeTogether function
        }
    }
}



module.exports = sorted;
