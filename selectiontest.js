var expect = require( 'chai' ).expect;
const selectionSort = require( './selectionsort' );


describe( 'sorting arrays', function() {
    describe( 'selection sort', function() {
        it( 'should sort the array', function() {
            var myArr = [ 23, 42, 4, 16, 8, 15, 1, 3, 1 ];
            expect( selectionSort( myArr ) ).to.deep.equal( [1, 1, 3, 4, 8, 15, 16, 23, 42 ] );
        } );
    } );
} );
