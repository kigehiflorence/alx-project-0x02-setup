// CardProps
export interface CardProps {
  title: string;
  description?: string;   // unified with content, made optional for flexibility
  content?: string;        // optional — in case some cards use 'content'
  imageUrl?: string;
}

// PageRouteProps
export interface PageRouteProps {
  pageRoute: string;
}

// ButtonProps
export interface ButtonProps {
  label: string;                                      // use 'label' for button text
  size: "small" | "medium" | "large";                  // standardize size options
  shape: "rounded-sm" | "rounded-md" | "rounded-full"; // button shape
  backgroundColor?: "red" | "blue" | "orange" | "green"; // optional background color
  onClick?: () => void;
}

// LayoutProps
export interface LayoutProps {
  children: React.ReactNode;
}

// PostProps
export interface PostProps {
  id: number;
  title: string;
  body: string;
  userId: number;
}

// UserProps
export interface UserProps {
  id: number;
  name: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
}
export interface ButtonProps {
  buttonLabel: string;
  buttonSize?: string;
  buttonBackgroundColor?: 'red' | 'blue' | 'orange' | 'green';
  action?: () => void;
}
export interface Post {
  id: number;
  title: string;
  content: string;
  authorId: number;
  createdAt: string;
}
export interface ContentItem {
  content: string;
}

