interface PersonDetails {
    firstName: string;
    lastName: string;
    getFullName(): string;
  }
  
  class Role {
    roleName: string;
  
    constructor(roleName: string) {
      this.roleName = roleName;
    }
  
    getRole(): string {
      return this.roleName;
    }
  }
  
  class User extends Role implements PersonDetails {
    firstName: string;
    lastName: string;
  
    constructor(firstName: string, lastName: string, roleName: string) {
      super(roleName);
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    getFullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
  }
  
  const user = new User("Sathya", "R", "Developer");
  console.log(user.getFullName());
  console.log(user.getRole());