import { useState } from "react";
import { ArrowUp, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RobotSelection } from "./RobotSelection";
import { SensorCustomization } from "./SensorCustomization";
import { SimulationSelection } from "./SimulationSelection";
import { SummaryScreen } from "./SummaryScreen";

export type RobotType = "arm" | "quadruped" | "wheeled" | null;
export type SensorType = "camera" | "lidar" | "imu" | "ultrasonic" | "force";
export type SimulationTier = "basic" | "advanced" | "full" | null;

export interface DemoState {
  currentStage: number;
  selectedRobot: RobotType;
  selectedSensors: SensorType[];
  selectedSimulation: SimulationTier;
}

const ModumakeDemo = () => {
  const [state, setState] = useState<DemoState>({
    currentStage: 0,
    selectedRobot: null,
    selectedSensors: [],
    selectedSimulation: null,
  });

  const updateState = (updates: Partial<DemoState>) => {
    setState(prev => ({ ...prev, ...updates }));
  };

  const nextStage = () => {
    if (state.currentStage < 3) {
      updateState({ currentStage: state.currentStage + 1 });
    }
  };

  const prevStage = () => {
    if (state.currentStage > 0) {
      updateState({ currentStage: state.currentStage - 1 });
    }
  };

  const canProceed = () => {
    switch (state.currentStage) {
      case 0: return state.selectedRobot !== null;
      case 1: return state.selectedSensors.length > 0;
      case 2: return state.selectedSimulation !== null;
      case 3: return true;
      default: return false;
    }
  };

  const stageNames = [
    "Robot Selection",
    "Sensor Customization", 
    "Simulation Package",
    "Kit Summary"
  ];

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Header */}
      <header className="relative z-10 p-6 border-b border-border">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold glow-text">
              Modumake
            </h1>
            <p className="text-muted-foreground">Modular Robotics Platform</p>
          </div>
          
          {/* Stage Indicator */}
          <div className="flex items-center gap-4">
            {stageNames.map((name, index) => (
              <div key={index} className={`flex items-center gap-2 ${
                index === state.currentStage ? 'text-primary' : 
                index < state.currentStage ? 'text-accent' : 'text-muted-foreground'
              }`}>
                <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm font-medium ${
                  index === state.currentStage ? 'border-primary bg-primary text-primary-foreground' : 
                  index < state.currentStage ? 'border-accent bg-accent text-accent-foreground' : 'border-muted'
                }`}>
                  {index + 1}
                </div>
                <span className="text-sm font-medium">{name}</span>
                {index < stageNames.length - 1 && (
                  <ArrowUp className="w-4 h-4 rotate-90 ml-2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative">
        <div className="robot-stage">
          {state.currentStage === 0 && (
            <RobotSelection 
              selectedRobot={state.selectedRobot}
              onSelectRobot={(robot) => updateState({ selectedRobot: robot })}
            />
          )}
          
          {state.currentStage === 1 && (
            <SensorCustomization
              selectedRobot={state.selectedRobot!}
              selectedSensors={state.selectedSensors}
              onSelectSensor={(sensor) => {
                const newSensors = state.selectedSensors.includes(sensor)
                  ? state.selectedSensors.filter(s => s !== sensor)
                  : [...state.selectedSensors, sensor];
                updateState({ selectedSensors: newSensors });
              }}
            />
          )}
          
          {state.currentStage === 2 && (
            <SimulationSelection
              selectedSimulation={state.selectedSimulation}
              onSelectSimulation={(simulation) => updateState({ selectedSimulation: simulation })}
            />
          )}
          
          {state.currentStage === 3 && (
            <SummaryScreen state={state} />
          )}
        </div>
      </main>

      {/* Navigation Footer */}
      {state.currentStage < 3 && (
        <footer className="fixed bottom-0 left-0 right-0 p-6 bg-background/80 backdrop-blur-sm border-t border-border">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <Button
              variant="outline"
              onClick={prevStage}
              disabled={state.currentStage === 0}
              className="tech-button-secondary"
            >
              <ArrowDown className="w-4 h-4 mr-2 rotate-90" />
              Previous
            </Button>
            
            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                Step {state.currentStage + 1} of {stageNames.length}
              </p>
            </div>
            
            <Button
              onClick={nextStage}
              disabled={!canProceed()}
              className="tech-button"
            >
              Next
              <ArrowUp className="w-4 h-4 ml-2 rotate-90" />
            </Button>
          </div>
        </footer>
      )}

      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
      </div>
    </div>
  );
};

export default ModumakeDemo;