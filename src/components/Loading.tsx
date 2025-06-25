import React from 'react';
import { Loader2 } from 'lucide-react'; // Optional: install with `npm install lucide-react`

const LoadingScreen: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen w-full bg-slate-950 text-white">
      <div className="flex flex-col items-center gap-4">
        <Loader2 className="animate-spin w-10 h-10 text-[#f6ab64]" />
        <p className="text-lg">Loading, please wait...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;