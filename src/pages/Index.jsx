import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center space-y-4">
      <h1 className="text-4xl font-bold">Welcome to Your Bare-Bones App</h1>
      <p className="text-lg text-muted-foreground">
        This is a minimal web application that you can modify and build upon.
      </p>
      <Button variant="primary">Get Started</Button>
    </div>
  );
};

export default Index;