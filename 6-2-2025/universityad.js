// Enum to represent different user roles in the university administrative system
var UserRole;
(function (UserRole) {
    UserRole["Student"] = "Student";
    UserRole["Professor"] = "Professor";
    UserRole["Admin"] = "Admin";
    UserRole["Staff"] = "Staff";
})(UserRole || (UserRole = {}));
// Function to return a specification based on the user role
function getUserRoleSpecification(role) {
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
// Example usage:
console.log(getUserRoleSpecification(UserRole.Student)); // Specification for Student
console.log(getUserRoleSpecification(UserRole.Professor)); // Specification for Professor
console.log(getUserRoleSpecification(UserRole.Admin)); // Specification for Admin
console.log(getUserRoleSpecification(UserRole.Staff)); // Specification for Staff
