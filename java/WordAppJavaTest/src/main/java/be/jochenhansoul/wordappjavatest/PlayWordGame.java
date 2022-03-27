package be.jochenhansoul.wordappjavatest;

import java.util.*;

public class PlayWordGame implements Runnable {
    public final String NAME;
    private final WordGame WORD_GAME;
    private final String[] PLAYERS;
    private final Scanner SCANNER;
    private final Map<String, String> SCORES = new HashMap<>();

    private int currentPlayer = 0;

    public PlayWordGame(String name, WordGame wordGame, String[] players, Scanner scanner) {
        this.NAME = name;
        this.WORD_GAME = wordGame;
        this.SCANNER = scanner;
        this.PLAYERS = players;
        //List[] scores = this.scores = Arrays.stream(players).map(player -> new ArrayList<String>()).toArray(List[]::new);
    }

    @Override
    public void run() {
        playWordGame();
    }

    public String getCurrentPlayer() {
        return this.PLAYERS[this.currentPlayer];
    }

    public void getScores() {
        Set<String> words = this.SCORES.keySet();
        words.stream()
                .sorted((word1, word2) -> word2.length() - word1.length())
                .forEach(word -> System.out.println(this.SCORES.get(word) + ": " + word));
    }

    private void playWordGame() {
        System.out.println("(" + this.NAME + ") " + this.getCurrentPlayer() + ": enter word");
        String word = this.SCANNER.nextLine();
        while (!word.equals("exit")) {
            this.guessWord(word);
            System.out.println("enter word (" + this.NAME + "):");
            word = this.SCANNER.nextLine();
        }
    }

    private void guessWord(String word) {
        System.out.println(this.PLAYERS[this.currentPlayer]);
        this.makeGuess(word);
        this.nextPlayer();
    }

    private void makeGuess(String word) {
        if (this.WORD_GAME.validateWord(word) && !this.SCORES.containsKey(word)) {
            this.SCORES.put(word, this.getCurrentPlayer());
            System.out.println("valid");
            this.getScores();
        } else {
            System.out.println("invalid");
        }
    }

    private void nextPlayer() {
        if (currentPlayer == this.PLAYERS.length - 1) {
            this.currentPlayer = 0;
        } else {
            this.currentPlayer++;
        }
    }
}
