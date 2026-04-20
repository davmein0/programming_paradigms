public class TA extends UniversityMember {
    private Course []coursesAssisting;
    private int count; // number of courses assisting

    public TA(String name, String id, String email) {
        super(name, id, email);
        this.coursesAssisting = new Course[2];
        count = 0;
    }

    public void assignToCourse(Course course) {
        // Make sure a maximum of 2 courses can be assigned to a TA.
        if (count == 0) {
            coursesAssisting[0] = course;
            count++;
        }
        else if (count == 1) {
            // Don't assign the same course twice.
            if (course.equals(coursesAssisting[0])){
                System.out.println("Course already added");
                return;
            }
            coursesAssisting[1] = course;
            count++;
        }
    }
    
    // Getter methods
    public Course[] getCoursesAssisting() {
        return coursesAssisting;
    }

    @Override
    public String getRole() {
        return "TA";
    }

    @Override
    public String toString() {
        String taString; 
        taString = getName() + " (" + getEmail() + "). TA for courses: ";
        // List all courses the TA is assisting. 
        if (count > 0) {
            taString += getCoursesAssisting()[0].getCode();
            if (count == 2) {
                taString += ", " + getCoursesAssisting()[1].getCode();
            }
        }
        taString += ".\n";
        return taString;

    }
}