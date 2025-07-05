import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Play, Pause, RotateCcw, Settings, Zap, Eye, Cpu } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Simulation = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-6">
              <span className="glow-text">Simulation Environment</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience your robot in a photorealistic physics simulation before building. 
              Test algorithms, validate designs, and iterate faster.
            </p>
          </div>

          {/* Main Simulation Viewer */}
          <Card className="robot-card p-8 mb-12">
            <div className="relative bg-gradient-to-br from-muted/50 to-muted/20 rounded-lg aspect-video mb-6 overflow-hidden">
              {/* Simulated Video Content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  {/* Robot Animation */}
                  <div className="relative mb-6">
                    <div className="w-32 h-20 bg-primary/20 rounded-lg mx-auto mb-4 border-2 border-primary/50 animate-float">
                      <div className="flex justify-center items-center h-full">
                        <div className="w-6 h-6 bg-primary rounded-full animate-pulse" />
                        <div className="w-8 h-2 bg-accent mx-2 rounded animate-pulse" style={{ animationDelay: '0.5s' }} />
                        <div className="w-6 h-6 bg-secondary rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                      </div>
                    </div>
                    
                    {/* Sensor Indicators */}
                    <div className="flex justify-center gap-4">
                      <div className="w-3 h-3 bg-accent rounded-full animate-pulse" />
                      <div className="w-3 h-3 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.3s' }} />
                      <div className="w-3 h-3 bg-secondary rounded-full animate-pulse" style={{ animationDelay: '0.6s' }} />
                    </div>
                  </div>
                  
                  <p className="text-lg font-medium text-foreground mb-2">Quadruped Robot Simulation</p>
                  <p className="text-muted-foreground">Real-time physics • Sensor feedback • Environment interaction</p>
                </div>
              </div>
              
              {/* Video Overlay Controls */}
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="bg-background/80 backdrop-blur-sm hover:bg-background/90"
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="bg-background/80 backdrop-blur-sm hover:bg-background/90"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </Button>
                </div>
                
                <div className="text-sm bg-background/80 backdrop-blur-sm px-3 py-1 rounded">
                  Simulation Time: 00:45
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-muted-foreground mb-4">
                Watch how your configured robot behaves in various environments. 
                This simulation runs the exact same code as your physical robot.
              </p>
              <Button className="tech-button">
                <Play className="w-4 h-4 mr-2" />
                Start Interactive Demo
              </Button>
            </div>
          </Card>
        </div>
        
        {/* Background Effects */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
      </section>

      {/* Features Grid */}
      <section className="py-16 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 glow-text">Simulation Features</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our simulation environment provides everything you need to develop and test robotics algorithms.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="robot-card p-6">
              <Cpu className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Real-time Physics</h3>
              <p className="text-muted-foreground">
                High-fidelity physics simulation with collision detection, friction, and dynamic forces 
                that match real-world behavior.
              </p>
            </Card>
            
            <Card className="robot-card p-6">
              <Eye className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-3">Sensor Simulation</h3>
              <p className="text-muted-foreground">
                Accurate simulation of cameras, LiDAR, IMU, and other sensors with realistic noise 
                and environmental effects.
              </p>
            </Card>
            
            <Card className="robot-card p-6">
              <Settings className="w-12 h-12 text-secondary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Environment Builder</h3>
              <p className="text-muted-foreground">
                Create custom environments with obstacles, terrain, lighting, and interactive objects 
                for comprehensive testing.
              </p>
            </Card>
            
            <Card className="robot-card p-6">
              <Zap className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Live Sync</h3>
              <p className="text-muted-foreground">
                Seamlessly switch between simulation and physical robot. Changes to your robot 
                configuration update both instantly.
              </p>
            </Card>
            
            <Card className="robot-card p-6">
              <Play className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-3">Algorithm Testing</h3>
              <p className="text-muted-foreground">
                Test navigation, manipulation, and learning algorithms safely before deploying 
                to physical hardware.
              </p>
            </Card>
            
            <Card className="robot-card p-6">
              <RotateCcw className="w-12 h-12 text-secondary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Scenario Recording</h3>
              <p className="text-muted-foreground">
                Record and replay scenarios for debugging, validation, and sharing results 
                with your team.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Simulation Tiers */}
      <section className="py-16 px-6 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 glow-text">Simulation Packages</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the simulation tier that matches your project needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="robot-card p-8 text-center">
              <div className="w-16 h-16 bg-muted/50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Play className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Basic</h3>
              <p className="text-3xl font-bold text-primary mb-4">$299</p>
              <p className="text-muted-foreground mb-6">
                Essential simulation features for learning and prototyping.
              </p>
              <ul className="text-sm space-y-2 text-left mb-8">
                <li>✓ Basic physics simulation</li>
                <li>✓ Standard environments</li>
                <li>✓ Basic sensor models</li>
                <li>✓ Python API access</li>
              </ul>
            </Card>
            
            <Card className="robot-card p-8 text-center border-2 border-primary">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Settings className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Advanced</h3>
              <p className="text-3xl font-bold text-primary mb-4">$599</p>
              <p className="text-muted-foreground mb-6">
                Professional-grade simulation for serious development.
              </p>
              <ul className="text-sm space-y-2 text-left mb-8">
                <li>✓ High-fidelity physics</li>
                <li>✓ Custom environments</li>
                <li>✓ Advanced sensor models</li>
                <li>✓ Real-time sync</li>
                <li>✓ Multi-robot simulation</li>
              </ul>
            </Card>
            
            <Card className="robot-card p-8 text-center">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Full Integration</h3>
              <p className="text-3xl font-bold text-primary mb-4">$999</p>
              <p className="text-muted-foreground mb-6">
                Complete enterprise solution with unlimited access.
              </p>
              <ul className="text-sm space-y-2 text-left mb-8">
                <li>✓ Everything in Advanced</li>
                <li>✓ Cloud compute access</li>
                <li>✓ Custom integrations</li>
                <li>✓ Priority support</li>
                <li>✓ Team collaboration</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 glow-text">Ready to Simulate?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Start building your robot configuration and see it come to life in our simulation environment.
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/configure">
              <Button className="tech-button text-lg px-8 py-4">
                Configure Robot & Simulation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Simulation;