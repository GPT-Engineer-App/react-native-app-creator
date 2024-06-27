import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-3xl">Hello World</h1>
        <div className="space-x-4">
          <Link to="/register">
            <Button variant="outline">Register</Button>
          </Link>
          <Link to="/login">
            <Button variant="outline">Login</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;