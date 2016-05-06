/* Tests for Tic-Tac Javascript */


describe("Tic Tac JS", function () {

    it("should detect a full board as full", function () {
        board = ["X", "X", "X", "X", "X", "X", "X", "X", "X"];
        expect(isBoardFull()).toBeTruthy();
    });

    // STEP 2: Uncomment this out.

    it("should detect a non-full board as not full", function () {
       board = ["X", "X", null, "X", "X", "X", "X", "X", "X"];
       // Add a matcher for this test.
       expect(isBoardFull()).toBeFalsy();
    });
    
    it("should convert x, y to cell #", function () {
       var cellNumber1 = xyToCell(1, 1);
       var cellNumber2 = xyToCell(0, 0);
       // Add 2 matchers for this test, one for cellNumber1 and one for cellNumber2.
       expect(cellNumber1).toBe(4);
       expect(cellNumber2).toBe(0);
    });
    
    it("should make computer moves", function () {
       board = ["X", null, null, null, null, null, null, null, null];
       computerMove();
       var newBoardPiece = board[1];
       // Add a matcher for this test.
       expect(newBoardPiece).toBe('O');
    });

    // END STEP 2

    // Add the following tests, or think of some of your own.
    // it should update the board correctly based on the board
    it("should update board visual", function() {
        board = [null, "X", null, null, null, null, null, null, null];
        updateBoard();
        var newCellPosition = xyToCell(0, 0) + 1;
        expect(newCellPosition).toBe(1);
    });

//     function updateBoard() {
//     // Update visual game board from board data structure

//     for (var i = 0; i < 9; i++) {
//         var cell = board[i] || "";
//         $("#cell-" + i).text(cell);
//     }
// }

    // it should not fill in board slots that are already occupied
    // it should be able to determine a winner
    // it should not determine a winner when there is a tie
    // it should be able to deduce the correct cell number
    // it should be able to declare a tie and end the game

});
