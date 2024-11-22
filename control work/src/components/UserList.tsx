import React from "react";
import { User } from "../types/user";
import UserCard from "./UserCard";

interface UserListProps {
  users: User[];
  onDelete: (id: number) => void;
}

const UserList: React.FC<UserListProps> = ({ users, onDelete }) => {
  return (
    <div className="user-list">
      {users.map((user) => (
        <UserCard key={user.id} user={user} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default UserList;
