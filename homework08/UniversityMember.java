public abstract class UniversityMember {
    // Initialize attributes for all university members
    private String name;
    private String id;
    private String email;

    public UniversityMember(String name, String id, String email) {
        // Check for null values in constructor parameters. If found, throw an IllegalArgumentException
        if (name == null) {
            throw new IllegalArgumentException("Error: name not provided");
        }
        if (id == null) {
            throw new IllegalArgumentException("Error: id not provided");
        }
        if (email == null) {
            throw new IllegalArgumentException("Error: email not provided");
        }
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // Abstract method (will return role: student, professor, or TA)
    public abstract String getRole();
    
    // Getters for name, id, and email
    public String getName() {
        return name;
    } 

    public String getId() {
        return id;
    }

    public String getEmail() {
        return email;
    }
}