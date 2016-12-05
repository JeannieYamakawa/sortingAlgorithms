// var arr = [23, 42, 4, 16, 8, 15]

function selectionMethod( arr ) {
    // First time iteration....arr[0]
    // 1. Loop through entire array.
    // 2. Set arr[0] to be the current minimum. compare each following index to the current minimum.
    // 4. If any number is smaller than current minimum, that number becomes the new current minimum.
    // 4. Repeat step 4 to compare each index with the new current minimum until the length of the array
    // 5. Swap the lowest number the first time through the array with whatever number is at index 0
            // second time iteration....arr[1]
            // 1. Set arr[1] to be current minimum, since arr[0] is already the smallest. Compare each following index to current minimum.
            // 2. If number is smaller than current minimum, it becomes new current minimum.
            // 3. Repeat step 2 until the end of length of array.
            // 4. Swap the lowest number the second time through the array with whatever number is at arr[1]

    // ETC




    let arrLength = arr.length;
    let temp;
    let currentMinIndex;

    // Loop through entire array.
    for ( let i = 0; i < arrLength - 1; i++ ) {
        //set currentMinIndex to this iteration number
        currentMinIndex = i;

        //compare each following index to the current minimum to see if anything is smaller
        for ( let j = i + 1; j < arrLength; j++ ) {
            //if it's smaller, it becomes the new currentMinIndex
            if ( arr[ j ] < arr[ currentMinIndex ] ) {
                currentMinIndex = j;
            }
        }

        //if the currentMinIndex isn't still i, swap positions
        if ( i != currentMinIndex ) {
            temp = arr[ i ];
            arr[ i ] = arr[ currentMinIndex ];
            arr[ currentMinIndex ] = temp;
        }
    }

    return arr;









    let arrLength = arr.length,
        temp,
        currentMin;

    // Loop through entire array.
    for ( let i = 0; i < arrLength - 1; i++ ) {
        console.log( arr, 'array' );
        //set currentMin to this iteration number
        currentMin = i;
        console.log( currentMin, ' is currentMin index' );

        //compare each following index to the current minimum to see if anything is smaller
        for ( let j = i + 1; j < arrLength; j++ ) {
            console.log( 'i is', i, ', j is', j );
            //if it's smaller, it becomes the new currentMin
            if ( arr[ j ] < arr[ currentMin ] ) {
                console.log( 'array[', j, '] is less than array[', i, ']' );
                currentMin = j;
                console.log( 'so ', currentMin, 'is new currentMin index' );
            }
        }

        //if the currentMin isn't still i, swap positions
        if ( i != currentMin ) {
            temp = arr[ i ];
            console.log( temp, ' is arr[i] stored in temp' );
            arr[ i ] = arr[ currentMin ];
            console.log( arr[ i ], ' is arr[i] after swap' );
            arr[ currentMin ] = temp;
            console.log( arr[ currentMin ], ' is now where i was' );
        }
        console.log( '************** new iteration ***************' );
    }

    return arr;



}









module.exports = selectionMethod;
