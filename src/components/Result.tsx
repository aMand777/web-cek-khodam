'use client';
import { useRef, useEffect } from 'react';
import Confetti from 'react-confetti-boom';

interface ResultProps {
  name: string;
  khodam: string;
  onClick: () => void;
}

function Result({ name, khodam, onClick }: ResultProps) {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    buttonRef.current?.focus();
    audioRef.current?.play();
  }, []);

  return (
    <>
      <Confetti mode="boom" particleCount={50} colors={['#65C3C8', '#EF9FBC', '#EEAF3A']} />
      <audio ref={audioRef}>
        <source src="/wolf.mp3" />
      </audio>
      <div className="card w-96 shadow-xl glass-container-card text-white">
        <div className="card-body">
          <h1 className="card-title mx-auto text-3xl font-extrabold">Cek Khodam</h1>
          <p className="text-base mt-3">
            Khodam pendamping di dalam diri{' '}
            <span className="text-lg font-semibold text-accent">{name}</span> ada sosok :
          </p>
          <h2 className="text-4xl font-extrabold text-accent text-center mt-3 mb-5">{khodam}</h2>
          <div className="card-actions justify-end">
            <button ref={buttonRef} onClick={onClick} className="btn btn-secondary px-5">
              Check lagi
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Result;
