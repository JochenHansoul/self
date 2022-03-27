package be.jochenhansoul.wordappjavatest;

import java.util.*;
import java.util.stream.Collectors;

public class WordGame {
    private final Set<String> VALID_WORDS;
    private final Map<Character, Integer> COMPUTER_WORD_MAP;

    public WordGame(Set<String> path, String computerWord) {
        this.VALID_WORDS = path;
        this.COMPUTER_WORD_MAP = getWordMap(computerWord);
    }

    public boolean validateWord(String word) {
        final Map<Character, Integer> wordMap = getWordMap(word);
        return VALID_WORDS.contains(word)
                && this.COMPUTER_WORD_MAP.keySet().containsAll(wordMap.keySet()) /* contains no incorrect characters */
                && this.COMPUTER_WORD_MAP.entrySet().stream()
                .filter(map -> wordMap.get(map.getKey()) == null || map.getValue() >= wordMap.get(map.getKey()))
                .count() == this.COMPUTER_WORD_MAP.size(); // contains no invalid amount of characters
    }

    /*private boolean validWithComputerWord(String word) {
        // third try (functional) but no if
        final Map<Character, Integer> wordMap = getWordMap(word);
        return !this.COMPUTER_WORD_MAP.keySet().containsAll(wordMap.keySet())
                && this.COMPUTER_WORD_MAP.entrySet().stream()
                .filter(map -> wordMap.get(map.getKey()) == null || map.getValue() >= wordMap.get(map.getKey()))
                .count() == this.COMPUTER_WORD_MAP.size();

        // second try (functional)
        if (!this.COMPUTER_WORD_MAP.keySet().containsAll(wordMap.keySet())) {
            // validating on illegal characters
            return false;
        } else {
            // validating on too many characters?
            return this.COMPUTER_WORD_MAP.entrySet().stream()
                    .filter(map -> wordMap.get(map.getKey()) == null || map.getValue() >= wordMap.get(map.getKey()))
                    .count() == this.COMPUTER_WORD_MAP.size();

        // first try (non functional)
        boolean valid = true;
        for (char c : wordMap.keySet()) {
            if (wordMap.get(c) > this.COMPUTER_WORD_MAP.get(c)) {
                valid = false; // invalid amount of letters found
            }
        }
        return valid;
    }*/

    private Map<Character, Integer> getWordMap(String word) {
        return word.chars()
                .distinct()
                .mapToObj(c -> (char) c)
                .collect(Collectors.toMap(c -> c, c -> word.length() - word.replaceAll(c.toString(), "").length()));
    }
}
