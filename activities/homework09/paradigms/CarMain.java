package paradigms;

import paradigms.classes.Car;

public class CarMain {
    public static void main(String[] args) {
        Car c1 = new Car(null, "Toyota", "Camry", 2020, "Blue");
        Car c2 = new Car("ABC123", "Toyota", "Camry", 2020, "Blue");
        System.out.println(c1.equals(c2));
//        Car c3 = new Car("UND123", "Audi", "A3", 2020, "Black");
//        Car c4 = new Car("XYZ999", "Audi", "A3", 2020, "Black");
//        Car c5 = new Car("XYZ999", "Audi", "A3", 2020, "Black");

//        System.out.println(c2.equals(c3));
//        System.out.println(c3.equals(c4));
//        System.out.println(c3.hashCode() == c4.hashCode());


    }
}