package com.CoreJavaAssignment3;

import java.security.KeyStore.Entry;
import java.util.*;
public class DateA3 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		HashMap<Date,String> hash=new HashMap<>();
		Date d1=new Date(17,01,2000);
		Date d2=new Date(21,06,2001);
		Date d3=new Date(20,01,1998);
		Date d4=new Date(20,03,2000);
		hash.put(d1,"sri");
		hash.put(d2,"aas");
		hash.put(d3,"hp");
		hash.put(d4,"cm");
		/*System.out.println(hash.values());
		System.out.println(hash.get(d1));*/
		Set<Map.Entry<Date,String>> entry=hash.entrySet();
		Iterator<Map.Entry<Date,String>> it=entry.iterator();
		while(it.hasNext())
		{
			Map.Entry<Date,String> ent=(Map.Entry<Date, String>) it.next();
			Date d=ent.getKey();
			String a=ent.getValue();
			
			System.out.println(d.day+"/"+d.month+"/"+d.getYear());
			System.out.println(a);
			
			
		}
		

	}
}