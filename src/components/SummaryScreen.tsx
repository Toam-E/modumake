import { DemoState, RobotMode } from "./ModumakeDemo";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Download, Mail, Settings, Package } from "lucide-react";
import robotArmImg from "@/assets/robot-arm.png";
import quadrupedImg from "@/assets/quadruped-robot.png";
import wheeledImg from "@/assets/wheeled-robot.png";

interface SummaryScreenProps {
  state: DemoState;
}

const robotNames = {
  arm: "Robot Arm",
  quadruped: "Quadruped Robot", 
  wheeled: "Wheeled Robot"
};

const robotImages = {
  arm: robotArmImg,
  quadruped: quadrupedImg,
  wheeled: wheeledImg
};

const sensorNames = {
  camera: "RGB Camera",
  lidar: "LiDAR Sensor",
  imu: "IMU Module",
  ultrasonic: "Ultrasonic Array",
  force: "Force Sensor"
};

const sensorPrices = {
  camera: 299,
  lidar: 899,
  imu: 149,
  ultrasonic: 199,
  force: 349
};

const simulationNames = {
  basic: "Basic Simulation",
  advanced: "Advanced Simulation",
  full: "Full Integration"
};

const simulationPrices = {
  basic: 49,
  advanced: 149,
  full: 299
};

const robotBasePrices = {
  development: {
    arm: 2499,
    quadruped: 3999,
    wheeled: 1999
  },
  education: {
    arm: 1299,
    quadruped: 1999,
    wheeled: 899
  }
};

