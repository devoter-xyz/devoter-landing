import { LucideIcon, BarChart, CodeXml, Database, RefreshCw, Shield, Zap } from 'lucide-react';

const iconMap: { [key: string]: LucideIcon } = {
  Shield: Shield,
  CodeXml: CodeXml,
  RefreshCw: RefreshCw,
  BarChart: BarChart,
  Zap: Zap,
  Database: Database,
};

export type IconName = keyof typeof iconMap;

interface IconProps extends Omit<React.SVGProps<SVGSVGElement>, 'name'> {
  size?: number;
}

const Icon: React.FC<IconProps & { name: IconName }> = ({ name, size = 24, ...props }) => {
  const LucideIconComponent = iconMap[name];

  if (!LucideIconComponent) {
    return null;
  }

  return (
    <LucideIconComponent size={size} {...props} />
  );
};

export { Icon };
