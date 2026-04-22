import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Game game = new Game();
        Scanner sc = new Scanner(System.in);
        int index;

        while (game.getTurns() < 9) {
            if (game.getPlayer()) {
                index = game.playerTurn(sc);
            } else {
                index = game.computerTurn();
            }
            // Display board after each move,
            game.getBoard().displayBoard();
            
            // End game early if there is a winner
            game.checkWon(game.getPlayer(), index);
            if (game.getFinished()) {
                break;
            }
            // Switch player, increment turns for next turn
            game.nextTurn();
        }
        
        game.endResults();
    }
}