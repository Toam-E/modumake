import { RobotType } from "./ModumakeDemo";
import robotArmImg from "@/assets/robot-arm.jpg";
import quadrupedImg from "@/assets/quadruped-robot.jpg";
import wheeledImg from "@/assets/wheeled-robot.jpg";

interface RobotSelectionProps {
  selectedRobot: RobotType;
  onSelectRobot: (robot: RobotType) => void;
}

const robots = [
  {
    id: "arm" as const,
    name: "Robot Arm",
    description: "6-DOF manipulator perfect for precision tasks, pick-and-place operations, and research applications",
    image: robotArmImg,
    features: ["6 Degrees of Freedom", "Precision Gripper", "Force Feedback", "Modular Joints"]
  },
  {
    id: "quadruped" as const,
    name: "Quadruped Robot",
    description: "Four-legged mobile platform ideal for terrain navigation, gait research, and autonomous exploration",
    image: quadrupedImg,
    features: ["Dynamic Walking", "Terrain Adaptation", "IMU Stabilization", "Modular Legs"]
  },
  {
    id: "wheeled" as const,
    name: "Wheeled Robot",
    description: "Mobile platform optimized for navigation research, SLAM applications, and autonomous vehicle studies",
    image: wheeledImg,
    features: ["Omnidirectional Movement", "SLAM Ready", "Sensor Platform", "Modular Chassis"]
  }
];

export const RobotSelection = ({ selectedRobot, onSelectRobot }: RobotSelectionProps) => {
  return (
    <div className="py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">
            Choose Your <span className="glow-text">Robot Platform</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Select the perfect modular robot base for your research and prototyping needs. 
            Each platform offers unique capabilities and customization options.
          </p>
        </div>

        {/* Robot Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {robots.map((robot, index) => (
            <div
              key={robot.id}
              className={`robot-card cursor-pointer transform transition-all duration-500 ${
                selectedRobot === robot.id ? 'scale-105 border-primary' : 'hover:scale-102'
              }`}
              onClick={() => onSelectRobot(robot.id)}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Robot Image */}
              <div className="relative mb-6 overflow-hidden rounded-lg bg-muted/20">
                <img
                  src={robot.image}
                  alt={robot.name}
                  className={`w-full h-64 object-contain robot-model ${
                    selectedRobot === robot.id ? 'animate-float' : ''
                  }`}
                />
                {selectedRobot === robot.id && (
                  <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>

              {/* Robot Info */}
              <div>
                <h3 className="text-2xl font-bold mb-3">{robot.name}</h3>
                <p className="text-muted-foreground mb-4">{robot.description}</p>
                
                {/* Features */}
                <div className="space-y-2">
                  {robot.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Selection Indicator */}
              <div className="mt-6 pt-4 border-t border-border">
                <button
                  className={`w-full py-2 px-4 rounded-lg font-medium transition-all duration-300 ${
                    selectedRobot === robot.id 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-muted hover:bg-muted/80'
                  }`}
                >
                  {selectedRobot === robot.id ? 'Selected' : 'Select Platform'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Selection Info */}
        {selectedRobot && (
          <div className="text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 border border-primary/20 rounded-lg">
              <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-primary font-medium">
                {robots.find(r => r.id === selectedRobot)?.name} selected
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};