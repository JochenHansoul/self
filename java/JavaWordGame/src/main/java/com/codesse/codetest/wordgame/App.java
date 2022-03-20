package com.codesse.codetest.wordgame;

public class App {
    public static void main(String[] args) {
        WordGameImpl wordGame = new WordGameImpl("worldgoodafsfoasifeafnsiorfsafeoaiaaaawweoifaoirwoooooeeeefffuuuuiiiii", new ValidWordsImpl());

        System.out.println(wordGame.submitWord("p1", "aa"));
        System.out.println(wordGame.submitWord("p2", "world"));
        System.out.println(wordGame.submitWord("p3", "good"));

        int i = 2;
        System.out.println(wordGame.getPlayerNameAtPosition(i));
        System.out.println(wordGame.getWordEntryAtPosition(i));
        System.out.println(wordGame.getScoreAtPosition(i));
    }
}
