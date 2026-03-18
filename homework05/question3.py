from abc import ABC, abstractmethod

# Models any member at the university
# Parent class of TA, Student, and Professor
class UniversityMember(ABC):
    num_members = 0

    # All members must have name, member_id, and email
    def __init__(self, name, member_id, email):
        self.name = name
        self.member_id = member_id
        self.email = email
        UniversityMember.num_members += 1
        
    # TA, Student, and Professor must have this method
    @abstractmethod
    def get_role(self):
        pass

# Has attributes of University member + major
class Student(UniversityMember):
    def __init__(self, name, member_id, email, major):
        super().__init__(name, member_id, email)
        self.major = major

    def get_role(self):
        return "Student"
    
    def __str__(self):
        return (f'{self.name} ({self.email}) - Major: {self.major}')

class Professor(UniversityMember):
    def __init__(self, name, member_id, email, department):
        super().__init__(name, member_id, email)
        self.department = department

    def get_role(self):
        return "Professor"
    
    def __str__(self):
        lastname = self.name.split()[-1]
        return(f'Prof. {lastname} ({self.email})')
    
class Course():
    def __init__(self, name, code, enrolled_students=None, instructor=None):
        self.name = name
        self.code = code
        self.enrolled_students = enrolled_students if enrolled_students else []
        self.instructor = instructor

    def add_student(self, student):
        # Check if student is already enrolled to avoid duplicates
        if student in self.enrolled_students:
            print(f'{student} already enrolled')
        else:
            self.enrolled_students.append(student)
    
    def remove_student(self, student):
        if student in self.enrolled_students:
            self.enrolled_students.remove(student)
        # else:
        #     print(f'{student} was not in this course')

    def remove_instructor(self, instructor):
        # Don't remove instructor if course's instructor doesn't match parameter
        if self.instructor == instructor:
            self.instructor = None
        # else:
        #     print(f'{instructor} was not the instructor of the course')

    def add_instructor(self, instructor):
        self.instructor = instructor

class TA(UniversityMember):
    def __init__(self, name, member_id, email, courses_assisting=None):
        super().__init__(name, member_id, email)
        self.courses_assisting = courses_assisting if courses_assisting else []

    def assign_to_course(self, course):
        # Check if TA is already assigned to the course to avoid duplicates
        if course not in self.courses_assisting:
            self.courses_assisting.append(course)
        else:
            print(f'already assigned to {course} ')

    def get_role(self):
        return "TA"

    def __str__(self):
        p_info = f'{self.name} ({self.email}). TA for Courses: '
        # List course codes of courses TA is assisting. 
        # If not assisting any courses, print 'None'
        if len(self.courses_assisting) == 0:
            course_info = 'None'
        else:
            course_info = ', '.join([course.code for course in self.courses_assisting]) + '.'
        return (p_info + course_info)
        
         