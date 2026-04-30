package paradigms.classes;

public class Student{
	private String [] grades;
	private String name;

	// getter 
	public String getName(){
		return this.name;
	}
	public String[] getGrades(){
		return this.grades;
	}

	// constructor
	public Student(String name,String [] grades){
		this.grades = grades;
		this.name = name;
	}
	//
	public float computeGPA(){
		// for(int i=0; i<this.grades.length;i++){
		// 	String grade = this.grades[i];
		// }
		float sum = 0;
		for(String grade: this.grades){
			if(grade.equals("A")) sum += 4.0;
			else if(grade.equals("A-")) sum += 3.667;
			else if(grade.equals("B+")) sum += 3.333;
			else if(grade.equals("B")) sum += 3.0;
			else if(grade.equals("B-")) sum += 2.667;
			else if(grade.equals("C+")) sum += 2.333;
			else if(grade.equals("C")) sum += 2.;
			else if(grade.equals("C-")) sum += 1.667;
			else if(grade.equals("D")) sum += 1;
			// switch(grade){
			// case "A": sum+= 4; break;
			// case "A-": sum+= 3.667; break;
			// }
		}

		return sum / grades.length;
	}
}