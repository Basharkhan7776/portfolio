
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { ClerkProvider } from "@clerk/clerk-react";

const clerkPublishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!clerkPublishableKey) {
  throw new Error("Missing Publishable Key")
}



// Ensure the DOM is fully loaded before trying to access elements
document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('root');

  if (!container) {
    console.error('Failed to find the root element');
    return;
  }

  try {
    const root = createRoot(container);
    root.render(
      <React.StrictMode>
        <ClerkProvider publishableKey={clerkPublishableKey}>
          <App />
        </ClerkProvider>
      </React.StrictMode>
    );
  } catch (error) {
    console.error('Error rendering the application:', error);
  }
});
