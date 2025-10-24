import React from 'react';
import { LucideIcon, BarChart, CodeXml, Database, RefreshCw, Shield, Zap } from 'lucide-react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: string;
  size?: number;
}

const iconMap: { [key: string]: LucideIcon } = {
  Shield: Shield,
  CodeXml: CodeXml,
  RefreshCw: RefreshCw,
  BarChart: BarChart,
  Zap: Zap,
  Database: Database,
};

const Icon: React.FC<IconProps> = ({ name, size = 24, ...props }) => {
  const LucideIconComponent = iconMap[name];

  if (!LucideIconComponent) {
    return null;
  }

  return (
    <LucideIconComponent size={size} {...props} />
  );
};

export { Icon };
