package com.codesse.codetest.wordgame;

public class App {
    public static void main(String[] args) {
        WordGameImpl wordGame = new WordGameImpl("boonhelloworldgoodbananapeerafsfoasifeafnsiorfsafeoaiaaaawweoifaoirwoooooeeeefffuuuuiiiii", new ValidWordsImpl());

        System.out.println(wordGame.submitWord("p1", "aa")); // 2
        System.out.println(wordGame.submitWord("p2", "world")); // 5
        System.out.println(wordGame.submitWord("p5", "peer")); // 4
        System.out.println(wordGame.submitWord("p3", "boon")); // 4
        System.out.println(wordGame.submitWord("p3", "good")); // 4
        System.out.println(wordGame.submitWord("p4", "banana")); // 6
        System.out.println(wordGame.submitWord("p6", "world")); // 0

        // The words with the same length get added based on alphabetical position and not on when added.
        for (int i = 0; i < 6; i++) {
            System.out.println(wordGame.getWordEntryAtPosition(i));
        }
    }
}
