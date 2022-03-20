package com.codesse.codetest.wordgame;


import java.util.Map;
import java.util.Set;
import java.util.TreeMap;
import java.util.stream.Collectors;

/**
 * This is the shell implementation of the WordGame interface.
 * It is the class that you should focus on when developing your solution to the Challenge.
 */
public class WordGameImpl implements WordGame {
    private final Map<Character, Integer> WORD_MAP;
    private final ValidWords VALID_WORDS;
    private final TreeMap<String, String> SCORE = new TreeMap<>((word1, word2) -> word2.length() - word1.length());

    public WordGameImpl(String word, ValidWords VALID_WORDS) {
        this.WORD_MAP = this.getWordMap(word);
        this.VALID_WORDS = VALID_WORDS;
    }

    @Override
    public int submitWord(String playerName, String word) {
        if (validateWord(word)) {
            this.SCORE.put(word, playerName);
            return word.length();
        } else {
            return 0;
        }
    /*
    Review:
    This doesn’t consider the condition where players submitted different valid words that has the same score.
    The expected behavior is the new valid word should be added to the last of the words with the same score.
    For example: Currently the board has:

    banananana -> 10
    banana -> 6
    baloon -> 6
    box -> 3

    new player submitted baloon, baloon should be placed between 3. and 4.

    banananana -> 10
    banana -> 6
    doggie -> 6
    baloon -> 6
    box -> 3

    TreeSet will order it in lexicograph order which makes the implementation incorrect.
    ÜberGeek icon

    Additionally, this is not thread-safe. Could cause ConcurrentModificationException or unexpected race condition
    */
    }

    @Override
    public String getPlayerNameAtPosition(int position) {
        /*
        Review:
        This would cause index out of bound exception if the requested position > leaderboard size.
        For example, so far there’s only 3 submitted word, then invoke this method to get 7th position on the leaderboard.
        Same applies to other get*AtPosition methods.
        */
        return this.getEntryArray()[position].getValue();
    }

    @Override
    public String getWordEntryAtPosition(int position) {
        return this.getEntryArray()[position].getKey();
    }

    @Override
    public Integer getScoreAtPosition(int position) {
        return this.getWordEntryAtPosition(position).length();
    }

    private Map.Entry<String, String>[] getEntryArray() {
        Set<Map.Entry<String, String> > entrySet = this.SCORE.entrySet();
        return entrySet.toArray(new Map.Entry[entrySet.size()]);
    }

    public boolean validateWord(String word) {
        final Map<Character, Integer> wordMap = getWordMap(word);
        return VALID_WORDS.contains(word)
                && !this.SCORE.containsKey(word) /* no duplicate words */
                && this.WORD_MAP.keySet().containsAll(wordMap.keySet()) /* contains no incorrect characters */
                && this.WORD_MAP.entrySet().stream()
                /*
                Review:
                This can be simplify to :
                wordMap.entrySet().allMatch((entry) -> wordMap.get(entry.getKey()) != null && wordMap.get(entry.getKey()) >= entry.getValue())
                For readability purpose.
                */
                .filter(map -> wordMap.get(map.getKey()) == null || map.getValue() >= wordMap.get(map.getKey()))
                .count() == this.WORD_MAP.size(); // contains no invalid amount of characters
    }

    private Map<Character, Integer> getWordMap(String word) {
        // Review: Nice refactoring this logic to separate function and reuse it !
        return word.chars()
                .distinct()
                .mapToObj(c -> (char) c)
                .collect(Collectors.toMap(c -> c, c -> word.length() - word.replaceAll(c.toString(), "").length()));
        /*
        Review:
        replaceAll time complexity is O(n) where n is the length of the word,
        and it is being called for all distinct character in the word string leading to overall complexity of getWordMap logic become O(n^2).
        This could be simplify and optimize become O(n) by changing the code into this:
        return word.chars()
               .mapToObj(c -> (char) c)
               .collect(Collectors.toMap(c -> c, c -> 1, (oldValue, newValue) -> oldValue + newValue));
        */
    }
}
