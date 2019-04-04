interface User {
  id: number;
  userName: string;
  name: string;
  isAdmin: boolean;
  roles: Role[];
}

interface Role {
  id: number;
  roleName: string;
}

export default User;
