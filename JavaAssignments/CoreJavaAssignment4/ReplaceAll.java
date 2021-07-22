package com.CoreJavaAssignment4;

import java.util.ArrayList;
import java.util.List;

public class ReplaceAll {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		List<String> list=new ArrayList<>();
		list.add("Srivatsa");
		list.add("Aashritha");
		list.add("Aashuuu");
		list.add("Faave");
          list.replaceAll(o->o.toUpperCase());
          System.out.println(list);
	}



}
