public class Professor extends UniversityMember {
    private String department;
    public Professor (String name, String id, String email, String department) {
        super(name, id, email);
        // Make sure department is not null. If it is, throw an IllegalArgumentException   
        if (department == null)
        {
            throw new IllegalArgumentException("Error: no department provided");
        }
        this.department = department;
    }

    public String getDepartment() {
        return department;
    }

    @Override
    public String getRole() {
        return "Professor";
    }

    @Override
    public String toString() {
        String lastName;
        // Parse lastname from full name. Assumes there's a space in the full name
        int indexOfSpace = getName().lastIndexOf(' ');
        if (indexOfSpace == -1 || indexOfSpace == getName().length() - 1)
        {
            lastName = getName();
        } 
        // If not a space, just assume last name is the full name. 
        else 
        {
            lastName = getName().substring(indexOfSpace + 1);
        }
        return "Prof. " + lastName + " (" + getEmail() + ")\n";
    }
}