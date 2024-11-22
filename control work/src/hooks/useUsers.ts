import { useState } from "react";
import { getUsers, deleteUser } from "../apiMethods";
import { User } from "../types/user";

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [filter, setFilter] = useState<string>("");

  const fetchUsers = async () => {
    const fetchedUsers = await getUsers();
    setUsers(fetchedUsers);
  };

  const removeUser = async (id: number) => {
    await deleteUser(id);
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
  };

  const filteredUsers = users.filter((user) =>
    `${user.first_name} ${user.last_name}`.toLowerCase().includes(filter.toLowerCase())
  );

  return {
    users: filteredUsers,
    fetchUsers,
    removeUser,
    setFilter,
  };
};