export const SummaryScreen = ({ state }: SummaryScreenProps) => {
  const robotPrice = robotBasePrices[state.robotMode][state.selectedRobot!];
  const sensorsPrice = state.selectedSensors.reduce((sum, sensor) => sum + sensorPrices[sensor], 0);
  const simulationPrice = simulationPrices[state.selectedSimulation!];
  const totalHardware = robotPrice + sensorsPrice;
  const monthlySimulation = simulationPrice;

  return (
    <div className="py-12 px-6 pb-24">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">
            Your <span className="glow-text">Modumake Kit</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Review your customized robotics platform and get ready to start building!
          </p>
        </div>

        {/* Visual Configuration Overview */}
        <div className="mb-12">
          <div className="robot-card text-center">
            <h3 className="text-2xl font-bold mb-6 flex items-center justify-center gap-2">
              <Package className="w-6 h-6" />
              Configuration Overview
            </h3>
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              {/* Robot Visual */}
              <div className="flex flex-col items-center">
                <img
                  src={robotImages[state.selectedRobot!]}
                  alt={robotNames[state.selectedRobot!]}
                  className="w-48 h-48 object-contain mb-4 animate-float"
                />
                <h4 className="text-lg font-semibold">{robotNames[state.selectedRobot!]}</h4>
                <span className="text-sm text-muted-foreground capitalize">
                  {state.robotMode} Mode
                </span>
              </div>
              
              {/* Configuration Details */}
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-muted/20 rounded-lg">
                  <span className="font-medium">Platform:</span>
                  <span className="text-primary font-semibold">{robotNames[state.selectedRobot!]}</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-muted/20 rounded-lg">
                  <span className="font-medium">Mode:</span>
                  <span className="text-accent font-semibold capitalize">{state.robotMode}</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-muted/20 rounded-lg">
                  <span className="font-medium">Sensors:</span>
                  <span className="text-secondary font-semibold">{state.selectedSensors.length}</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-muted/20 rounded-lg">
                  <span className="font-medium">Simulation:</span>
                  <span className="text-primary font-semibold">{simulationNames[state.selectedSimulation!]}</span>
                </div>
              </div>
              
              {/* Total Price Preview */}
              <div className="text-center">
                <div className="bg-primary/10 border border-primary/20 rounded-2xl p-6">
                  <div className="text-3xl font-bold text-primary mb-2">
                    ${totalHardware.toLocaleString()}
                  </div>
                  <div className="text-sm text-muted-foreground mb-2">Hardware Total</div>
                  <div className="text-lg font-semibold text-secondary">
                    +${monthlySimulation}/month
                  </div>
                  <div className="text-xs text-muted-foreground">Simulation Package</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Detailed Configuration */}
          <div className="space-y-6">
            {/* Robot Platform */}
            <div className="robot-card">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Settings className="w-6 h-6" />
                Platform Details
              </h3>
              <div className="flex items-center gap-6">
                <img
                  src={robotImages[state.selectedRobot!]}
                  alt={robotNames[state.selectedRobot!]}
                  className="w-24 h-24 object-contain"
                />
                <div className="flex-1">
                  <h4 className="text-xl font-semibold mb-2">{robotNames[state.selectedRobot!]}</h4>
                  <p className="text-muted-foreground mb-2">
                    {state.robotMode === "development" ? "Professional research platform" : "Educational learning platform"}
                  </p>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm px-2 py-1 bg-accent/20 text-accent rounded-full">
                      {state.robotMode.toUpperCase()}
                    </span>
                  </div>
                  <div className="text-2xl font-bold text-primary">${robotPrice.toLocaleString()}</div>
                </div>
              </div>
            </div>

            {/* Selected Sensors */}
            <div className="robot-card">
              <h3 className="text-2xl font-bold mb-6">Sensor Array ({state.selectedSensors.length} sensors)</h3>
              <div className="space-y-4">
                {state.selectedSensors.map(sensor => (
                  <div key={sensor} className="flex justify-between items-center py-2 border-b border-border last:border-b-0">
                    <span className="font-medium">{sensorNames[sensor]}</span>
                    <span className="text-primary font-semibold">${sensorPrices[sensor].toLocaleString()}</span>
                  </div>
                ))}
                {state.selectedSensors.length === 0 && (
                  <p className="text-muted-foreground italic">No sensors selected</p>
                )}
              </div>
              {state.selectedSensors.length > 0 && (
                <div className="pt-4 mt-4 border-t border-border">
                  <div className="flex justify-between items-center text-lg">
                    <span className="font-semibold">Sensors Total:</span>
                    <span className="text-primary font-bold">${sensorsPrice.toLocaleString()}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Simulation Package */}
            <div className="robot-card">
              <h3 className="text-2xl font-bold mb-6">Simulation Package</h3>
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="text-xl font-semibold mb-2">{simulationNames[state.selectedSimulation!]}</h4>
                  <p className="text-muted-foreground">Monthly subscription</p>
                </div>
                <div className="text-2xl font-bold text-primary">${simulationPrice}/month</div>
              </div>
            </div>
          </div>

          {/* Order Summary & Actions */}
          <div className="space-y-6">
            {/* Pricing Breakdown */}
            <div className="robot-card">
              <h3 className="text-2xl font-bold mb-6">Pricing Summary</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2">
                  <span>Robot Platform</span>
                  <span className="font-semibold">${robotPrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span>Sensors ({state.selectedSensors.length})</span>
                  <span className="font-semibold">${sensorsPrice.toLocaleString()}</span>
                </div>
                <div className="border-t border-border pt-4">
                  <div className="flex justify-between items-center text-xl font-bold">
                    <span>Hardware Total</span>
                    <span className="text-primary">${totalHardware.toLocaleString()}</span>
                  </div>
                </div>
                <div className="bg-muted/20 p-4 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Monthly Simulation</span>
                    <span className="text-lg font-bold text-secondary">${monthlySimulation}/month</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="robot-card text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Building?</h3>
              <p className="text-muted-foreground mb-6">
                Get your custom Modumake kit delivered and start your robotics research journey today.
              </p>
              
              <div className="space-y-4">
                <Button className="w-full tech-button text-lg py-4">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Get My Kit - ${totalHardware.toLocaleString()}
                </Button>
                
                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline" className="tech-button-secondary">
                    <Download className="w-4 h-4 mr-2" />
                    Download Specs
                  </Button>
                  <Button variant="outline" className="tech-button-secondary">
                    <Mail className="w-4 h-4 mr-2" />
                    Contact Sales
                  </Button>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="robot-card">
              <h4 className="font-bold mb-4">What's Included:</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                  <span>Complete robot platform with documentation</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                  <span>All selected sensors with mounting hardware</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                  <span>Simulation software access and tutorials</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                  <span>Technical support and community access</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                  <span>Free shipping and 30-day return policy</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};