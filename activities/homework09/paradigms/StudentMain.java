package paradigms;
import paradigms.classes.Student;
import paradigms.classes.TA;

public class StudentMain{
	public static void main(String[] args){
		String name = "John Doe";
		String [] grades = new String[]{"A", "A-", "B+", "C"};
		Student student = new Student(name,grades);
		System.out.println(student.computeGPA()); // null?
		TA ta = new TA("Robert Wallace", new String[]{"A","A-"}, "CSE-30332");
		System.out.println(ta.computeGPA());
		// System.out.println(student.getGrades());
	}
}