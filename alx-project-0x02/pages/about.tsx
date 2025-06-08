import React from "react";
import Head from "next/head";
import Header from "../components/layout/Header";
import Button from "../components/common/Button";

const AboutPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>About Page</title>
      </Head>

      <Header />

      <main className="flex flex-col min-h-screen items-center justify-center bg-yellow-100 p-8">
        <h1 className="text-4xl font-bold text-yellow-700 mb-6">About This Project 📖</h1>

        <div className="space-x-4">
          <Button label="Small Button" size="small" shape="rounded-sm" />
          <Button label="Medium Button" size="medium" shape="rounded-md" />
          <Button label="Large Button" size="large" shape="rounded-full" />
        </div>
      </main>
    </>
  );
};

export default AboutPage;
