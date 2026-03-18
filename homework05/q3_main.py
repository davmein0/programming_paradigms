from question3 import UniversityMember, Student, Professor, Course, TA
# Example data to test the university registrar system (question3.py)
if __name__ == '__main__':
    # Initialize Professor, course, and then TAs
    j_santos = Professor('Joanna Santos', 1, 'joannacss@nd.edu', 'Computer Science and Engineering')
    
    prog_paradigms = Course('Programming Paradigms', 'CSE-30332', instructor=j_santos)

    b_pable = TA('Ben Pable', 2, 'bpable@nd.edu')
    b_pable.assign_to_course(prog_paradigms)
    pn_johnson = TA('Prince Noah Johnson', 3, 'pjohns24@nd.edu', [prog_paradigms])
    r_wallace = TA('Robert Wallace', 4, 'rwallac1@nd.edu', [prog_paradigms])
    ts_pereira = TA('Tomas Sousa Pereira', 5, 'tsousape@nd.edu', [prog_paradigms])

    # Initialize students
    student_a = Student('Rumple Dumple', 67, 'rdumple@nd.edu', 'Computer Science')
    student_b = Student('McDonalds Sprite', 68, 'ssprite@nd.edu', 'Computer Science')
    student_c = Student('Doctor Fill', 69, 'dfill2@nd.edu', 'Finance and Computer Science')

    # Assign students to prog_paradigms
    prog_paradigms.add_student(student_a)
    prog_paradigms.add_student(student_b)
    prog_paradigms.add_student(student_c)


    # Test registration system
    print(prog_paradigms.enrolled_students)
    print('Displaying Student Information')
    for student in prog_paradigms.enrolled_students:
        print(student)
    
    print('\nDisplaying Professor Information')
    print(prog_paradigms.instructor)

    print('\nDisplaying TA Information')
    print('TAs:')
    for ta in [b_pable, pn_johnson, r_wallace, ts_pereira]:
        print(ta)


    print(j_santos, 'Role:', j_santos.get_role())

    print('Number of enrolled members at university:', UniversityMember.num_members)