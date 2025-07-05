import { SimulationTier } from "./ModumakeDemo";
import { Cpu, Zap, Rocket } from "lucide-react";

interface SimulationSelectionProps {
  selectedSimulation: SimulationTier;
  onSelectSimulation: (simulation: SimulationTier) => void;
}

const simulationTiers = [
  {
    id: "basic" as const,
    name: "Basic Simulation",
    description: "Essential physics simulation with basic sensor modeling",
    icon: Cpu,
    price: "$49/month",
    features: [
      "Physics Engine",
      "Basic Sensor Models", 
      "Joint Control",
      "Collision Detection",
      "Standard Environments"
    ],
    highlight: false
  },
  {
    id: "advanced" as const,
    name: "Advanced Simulation",
    description: "Enhanced simulation with realistic sensor models and custom environments",
    icon: Zap,
    price: "$149/month",
    features: [
      "Advanced Physics",
      "Realistic Sensor Models",
      "Custom Environments",
      "Multi-Robot Support",
      "Real-time Visualization",
      "ROS Integration",
      "Cloud Computing"
    ],
    highlight: true
  },
  {
    id: "full" as const,
    name: "Full Integration",
    description: "Complete simulation suite with AI training, cloud computing, and enterprise support",
    icon: Rocket,
    price: "$299/month",
    features: [
      "Everything in Advanced",
      "AI Training Platform",
      "Digital Twin Technology",
      "High-Performance Computing",
      "Real-world Testing",
      "Enterprise Support",
      "Custom Development",
      "Priority Updates"
    ],
    highlight: false
  }
];

export const SimulationSelection = ({ selectedSimulation, onSelectSimulation }: SimulationSelectionProps) => {
  return (
    <div className="py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">
            Choose Your <span className="glow-text">Simulation Package</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Select the simulation tier that matches your research requirements. 
            From basic prototyping to advanced AI training and enterprise deployment.
          </p>
        </div>

        {/* Simulation Tiers */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {simulationTiers.map((tier, index) => (
            <div
              key={tier.id}
              className={`robot-card cursor-pointer transform transition-all duration-500 relative ${
                selectedSimulation === tier.id ? 'scale-105 border-primary' : 'hover:scale-102'
              } ${tier.highlight ? 'border-secondary' : ''}`}
              onClick={() => onSelectSimulation(tier.id)}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Popular Badge */}
              {tier.highlight && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-secondary text-secondary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Icon */}
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto ${
                selectedSimulation === tier.id 
                  ? 'bg-primary text-primary-foreground' 
                  : tier.highlight 
                    ? 'bg-secondary text-secondary-foreground'
                    : 'bg-muted'
              }`}>
                <tier.icon className="w-8 h-8" />
              </div>

              {/* Tier Info */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                <p className="text-muted-foreground mb-4">{tier.description}</p>
                <div className="text-3xl font-bold text-primary mb-4">{tier.price}</div>
              </div>

              {/* Features */}
              <div className="space-y-3 mb-6">
                {tier.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-sm">
                    <div className={`w-2 h-2 rounded-full mr-3 ${
                      selectedSimulation === tier.id ? 'bg-primary' : 'bg-accent'
                    }`} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* Selection Button */}
              <button
                className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-300 ${
                  selectedSimulation === tier.id 
                    ? 'bg-primary text-primary-foreground' 
                    : tier.highlight
                      ? 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                      : 'bg-muted hover:bg-muted/80'
                }`}
              >
                {selectedSimulation === tier.id ? 'Selected' : 'Select Package'}
              </button>

              {/* Selection Indicator */}
              {selectedSimulation === tier.id && (
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-4 right-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="robot-card">
            <h3 className="text-xl font-bold mb-4">Simulation Features</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                <span>Real-time physics simulation with GPU acceleration</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                <span>Comprehensive sensor modeling library</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                <span>Integration with popular robotics frameworks</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                <span>Cloud-based high-performance computing</span>
              </div>
            </div>
          </div>

          <div className="robot-card">
            <h3 className="text-xl font-bold mb-4">Support & Documentation</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                <span>Comprehensive API documentation</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                <span>Video tutorials and sample projects</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                <span>Community forum and expert support</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                <span>Regular webinars and training sessions</span>
              </div>
            </div>
          </div>
        </div>

        {/* Selection Confirmation */}
        {selectedSimulation && (
          <div className="text-center mt-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 border border-primary/20 rounded-lg">
              <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-primary font-medium">
                {simulationTiers.find(t => t.id === selectedSimulation)?.name} selected
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};