import { RobotType, SensorType } from "./ModumakeDemo";
import { Camera, Radar, Zap, Volume2, Grip } from "lucide-react";
import robotArmImg from "@/assets/robot-arm.png";
import quadrupedImg from "@/assets/quadruped-robot.png";
import wheeledImg from "@/assets/wheeled-robot.png";

interface SensorCustomizationProps {
  selectedRobot: RobotType;
  selectedSensors: SensorType[];
  onSelectSensor: (sensor: SensorType) => void;
}

const sensors = [
  {
    id: "camera" as const,
    name: "RGB Camera",
    description: "High-resolution visual perception for object detection and navigation",
    icon: Camera,
    price: "$299",
    specs: ["1080p Resolution", "60 FPS", "Wide Angle Lens"]
  },
  {
    id: "lidar" as const,
    name: "LiDAR Sensor",
    description: "3D point cloud generation for precise environmental mapping",
    icon: Radar,
    price: "$899",
    specs: ["360° Scanning", "10m Range", "0.1° Resolution"]
  },
  {
    id: "imu" as const,
    name: "IMU Module",
    description: "9-axis motion sensing for orientation and acceleration tracking",
    icon: Zap,
    price: "$149",
    specs: ["9-DOF Sensing", "High Precision", "Real-time Data"]
  },
  {
    id: "ultrasonic" as const,
    name: "Ultrasonic Array",
    description: "Multi-directional distance sensing for obstacle avoidance",
    icon: Volume2,
    price: "$199",
    specs: ["8-Sensor Array", "5m Range", "Fast Response"]
  },
  {
    id: "force" as const,
    name: "Force Sensor",
    description: "Tactile feedback system for precise manipulation tasks",
    icon: Grip,
    price: "$349",
    specs: ["6-Axis Force", "High Sensitivity", "Overload Protection"]
  }
];

const robotImages = {
  arm: robotArmImg,
  quadruped: quadrupedImg,
  wheeled: wheeledImg
};

const sensorPlacements = {
  arm: [
    { sensor: "camera" as SensorType, x: "75%", y: "25%" },
    { sensor: "force" as SensorType, x: "85%", y: "65%" },
    { sensor: "imu" as SensorType, x: "45%", y: "35%" },
  ],
  quadruped: [
    { sensor: "camera" as SensorType, x: "25%", y: "30%" },
    { sensor: "lidar" as SensorType, x: "50%", y: "25%" },
    { sensor: "imu" as SensorType, x: "50%", y: "45%" },
    { sensor: "ultrasonic" as SensorType, x: "75%", y: "35%" },
  ],
  wheeled: [
    { sensor: "camera" as SensorType, x: "50%", y: "20%" },
    { sensor: "lidar" as SensorType, x: "50%", y: "35%" },
    { sensor: "ultrasonic" as SensorType, x: "30%", y: "50%" },
    { sensor: "imu" as SensorType, x: "70%", y: "50%" },
  ]
};

export const SensorCustomization = ({ selectedRobot, selectedSensors, onSelectSensor }: SensorCustomizationProps) => {
  const robotImage = robotImages[selectedRobot!];
  const placements = sensorPlacements[selectedRobot!];

  return (
    <div className="py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">
            Customize Your <span className="glow-text">Sensor Array</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Attach sensors to your robot platform. Select from our modular sensor library 
            to create the perfect sensing setup for your research needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Robot Visualization */}
          <div className="robot-card">
            <h3 className="text-2xl font-bold mb-6 text-center">Robot Configuration</h3>
            <div className="relative">
              <img
                src={robotImage}
                alt={`${selectedRobot} robot`}
                className="w-full h-96 object-contain"
              />
              
              {/* Sensor Attachment Points */}
              {placements.map((placement, index) => {
                const sensorData = sensors.find(s => s.id === placement.sensor);
                const isAttached = selectedSensors.includes(placement.sensor);
                
                return (
                  <div
                    key={index}
                    className={`absolute w-8 h-8 rounded-full border-2 cursor-pointer transition-all duration-300 ${
                      isAttached 
                        ? 'bg-primary border-primary animate-pulse-glow' 
                        : 'bg-muted/50 border-muted hover:border-accent hover:bg-accent/20'
                    }`}
                    style={{ 
                      left: placement.x, 
                      top: placement.y,
                      transform: 'translate(-50%, -50%)'
                    }}
                    onClick={() => onSelectSensor(placement.sensor)}
                    title={`${sensorData?.name} attachment point`}
                  >
                    {isAttached && (
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="w-4 h-4 bg-primary-foreground rounded-full" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            
            {/* Attached Sensors List */}
            {selectedSensors.length > 0 && (
              <div className="mt-6 pt-6 border-t border-border">
                <h4 className="font-semibold mb-3">Attached Sensors:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedSensors.map(sensorId => {
                    const sensor = sensors.find(s => s.id === sensorId)!;
                    return (
                      <div key={sensorId} className="sensor-chip bg-primary/10 border-primary text-primary">
                        <sensor.icon className="w-4 h-4 mr-2" />
                        {sensor.name}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Sensor Library */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Available Sensors</h3>
            <div className="space-y-4">
              {sensors.map((sensor, index) => {
                const isSelected = selectedSensors.includes(sensor.id);
                
                return (
                  <div
                    key={sensor.id}
                    className={`robot-card cursor-pointer transition-all duration-300 ${
                      isSelected ? 'border-primary bg-primary/5' : ''
                    }`}
                    onClick={() => onSelectSensor(sensor.id)}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-lg ${
                        isSelected ? 'bg-primary text-primary-foreground' : 'bg-muted'
                      }`}>
                        <sensor.icon className="w-6 h-6" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-lg font-semibold">{sensor.name}</h4>
                          <span className="text-xl font-bold text-primary">{sensor.price}</span>
                        </div>
                        <p className="text-muted-foreground mb-3">{sensor.description}</p>
                        
                        <div className="flex flex-wrap gap-2">
                          {sensor.specs.map((spec, idx) => (
                            <span key={idx} className="text-xs px-2 py-1 bg-muted rounded-full">
                              {spec}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                        isSelected ? 'border-primary bg-primary' : 'border-muted'
                      }`}>
                        {isSelected && (
                          <svg className="w-4 h-4 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* Selection Summary */}
            <div className="mt-6 p-4 bg-muted/20 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="font-medium">Selected Sensors: {selectedSensors.length}</span>
                <span className="text-lg font-bold text-primary">
                  Total: ${selectedSensors.reduce((sum, sensorId) => {
                    const sensor = sensors.find(s => s.id === sensorId)!;
                    return sum + parseInt(sensor.price.replace('$', ''));
                  }, 0).toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};