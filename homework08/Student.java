public class Student extends UniversityMember{
    private String major;
    public Student(String name, String id, String email, String major) {
        super(name, id, email);
        // Make sure major is not null. If it is, throw an IllegalArgumentException
        if (major == null) {
            throw new IllegalArgumentException("Error: no major provided");
        }
        this.major = major;
    }
    public String getMajor() {
        return major;
    }

    @Override
    public String getRole() {
        return "Student";
    }

    @Override
    public String toString() {
        return getName() + " (" + getEmail() + ") - Major: " + getMajor() + "\n";
    }
}