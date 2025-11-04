"use client";

import { ThemeProvider } from "@/providers/ThemeProvider";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
    >
      <div className="min-h-screen">
        <div className="mx-auto px-4 md:px-6">
          <h1 className="text-4xl font-bold text-center py-16">Welcome to Webild Components</h1>
          <p className="text-lg text-center text-gray-600">This is a basic landing page template.</p>
        </div>
      </div>
    </ThemeProvider>
  );
}