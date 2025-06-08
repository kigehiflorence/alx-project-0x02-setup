import React, { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import { PostProps } from "@/interfaces";
import { GetStaticProps } from "next";

type StaticPost = {
  id: number;
  title: string;
};

type PostsPageProps = {
  staticPosts: StaticPost[];
};

const PostsPage: React.FC<PostsPageProps> = ({ staticPosts }) => {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!res.ok) {
          throw new Error("Failed to fetch posts");
        }
        const data: PostProps[] = await res.json();
        setPosts(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <Header />
      <main className="p-8">
        <h1 className="text-3xl font-bold mb-6">Posts</h1>

        {loading && <p>Loading posts...</p>}
        {error && <p className="text-red-600">Error: {error}</p>}

        {!loading && !error && (
          <div className="space-y-4">
            {posts.map((post) => (
              <PostCard
                key={post.id}
                id={post.id}
                title={post.title}
                body={post.body}
                userId={post.userId}
              />
            ))}
          </div>
        )}

        <h2 className="text-2xl font-semibold mt-8 mb-4">Static Posts (from getStaticProps)</h2>
        <ul className="list-disc pl-5">
          {staticPosts.map((post) => (
            <li key={post.id} className="text-lg mb-2">{post.title}</li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const staticPosts: StaticPost[] = [
    { id: 1, title: "Hello World" },
    { id: 2, title: "Next.js is Awesome" },
    { id: 3, title: "Static Site Generation Rocks" },
  ];

  return {
    props: {
      staticPosts,
    },
  };
};

export default PostsPage;
