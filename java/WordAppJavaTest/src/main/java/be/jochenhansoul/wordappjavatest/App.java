package be.jochenhansoul.wordappjavatest;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Scanner;
import java.util.Set;
import java.util.stream.Collectors;

public class App {
    private static final Path PATH = Paths.get("src/main/resources/valid_words.txt");

    public static void main(String[] args) throws IOException {
        //final Scanner INPUT = new Scanner(System.in);
        Set<String> VALID_WORDS = Files.newBufferedReader(PATH).lines().collect(Collectors.toSet());

        Thread thread1 = new Thread(new PlayWordGame(
                "game1",
                new WordGame(VALID_WORDS, "hello"),
                new String[]{"speler1", "speler2"},
                new Scanner(System.in)));
        Thread thread2 = new Thread(new PlayWordGame(
                "game2",
                new WordGame(VALID_WORDS, "world"),
                new String[]{"speler1", "speler2"},
                new Scanner(System.in)));

        thread1.start();
        //thread2.start();
    }
}
