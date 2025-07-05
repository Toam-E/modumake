import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  
  const navItems = [
    { path: "/", label: "Home" },
    { path: "/simulation", label: "Simulation" },
    { path: "/configure", label: "Configure" },
  ];

  return (
    <header className="sticky top-0 z-50 p-6 border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3">
          <h1 className="text-2xl font-bold glow-text">
            Modumake
          </h1>
          <span className="text-sm text-muted-foreground">Modular Robotics</span>
        </Link>
        
        <nav className="flex items-center gap-6">
          {navItems.map((item) => (
            <Link key={item.path} to={item.path}>
              <Button 
                variant={location.pathname === item.path ? "default" : "ghost"}
                className={location.pathname === item.path ? "tech-button" : ""}
              >
                {item.label}
              </Button>
            </Link>
          ))}
          
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
};

export default Navigation;