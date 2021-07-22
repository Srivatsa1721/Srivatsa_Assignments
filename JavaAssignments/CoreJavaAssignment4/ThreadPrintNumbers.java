package com.CoreJavaAssignment4;

import java.util.Arrays;

public class ThreadPrintNumbers {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		new Thread(()-> Arrays.asList(20,21,22,23,24,25,26,27,28,29).forEach(System.out::println)).start();

	}

}
