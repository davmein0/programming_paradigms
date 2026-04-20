public class Course {
    String name;
    String code;
    Student []enrolledStudents;
    int count; // number of enrolled students
    Professor instructor;

    public Course(String name, String code, Professor instructor) {
        // Initialize attributes and check for null values. If any found, throw an IllegalArgumentException
        if (name == null) {
            throw new IllegalArgumentException("Error: no name provided");
        }
        this.name = name;
        if (code == null) {
            throw new IllegalArgumentException("Error: no code provided");
        }
        this.code = code;
        if (instructor == null)
        {
            throw new IllegalArgumentException("Error: no instructor provided");
        }
        this.instructor = instructor;
        this.enrolledStudents = new Student[50];
        this.count = 0;
    }

    public void addStudent(Student student) {
        // Maximum of 50 students
        if (count == 50) {
            return;
        }
        // Check if student already added. If so, don't re-add, but return
        for (int i = 0; i < count; i++)
        {
            if (enrolledStudents[i].equals(student)) {
                System.out.println("Student already added to course");
                return;
            }
        }
        enrolledStudents[count] = student;
        count++;
    }

    public void removeStudent(Student student) {
        int removeIndex = -1;
        // Mark the index of the student to be removed
        for (int i = 0; i < count; i++) {
            if (enrolledStudents[i].equals(student)) {
                removeIndex = i;
                break;
            }
        }
        // Shift students to fill in the gap
        if (removeIndex != -1) {
            for (int i = removeIndex; i < count - 1; i++) {
                enrolledStudents[i] = enrolledStudents[i + 1];
            }
            enrolledStudents[count - 1] = null;
            count--;
        }
    }

    // Getter methods
    public String getName() {
        return name;
    }

    public String getCode() {
        return code;
    }

    public Professor getInstructor() {
        return instructor;
    }

    public Student[] getEnrolledStudents() {
        return enrolledStudents;
    }

    @Override 
    public String toString() {
        return getCode();
    }
}