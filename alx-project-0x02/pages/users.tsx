import React, { useEffect, useState } from "react";
import Header from "../components/layout/Header";
import UserCard from "../components/common/UserCard";
import { UserProps } from "../interfaces";

const UsersPage: React.FC = () => {
  const [users, setUsers] = useState<UserProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!res.ok) throw new Error("Failed to fetch users");
        const data: UserProps[] = await res.json();
        setUsers(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <Header />
      <main className="p-8">
        <h1 className="text-3xl font-bold mb-6">Users</h1>
        {loading && <p>Loading users...</p>}
        {error && <p className="text-red-600">Error: {error}</p>}
        {!loading && !error && (
          <div>
            {users.map((user) => (
              <UserCard
                key={user.id}
                id={user.id}
                name={user.name}
                email={user.email}
                address={user.address}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default UsersPage;
