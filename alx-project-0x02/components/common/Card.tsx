import React from "react";

// Define the CardProps interface
export interface CardProps {
  title: string;
  content: string;
  description?: string;
  imageUrl?: string;
}

const Card: React.FC<CardProps> = ({ title, content, description, imageUrl }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden p-6 mb-4">
      {imageUrl && (
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover mb-4" />
      )}
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-700">{content}</p>
      {description && <p className="text-gray-700">{description}</p>}
    </div>
  );
};

export default Card;
