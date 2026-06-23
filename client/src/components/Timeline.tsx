import { ReactNode } from 'react';

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  icon?: ReactNode;
  side?: 'left' | 'right';
}

interface TimelineProps {
  items: TimelineItem[];
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      {/* Central line */}
      <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-cyan-500/50 via-purple-500/30 to-transparent" />
      
      <div className="space-y-12">
        {items.map((item, idx) => {
          const isLeft = idx % 2 === 0;
          
          return (
            <div key={idx} className="relative">
              <div className={`flex ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}>
                {/* Content */}
                <div className="w-1/2 px-6">
                  <div className={`rounded-lg border border-cyan-500/20 bg-gradient-to-br from-slate-900/50 to-purple-900/20 p-6 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/20`}>
                    <div className="mb-2 flex items-center gap-2">
                      {item.icon && (
                        <span className="text-xl text-cyan-400">{item.icon}</span>
                      )}
                      <span className="font-mono-code text-xs font-semibold text-lime-400">
                        {item.year}
                      </span>
                    </div>
                    
                    <h3 className="font-display mb-2 text-lg font-bold text-cyan-300">
                      {item.title}
                    </h3>
                    
                    <p className="text-sm text-slate-300">
                      {item.description}
                    </p>
                  </div>
                </div>
                
                {/* Center dot */}
                <div className="flex w-0 items-center justify-center">
                  <div className="relative h-4 w-4 rounded-full border-2 border-cyan-400 bg-gradient-to-br from-cyan-400 to-purple-500 shadow-lg shadow-cyan-500/50">
                    <div className="absolute inset-0 animate-pulse rounded-full bg-cyan-400/20" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
