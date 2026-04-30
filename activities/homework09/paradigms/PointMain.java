package paradigms;

import paradigms.classes.Point;

import java.util.Objects;

public class PointMain {

   public static void main(String[] args) {
      Point p1 = new Point(1,2);
      Point p2 = new Point(1,2);
      Point p3 = new Point(3,4);

      System.out.println(p1 == p2); 	// false
      System.out.println(p1.equals(p2));// true
      System.out.println(p2.equals(p3));// false
      System.out.println(p3.equals(null));// false
      System.out.println(p1.hashCode());// returns an integer number (e.g: 994)
      System.out.println(p2.hashCode());

      // TODO: comparing two arrays containing objects

   }
}
