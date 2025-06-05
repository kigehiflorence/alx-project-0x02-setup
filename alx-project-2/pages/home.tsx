import React, { useState } from "react";
import Head from "next/head";
import Header from "../components/layout/Header";
import Card from "../components/common/Card";
import PostModal from "../components/common/PostModal";

const HomePage: React.FC = () => {
  const [posts, setPosts] = useState<{ title: string; content: string }[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddPost = (title: string, content: string) => {
    const newPost = { title, content };
    setPosts([newPost, ...posts]);
  };

  return (
    <div>
      <Header />
      <Head>
        <title>Home Page</title>
      </Head>
      <main className="flex flex-col min-h-screen items-center justify-center bg-green-100 p-8">
        <h1 className="text-4xl font-bold text-green-700 mb-6">
          Welcome to the Home Page 🏡
        </h1>

        <button
          onClick={() => setIsModalOpen(true)}
          className="mb-6 px-4 py-2 bg-blue-600 text-white rounded"
        >
          Add New Post
        </button>

        <PostModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onAddPost={handleAddPost}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
          {/* Default static cards */}
          <Card title="Card 1" content="This is the content of Card 1." />
          <Card title="Card 2" content="This is the content of Card 2." />
          <Card title="Card 3" content="This is the content of Card 3." />

          {/* Dynamically added posts */}
          {posts.map((post, index) => (
            <Card key={index} title={post.title} content={post.content} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default HomePage;
