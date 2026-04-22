import java.util.Random;
import java.util.Scanner;

public class Game {
    private Board board;
    private boolean player;
    private int winner;
    private boolean won;
    private int turns;

    public Game() {
        this.board = new Board();
        // Start with player going first
        this.player = true;
        // -1: player 1 wins, 0: draw, 1: computer wins
        this.winner = 0; 
        this.turns = 0;
        this.won = false;
    }

    public int playerTurn(Scanner sc) {
        System.out.print("Mark your square (1-9): ");
        // Adjust for 0-based indexing
        int index = sc.nextInt() - 1;
        board.updateBoard(true, index);

        return index;
    }

    public int computerTurn() {
        Random r = new Random();
        int[] taken = board.getTaken();
        int index;

        System.out.println("Computer's move:");
        // Keep picking until we find an empty square.
        do {
            index = r.nextInt(9);
        } while (taken[index] != 0);

        board.updateBoard(false, index);

        return index;
    }

    public void endResults() {
        switch (winner) {
            case 0 -> System.out.println("Draw!");
            case -1 -> System.out.println("Player 1 has won!");
            case 1 -> System.out.println("Computer has won!");
            default -> {
            }
        }
    }

    public void checkWon(boolean player, int index) {
        char symbol;
        int row = index / 3;
        int col = index % 3;

        // Computer is 'O', player 1 is 'X'
        if (player == false) {
            symbol = 'O';
        }
        else {
            symbol = 'X';
        }

        // Check for horizontal 3-in-a-row
        if (board.getSquare(row, 0) == board.getSquare(row, 1) && 
            board.getSquare(row, 1) == board.getSquare(row, 2) && 
            board.getSquare(row, 0) != ' ') {
                won = true;
        }
        // Check for vertical 3-in-a-row
        else if (board.getSquare(0, col) == board.getSquare(1, col) && 
                board.getSquare(1, col) == board.getSquare(2, col) && 
                board.getSquare(0, col) == symbol) {
                    won = true;
        }
        // Check diagonals
        else if (board.getSquare(0, 0) == board.getSquare(1, 1) &&
                board.getSquare(1, 1) == board.getSquare(2, 2) && 
                board.getSquare(0, 0) == symbol) {
                    won = true;
        }
        else if (board.getSquare(0, 2) == board.getSquare(1, 1) &&
                board.getSquare(1, 1) == board.getSquare(2, 0) && 
                board.getSquare(0, 2) == symbol) {
                    won = true;
        }

        // update winner if needed
        if (won) {
            if (player) {
                winner = -1;
            }
            else {
                winner = 1;
            }
        }
    }

    // switch player increment turns
    public void nextTurn() {
        player = !player;
        turns++;
    }

    // Getter methods to access attributes
    public int getTurns() {
        return turns;
    }

    public int getWinner() {
        return winner;
    }

    public boolean getFinished() {
        return won;
    }

    public boolean getPlayer() {
        return player;
    }

    public Board getBoard() {
        return board;
    }
}