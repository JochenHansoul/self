package com.codesse.codetest.wordgame;

public class App {
    public static void main(String[] args) {
        WordGameImpl wordGame = new WordGameImpl("helloworldgoodbananapeerafsfoasifeafnsiorfsafeoaiaaaawweoifaoirwoooooeeeefffuuuuiiiii", new ValidWordsImpl());

        System.out.println(wordGame.submitWord("p1", "aa")); // 2
        System.out.println(wordGame.submitWord("p2", "world")); // 5
        System.out.println(wordGame.submitWord("p3", "good")); // 4
        System.out.println(wordGame.submitWord("p4", "banana")); // 6
        System.out.println(wordGame.submitWord("p5", "peer")); // 4 --> 0
        System.out.println(wordGame.submitWord("p6", "world")); // 5 --> 0


        int i = 0;
        System.out.println(wordGame.getPlayerNameAtPosition(i));
        System.out.println(wordGame.getWordEntryAtPosition(i));
        System.out.println(wordGame.getScoreAtPosition(i));
    }
}
