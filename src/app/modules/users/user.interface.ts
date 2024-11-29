export type TUser = {
  id: String;
  password: String;
  needPasswordChange: Boolean;
  role: "admin" | "student" | "faculty";
  status: "in-progress" | "blocked";
  isDelete: boolean;
};

