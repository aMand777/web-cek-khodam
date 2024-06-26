'use client';
import React, { useRef, useEffect } from 'react';
interface InputProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onClick: () => void;
  name: string;
}

function Input({ onChange, onClick, onKeyDown, name }: InputProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  return (
    <div className="card w-96 shadow-xl glass-container-card text-white min-h-[276px]">
      <div className="card-body">
        <h1 className="card-title mx-auto text-3xl font-extrabold">Cek Khodam</h1>
        <p className="text-sm mt-3">Cek sosok khodam yang ada di dalam diri kamu</p>
        <input
          ref={inputRef}
          type="search"
          placeholder="Tulis nama kamu di sini"
          className="input input-bordered glass-container-input w-full max-w-sm my-3"
          onChange={onChange}
          onKeyDown={onKeyDown}
        />
        <div className="card-actions justify-end">
          <button
            onClick={onClick}
            className={`px-5 ${
              name.length < 1
                ? 'py-[14px] px-[22px] bg-[#3b7073] text-black rounded-full text-sm cursor-not-allowed'
                : 'btn btn-primary'
            }`}
            disabled={name.length < 1}
          >
            Check
          </button>
        </div>
      </div>
    </div>
  );
}

export default Input;
