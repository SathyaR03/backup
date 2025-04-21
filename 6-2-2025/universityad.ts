enum UserRole {
    Student = 'Student',
    Professor = 'Professor',
    Admin = 'Admin',
    Staff = 'Staff'
}

function getUserRoleSpecification(role: UserRole): string {
    switch (role) {
        case UserRole.Student:
            return 'Students can view courses, register for classes, and view their grades.';
        case UserRole.Professor:
            return 'Professors can create and manage courses, grade students, and participate in university meetings.';
        case UserRole.Admin:
            return 'Admins have full access to manage users, courses, and system configurations.';
        case UserRole.Staff:
            return 'Staff members can manage administrative tasks, assist professors, and support students.';
        default:
            return 'Unknown role';
    }
}

console.log(getUserRoleSpecification(UserRole.Student));  
console.log(getUserRoleSpecification(UserRole.Professor));
console.log(getUserRoleSpecification(UserRole.Admin));  
console.log(getUserRoleSpecification(UserRole.Staff));  