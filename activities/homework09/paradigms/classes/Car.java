package paradigms.classes;

import java.util.Objects;

public class Car {
    private String licensePlate;
    private String make;
    private String model;
    private int year;
    private String color;

    public Car(String licensePlate, String make, String model, int year, String color) {
        this.licensePlate = licensePlate;
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || !(o instanceof Car)) return false;
        Car car = (Car) o;
        return year == car.year &&
//                Objects.equals(this.licensePlate, car.licensePlate) &&
                Objects.equals(this.make, car.make) &&
                Objects.equals(this.model, car.model) &&
                Objects.equals(this.color, car.color);
    }

    @Override
    public int hashCode() {
        return Objects.hash(this.year, this.make, this.color, this.model);
    }
}