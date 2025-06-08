import React, { useState } from "react";
import Head from "next/head";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import Header from "@/components/layout/Header";

const HomePage: React.FC = () => {
  const [posts, setPosts] = useState<{ title: string; content: string }[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddPost = (title: string, content: string) => {
    const newPost = { title, content };
    setPosts([newPost, ...posts]);
  };

  return (
    <div>
      <Head>
        <title>Home Page</title>
      </Head>

      <Header />

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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
          {/* Static Cards with images */}
          <Card
            title="First Card"
            description="This is a sample description for the first card."
            imageUrl="https://source.unsplash.com/random/400x300"
          />
          <Card
            title="Second Card"
            description="Another description for the second card."
            imageUrl="https://source.unsplash.com/random/401x301"
          />
          <Card
            title="Third Card"
            description="Yet another card description."
            imageUrl="https://source.unsplash.com/random/402x302"
          />

          {/* Static text-only cards */}
          <Card title="Card 4" content="This is the content of Card 4." />
          <Card title="Card 5" content="This is the content of Card 5." />
          <Card title="Card 6" content="This is the content of Card 6." />

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
