package com.codesse.codetest.wordgame;

/**
 * Copyright (C) 2021 Codesse. All rights reserved.
 * ••••••••••••••••••••••••••••••••••••••••••••••••
 *
 * Implementations of this interface guarantee to be thread-safe.
 */
public interface ValidWords {

	/**
	 * @param word the word to check against the valid words collection
	 * @return true if the valid words collection contains the word
	 */
	// public can be removed since public abstract is the default
	public boolean contains(String word);

	/**
	 * The size of the valid words collection.
	 *
	 * @return the size of the collection
	 */
	// public can also be removed
	public int size();
}
