var expect = require( 'chai' ).expect;
const mSort = require( './mergesort' );


describe( 'sorting arrays', function() {
    describe( 'selection sort', function() {
        it( 'should sort the array', function() {
            var myArr = [ 23, 42, 4, 16, 8, 15, 1, 3, 1 ];
            var myArr2 = [5,4,7,19,22,21,22,31,22]
            expect( mSort.mergeSort( myArr ) ).to.deep.equal( [1, 1, 3, 4, 8, 15, 16, 23, 42 ] );
            expect(mSort.mergeSort(myArr2)).to.deep.equal([4,5,7,19,21,22,22,22,31])
        } );
    } );
} );
