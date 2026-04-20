public class Homework8{
    public static void main(String[] args) {
        // test cases
        Homework8 hw = new Homework8();
        String[] words = {"WoRdle", "wordle", "SUGAR", "", "PARADIGMS"};
        char[][] correctPositionArray = {
            { 'W', '*', 'R'},
            { 'W', '*' },
            { 'S', '*', 'G', '*', 'R'},
            { },
            { '*', '*', '*', '*', '*'},
        };
        for (int i = 0; i < words.length; i++) {
            System.out.println(hw.check(correctPositionArray[i], words[i]));
        }
    }
    public boolean check(char[] correctPositions, String word) {
        // Check every char in correctPositions
        for (int i = 0; i < correctPositions.length; i++) {
            // See if it is wildcard (*) or matches the corresponding char in word
            if (correctPositions[i] == '*' || correctPositions[i] == word.charAt(i)){
                continue;
            }
            // If not return False
            return false;
        }
        return true;
    }
}
