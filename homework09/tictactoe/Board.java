public class Board {
    private char[][] board;
    private int[] taken;

    public Board() {
        this.board = new char[3][3];
        // Initialize the board to all blanks
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                board[i][j] = ' ';
            }
        }
        taken = new int[9];
    }

    public void updateBoard(boolean player, int index) {
        // Translate 1D index to 2D row and col
        int row = index / 3;
        int col = index % 3;
        if (player) {
            board[row][col] = 'X';
        }
        else {
            board[row][col] = 'O';
        }
        // Mark that square as taken
        taken[index] = 1;
    }

    public void displayBoard() {
        // horizontal grid lines, part of the board
        String separator = "---+---+---";
        // Print 3 rows, 2 separators between them
        for (int i = 0; i < 3; i++) {
            System.out.println(" " + board[i][0] + " | " + board[i][1] + " | " + board[i][2] + " ");
            if (i < 2) {
                System.out.println(separator);
            }
        }
    }

    // Get the value of a square of the board ('X', 'O', ' ') given its col and row
    public char getSquare(int row, int col) {
        return board[row][col];
    }

    public int[] getTaken() {
        return taken;
    }
}