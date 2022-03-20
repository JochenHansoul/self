package com.codesse.codetest.wordgame;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.HashSet;
import java.util.Set;
import java.util.Vector;

/**
 * Copyright (C) 2021 Codesse. All rights reserved.
 * ••••••••••••••••••••••••••••••••••••••••••••••••
 */
public class ValidWordsImpl implements ValidWords {

	Vector v = new Vector();
    /*
    Review:
    All nice observations !
    Could be better if you could also mentioned that:
        The operation only read, so thread safe is not needed
        in.close() should be in finally block / use try-with-resources
        When exception is caught, the application should handle it maybe stop the execution instead of swallowing it and just print stacktrace
    */
	// Change v by a more descriptive variable name
	// maybe better be a set and final
	// example: final Set<String> VALID_WORDS = new HashSet<>();

	// create a constructor with a file path so that other locations for the wordlist can be used
	// the already created constructor can then pass it's default path on to the constructor
	// with the Path argument to be used there (constructor chaining)

	public ValidWordsImpl() {
		try {
			// it's better to use a Path object (Path path = Paths.get()) because it's an abstraction of a filepath
			// and works cross platforms (directory separator can differ)
			InputStreamReader reader = new InputStreamReader(this.getClass().getResourceAsStream("/wordlist.txt"), "utf-8");
			BufferedReader in = new BufferedReader(reader);
			// Use Files.newBufferReader (is shorter):
			//BufferedReader reader1 = Files.newBufferedReader(Paths.get("/wordlist.txt"));
			String inputLine;
			while ((inputLine = in.readLine()) != null) {
				v.add(inputLine);
			}
			in.close();
		} catch (Exception e) { // use IOException instead of Exception (more specific error catching)
			e.printStackTrace();
		}
		// a stream can be used to replace most of this codeblock
		// Files.newBufferedReader(PATH).lines().collect(Collectors.toSet())
	}

	@Override
	public boolean contains(String word) {
		return v.contains(word);
	}

	@Override
	public int size() {
		return v.size();
	}
}
