export interface Role {
  id: string;
  roleName: string;
}

interface User {
  id: string;
  userName: string;
  name: string;
  isAdmin: boolean;
  roles: Role[]|string[];
}

export default User;
