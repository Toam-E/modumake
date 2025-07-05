import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Cpu, Zap, Package, Play, Settings, Database } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl font-bold mb-6">
            <span className="glow-text">Modumake</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Modular robotics platform for research and prototyping. 
            Design, simulate, and build custom robots with plug-and-play components.
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/configure">
              <Button className="tech-button text-lg px-8 py-4">
                Build Your Robot
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/simulation">
              <Button variant="outline" className="tech-button-secondary text-lg px-8 py-4">
                <Play className="w-5 h-5 mr-2" />
                See Simulation
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Background Effects */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
      </section>

      {/* About Section */}
      <section className="py-16 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 glow-text">About Modumake</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're building the future of modular robotics for researchers, developers, and educators. 
              Our platform combines hardware flexibility with intelligent simulation to accelerate innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="robot-card p-8 text-center">
              <Settings className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">For Researchers</h3>
              <p className="text-muted-foreground">
                Rapid prototyping with modular components. Test hypotheses faster with integrated simulation.
              </p>
            </Card>
            
            <Card className="robot-card p-8 text-center">
              <Cpu className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">For Developers</h3>
              <p className="text-muted-foreground">
                Build production robotics solutions with our API-first approach and real-time simulation.
              </p>
            </Card>
            
            <Card className="robot-card p-8 text-center">
              <Database className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">For Educators</h3>
              <p className="text-muted-foreground">
                Teach robotics concepts with hands-on learning and visual simulation feedback.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Patent Technology Section */}
      <section className="py-20 px-6 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 glow-text">Our Core Innovation</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Intelligent component detection and automatic simulation updates. 
              When you connect hardware, the software knows instantly.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Animation Demo */}
            <div className="relative">
              <Card className="robot-card p-8">
                <h3 className="text-2xl font-semibold mb-6 text-center">Auto-Detection Flow</h3>
                
                {/* Step 1: Gear connects to shaft */}
                <div className="flex items-center justify-center mb-8 animate-fade-in">
                  <div className="w-16 h-16 border-4 border-primary rounded-full flex items-center justify-center bg-primary/10">
                    <Settings className="w-8 h-8 text-primary animate-spin" style={{ animationDuration: '3s' }} />
                  </div>
                  <ArrowRight className="w-8 h-8 text-accent mx-4 animate-pulse" />
                  <div className="w-4 h-16 bg-accent rounded animate-pulse" />
                </div>
                
                {/* Step 2: Detection */}
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 rounded-full border border-accent animate-pulse-glow">
                    <Zap className="w-5 h-5 text-accent" />
                    <span className="text-accent font-medium">Components Detected</span>
                  </div>
                </div>
                
                {/* Step 3: Simulation updates */}
                <div className="flex items-center justify-center mb-8">
                  <div className="w-20 h-12 bg-secondary/20 border border-secondary rounded flex items-center justify-center animate-float">
                    <span className="text-secondary text-sm font-medium">Simulation</span>
                  </div>
                  <ArrowRight className="w-6 h-6 text-secondary mx-3 animate-pulse" />
                  <div className="w-20 h-12 bg-secondary/30 border-2 border-secondary rounded flex items-center justify-center animate-pulse-glow">
                    <span className="text-secondary text-sm font-bold">Updated!</span>
                  </div>
                </div>
              </Card>
            </div>
            
            {/* Chip Technology */}
            <div>
              <Card className="robot-card p-8 mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Cpu className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Smart Component Chips</h3>
                    <p className="text-muted-foreground mb-4">
                      Every component contains an intelligent chip that automatically identifies itself 
                      to the system, enabling true plug-and-play functionality.
                    </p>
                    <div className="flex gap-2">
                      <span className="sensor-chip">Auto-ID</span>
                      <span className="sensor-chip">Real-time Sync</span>
                      <span className="sensor-chip">No Configuration</span>
                    </div>
                  </div>
                </div>
              </Card>
              
              <Card className="robot-card p-8">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-8 h-8 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Instant Adaptation</h3>
                    <p className="text-muted-foreground mb-4">
                      The moment you add or remove a component, both the physical robot and 
                      digital simulation update automatically. No manual reconfiguration needed.
                    </p>
                    <div className="flex gap-2">
                      <span className="sensor-chip">Live Updates</span>
                      <span className="sensor-chip">Bi-directional Sync</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-16 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 glow-text">Complete Robotics Solution</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              More than just hardware. You get a complete ecosystem for robotics development.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="robot-card p-8 text-center">
              <Package className="w-16 h-16 text-primary mx-auto mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Physical Robot Kit</h3>
              <p className="text-muted-foreground mb-6">
                Modular hardware components with intelligent auto-detection chips. 
                Premium build quality for research and production use.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Base Robot Platform</span>
                  <span className="text-accent">✓</span>
                </div>
                <div className="flex justify-between">
                  <span>Selected Sensors</span>
                  <span className="text-accent">✓</span>
                </div>
                <div className="flex justify-between">
                  <span>Smart Component Chips</span>
                  <span className="text-accent">✓</span>
                </div>
              </div>
            </Card>
            
            <Card className="robot-card p-8 text-center">
              <Settings className="w-16 h-16 text-accent mx-auto mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Simulation Environment</h3>
              <p className="text-muted-foreground mb-6">
                Real-time physics simulation that mirrors your physical robot exactly. 
                Test algorithms safely before deployment.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Physics Engine</span>
                  <span className="text-accent">✓</span>
                </div>
                <div className="flex justify-between">
                  <span>Sensor Simulation</span>
                  <span className="text-accent">✓</span>
                </div>
                <div className="flex justify-between">
                  <span>Environment Builder</span>
                  <span className="text-accent">✓</span>
                </div>
              </div>
            </Card>
            
            <Card className="robot-card p-8 text-center">
              <Database className="w-16 h-16 text-secondary mx-auto mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Developer API</h3>
              <p className="text-muted-foreground mb-6">
                RESTful API and SDKs for seamless integration. Control both physical 
                and simulated robots with the same code.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>REST API</span>
                  <span className="text-accent">✓</span>
                </div>
                <div className="flex justify-between">
                  <span>Python SDK</span>
                  <span className="text-accent">✓</span>
                </div>
                <div className="flex justify-between">
                  <span>Real-time WebSocket</span>
                  <span className="text-accent">✓</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 glow-text">Ready to Build?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Start with our robot configurator to build your custom kit, 
            or explore our simulation environment to see what's possible.
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/configure">
              <Button className="tech-button text-lg px-8 py-4">
                Configure Your Robot
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/simulation">
              <Button variant="outline" className="tech-button-secondary text-lg px-8 py-4">
                <Play className="w-5 h-5 mr-2" />
                View Simulation Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;