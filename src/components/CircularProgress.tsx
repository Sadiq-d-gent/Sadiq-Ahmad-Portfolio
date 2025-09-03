import React from 'react';
import { LucideIcon } from 'lucide-react';

interface CircularProgressProps {
  percentage: number;
  icon: LucideIcon;
  skillName: string;
  color?: string;
  size?: number;
}

const CircularProgress: React.FC<CircularProgressProps> = ({ 
  percentage, 
  icon: Icon, 
  skillName, 
  color = 'text-primary',
  size = 120 
}) => {
  const radius = (size - 8) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center space-y-3" data-aos="zoom-in" data-aos-delay="100">
      <div className="relative" style={{ width: size, height: size }}>
        {/* Background Circle */}
        <svg 
          className="transform -rotate-90 w-full h-full"
          width={size} 
          height={size}
        >
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="hsl(var(--muted))"
            strokeWidth="6"
            fill="transparent"
            className="opacity-20"
          />
          {/* Progress Circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="hsl(var(--primary))"
            strokeWidth="6"
            fill="transparent"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out"
            style={{
              filter: 'drop-shadow(0 0 6px hsl(var(--primary) / 0.3))'
            }}
          />
        </svg>
        
        {/* Icon and Percentage in Center */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <Icon className={`h-6 w-6 ${color} mb-1`} />
          <span className="text-sm font-bold text-foreground">{percentage}%</span>
        </div>
      </div>
      
      {/* Skill Name */}
      <h4 className="text-sm font-medium text-center text-foreground max-w-[100px] leading-tight">
        {skillName}
      </h4>
    </div>
  );
};

export default CircularProgress;