import React, { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";
import { GetStaticProps, NextPage } from "next";

// Types for static users from getStaticProps
type StaticUser = {
  id: number;
  name: string;
};

// Props for the page component
interface UsersPageProps {
  staticUsers: StaticUser[];
}

const UsersPage: NextPage<UsersPageProps> = ({ staticUsers }) => {
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
        <h1 className="text-3xl font-bold mb-6">Users (Client-side Fetch)</h1>

        {loading && <p>Loading users...</p>}
        {error && <p className="text-red-600">Error: {error}</p>}

        {!loading && !error && (
          <div className="space-y-4">
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

        <h2 className="text-2xl font-semibold mt-12 mb-4">Static Users (from getStaticProps)</h2>
        <ul className="list-disc pl-5">
          {staticUsers.map((user) => (
            <li key={user.id} className="text-lg mb-2">
              {user.name}
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps<UsersPageProps> = async () => {
  // You can replace this with actual API fetch if you want static prefetching
  const staticUsers: StaticUser[] = [
    { id: 1, name: "Alice Johnson" },
    { id: 2, name: "Bob Smith" },
    { id: 3, name: "Charlie Davis" },
  ];

  return {
    props: {
      staticUsers,
    },
    // Optional: ISR, rebuild page every 60 seconds
    revalidate: 60,
  };
};

export default UsersPage;
