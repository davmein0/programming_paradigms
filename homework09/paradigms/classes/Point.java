package paradigms.classes;

import java.util.Objects;
public class Point {
    private float x;
    private float y;

    public Point(float x, float y){
        this.x = x;
        this.y = y;
    }

    @Override
    public boolean equals(Object other){
        // reflexive
        if(other == this)
            return true;
        // non-null
        if(other == null)
            return false;
        // don't even bother! they have different types
        if(getClass() != other.getClass())
            return false;
        Point point = (Point) other; // why do we need this type cast?
        double p1_distance = Math.sqrt(this.x * this.x + this.y * this.y);
        double p2_distance = Math.sqrt(point.x * point.x + point.y * point.y);
        return p1_distance == p2_distance;
    }

    @Override
    public int hashCode(){
        return Objects.hash(this.x, this.y);
    }

    @Override
    public String toString() {
        return "[" + x + ", " + y + "]";
    }

}
