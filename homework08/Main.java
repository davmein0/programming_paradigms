public class Main {
    public static void main(String[] args) {
        // Initialize professor, courses, TAs. Assign TAs to their respective courses.
        Professor jSantos = new Professor("Joanna Santos", "1", "joannacss@nd.edu", "Computer Science and Engineering");
        Professor fKong = new Professor("Faxing Kong", "10", "fkong@nd.edu", "Computer Science and Engineering");
        
        Course progParadigms = new Course("Programming Paradigms", "CSE-30332", jSantos);
        Course OS = new Course("Operating Systems", "CSE-30341", fKong);

        TA bPable = new TA("Ben Pable", "2", "bpable@nd.edu");
        bPable.assignToCourse(progParadigms);
        TA pnJohnson = new TA("Prince Noah Johnson", "3", "pjohns24@nd.edu");
        pnJohnson.assignToCourse(progParadigms);
        TA rWallace = new TA("Robert Wallace", "4", "rwallac1@nd.edu");
        rWallace.assignToCourse(progParadigms);
        TA tsPereira = new TA("Tomas Sousa Pereira", "5", "tsousape@nd.edu");
        tsPereira.assignToCourse(progParadigms);
        
        TA jFan = new TA("Jialiang Fan", "6", "jfan5@nd.edu");
        jFan.assignToCourse(OS);

        // Initialize students
        Student studentA = new Student("Rumple Dumple", "67", "rdumple@nd.edu", "Computer Science");
        Student studentB = new Student("McDonalds Sprite", "68", "ssprite@nd.edu", "Computer Science");
        Student studentC = new Student("Doctor Fill", "69", "dfill2@nd.edu", "Finance and Computer Science");

        // Add students to paradigms
        progParadigms.addStudent(studentA);
        progParadigms.addStudent(studentB);
        progParadigms.addStudent(studentC);

        // Add students to OS
        OS.addStudent(studentA);
        OS.addStudent(studentB);
        OS.addStudent(studentC);

        // Print out professor, TA, and student information for testing
        System.out.println("Course: " + progParadigms.getName() + " (" + progParadigms.getCode() + ")");
        System.out.println("Instructor: " + jSantos);
        System.out.println("TAs:");
        for (TA ta : new TA[]{bPable, pnJohnson, rWallace, tsPereira, jFan}) {
            System.out.println(ta);
        }
        System.out.println("Enrolled students:");
        for (Student student : new Student[]{studentA, studentB, studentC}) {
            System.out.println(student);
        }

        System.out.println("\nCourse: " + progParadigms.getName() + " Students:\n");
        for (Student student : progParadigms.getEnrolledStudents()) {
            if (student != null) {
                System.out.println(student);
            }
        }
    }
}
