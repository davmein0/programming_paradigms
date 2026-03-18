import random

# Unclear whether to put a good letter in the bad letters set.
# For instance, if 3 Ds are guessed (like in daddy), 
# but the target word only has 2 Ds (like caddy)
# It is not mentioned in the instructions, 
# although it is simulated in the real game 
# Currently version doesn't add the duplicate letter to bad letters set.
        
# Simulates the game Wordle
class Wordle:
    def __init__(self):
        self.wordlist = [] # Stores possible 5-letter words
        self.word = ""
        self.guess = "" 
        self.bad_letters = set() # Letters not in target word
        self.letter_frequency = {} # letter frequency of target word
        self.max_guess_freq = {} # maximum good letter frequency of all combined guesses
        self.good_letters = [] # Letters in target word
        self.letters_matched = [""] * 5 # Records letters in correct place
        self.attempts = 0
        self.won = False
    
    def pick_word(self):
        # Read and store all possible 5-letter words. 
        with open("words.txt", 'r') as words:
            self.wordlist = [word.upper() for word in words.read().split()]

        if not self.wordlist:
            print("Error reading words.txt")

        # Choose the random word to guess and store it
        self.word = random.choice(self.wordlist)

        # Store the target word in file "answer.txt"
        with open("answer.txt", "w") as answer:
            answer.write(self.word)

        # Record the letter counts in the target word
        for letter in self.word:
            if letter in self.letter_frequency:
                self.letter_frequency[letter] += 1
            else:
                self.letter_frequency[letter] = 1

    # Ask user to guess the word. Store the guess
    def query(self):
        valid_guess = False
        # Keep asking user to input a 5-letter word until input is valid.
        while True:
            self.guess = input("Enter a 5-letter word: ")
            self.guess = self.guess.upper().strip()

            # Check if the word matches the target. If so, they win.
            if self.guess == self.word:
                self.won = True
                break

            if self.valid_input(self.guess):
                break

            print("Ain't a 5-letter word, try again.")


    # Check if user guess is a valid 5 letter word
    def valid_input(self, guess):
        if len(guess) != 5:
            return False
        
        if guess in self.wordlist:
            return True
                
        return False
    
    # Update wordle progress, increment attempts
    def update(self):
        # keep track of the frequency of guessed letters that are in target word.
        current_guess_freq = {}
        
        for i in range(5):
            letter = self.guess[i]
            # If guessed letter is in target word
            if letter in self.letter_frequency:
                # Increment in letter in the current guess frequency dict
                current_guess_freq[letter] = current_guess_freq.get(letter, 0) + 1

                # If current guess has a greater count of the good letter than maximum count from previous guesses
                # and if the duplicate letter is also in target word
                if (self.letter_frequency[letter] > self.max_guess_freq.get(letter, 0) and
                    current_guess_freq[letter] > self.max_guess_freq.get(letter, 0)):
                    # Increment corresponding total guess counter, append good letter to list
                    self.good_letters.append(letter)
                    self.max_guess_freq[letter] = current_guess_freq[letter]
                    
                # Check if it is right placed, if so, add to letters_matched
                if letter == self.word[i]: 
                    self.letters_matched[i] = letter
                

            # Add to bad letters if guessed letter is not in target word
            else:
                self.bad_letters.add(self.guess[i])

        self.attempts += 1

    # Print the good letters, bad letters, and letters in the correct position
    # Letters from past guesses are saved.
    def print_attempt(self):
        print(f"Good letters = {self.good_letters}")
        print(f"Bad letters = {list(self.bad_letters)}")
        print(f"Correct letters = {self.letters_matched}\n")
    
if __name__ == "__main__":
    # Create a wordle instance.
    wordle = Wordle()
    # Choose and store the target word
    wordle.pick_word()

    # Give the user 6 attempts to guess the word
    while wordle.attempts < 6:
        wordle.query()
        wordle.update()
        if wordle.won == True:
            print(f"Congratulations, you correctly identified the word after {wordle.attempts} attempts")
            break
        else:
            wordle.print_attempt()
            
    # If the word is not guessed correctly in 6 tries, game over.
    # Tell the player the correct word.
    if not wordle.won:
        print(f"The answer is {wordle.word}. You did not guess it correctly within 6 tries.") 
            