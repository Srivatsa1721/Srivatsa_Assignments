package com.CoreJavaAssignment4;

import java.util.ArrayList;
import java.util.List;

public class RemoveIf {
	public static void main(String[] args) 
	{
		List<String> list=new ArrayList<>();
		list.add("hello");
		list.add("world");
		list.add("how");
		list.add("are");
		list.add("you");
		list.removeIf(i->i.length()%2!=0);
		System.out.println(list);
}

}
