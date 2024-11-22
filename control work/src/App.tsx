import React, { useState } from "react";
import { useUsers } from "./hooks/useUsers";
import UserList from "./components/UserList";
import FilterBox from "./components/FilterBox";

const App: React.FC = () => {
  const { users, fetchUsers, removeUser } = useUsers();
  const [filter, setFilter] = useState<string>("");

  return (
    <div className="App">
      <h2>Users from API</h2>
      <button onClick={fetchUsers}>Fetch Users</button>
      <FilterBox filter={filter} onFilterChange={setFilter} />
      <UserList
        users={users.filter((user) =>
          `${user.first_name} ${user.last_name}`
            .toLowerCase()
            .includes(filter.toLowerCase())
        )}
        onDelete={removeUser}
      />
    </div>
  );
};

export default App;
