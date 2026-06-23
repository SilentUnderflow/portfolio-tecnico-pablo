import { ReactNode } from 'react';

interface TechCardProps {
  icon?: ReactNode;
  title: string;
  description: string;
  items?: string[];
  className?: string;
}

export default function TechCard({ icon, title, description, items, className = '' }: TechCardProps) {
  return (
    <div className={`glow-effect group relative overflow-hidden rounded-lg border border-cyan-500/20 bg-gradient-to-br from-slate-900/50 to-purple-900/20 p-6 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/50 ${className}`}>
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-purple-500/0 opacity-0 transition-opacity duration-300 group-hover:opacity-10" />
      
      <div className="relative z-10">
        {icon && (
          <div className="mb-4 text-3xl text-cyan-400 transition-transform duration-300 group-hover:scale-110">
            {icon}
          </div>
        )}
        
        <h3 className="font-display mb-2 text-lg font-bold text-cyan-300">
          {title}
        </h3>
        
        <p className="mb-4 text-sm text-slate-300">
          {description}
        </p>
        
        {items && items.length > 0 && (
          <ul className="space-y-1">
            {items.map((item, idx) => (
              <li key={idx} className="flex items-center text-xs text-slate-400">
                <span className="mr-2 inline-block h-1 w-1 rounded-full bg-lime-400" />
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
