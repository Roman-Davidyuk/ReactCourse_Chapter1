import React from "react";
import { User } from "../types/user";

interface UserCardProps {
  user: User;
  onDelete: (id: number) => void;
}

const UserCard: React.FC<UserCardProps> = ({ user, onDelete }) => {
  return (
    <div className="user-card">
      <img src={user.avatar} alt={`${user.first_name} avatar`} />
      <div>
        <h3>
          {user.first_name} {user.last_name}
        </h3>
        <p>{user.email}</p>
      </div>
      <button onClick={() => onDelete(user.id)}>Delete</button>
    </div>
  );
};

export default UserCard;
