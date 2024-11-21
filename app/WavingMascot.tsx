import { useState, useEffect } from 'react';
import Image from 'next/image';

const frames = [
  '/mascot-wave-1.png',
  '/mascot-wave-2.png',
  '/mascot-wave-3.png',
  '/mascot-wave-4.png',
];

export default function WavingMascot() {
  const [currentFrame, setCurrentFrame] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFrame((prevFrame) => (prevFrame + 1) % frames.length);
    }, 200); // Change frame every 200ms

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute bottom-4 left-4 w-24 h-24 z-10">
      <Image
        src={frames[currentFrame]}
        alt="Waving Mascot"
        width={96}
        height={96}
        className="w-full h-full object-contain"
      />
    </div>
  );
}

