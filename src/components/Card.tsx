'use client';
import { useState, useRef } from 'react';
import Input from '@/components/Input';
import Result from '@/components/Result';
import Loading from '@/components/Loading';
import { randomNumber } from '@/utils';
import { openModal } from '@/utils';
import Empty from '@/components/Empty';

interface CardProps {
  data: [''];
}

function Card({ data }: CardProps) {
  const [name, setName] = useState('');
  const [khodam, setKhodam] = useState('');
  const [loading, setLoading] = useState(false);
  const [emptyKhodam, setEmptyKhodam] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleButtonCheck = () => {
    setEmptyKhodam(emptyKhodam + 1);
    setLoading(true);
    setTimeout(() => {
      if (randomNumber.filter((number) => number).includes(emptyKhodam)) {
        openModal('modal-empty', audioRef);
        setKhodam('');
        setName('');
        setLoading(false);
      } else {
        const randomData = data[Math.floor(Math.random() * data.length)];
        setKhodam(randomData);
        setLoading(false);
      }
    }, 5000);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && name.length > 0) {
      setEmptyKhodam(emptyKhodam + 1);
      setLoading(true);
      setTimeout(() => {
        if (randomNumber.filter((number) => number).includes(emptyKhodam)) {
          openModal('modal-empty', audioRef);
          setKhodam('');
          setName('');
          setLoading(false);
        } else {
          const randomData = data[Math.floor(Math.random() * data.length)];
          setKhodam(randomData);
          setLoading(false);
        }
      }, 5000);
    }
  };

  const handleButtonCheckLagi = () => {
    setKhodam('');
    setName('');
  };

  return (
    <div>
      <Empty />
      <audio ref={audioRef}>
        <source src="/kosong.mp3" />
      </audio>
      {loading ? (
        <Loading name={name} />
      ) : (
        <>
          {khodam.length < 1 ? (
            <Input
              onChange={handleChange}
              onClick={handleButtonCheck}
              onKeyDown={handleKeyDown}
              name={name}
            />
          ) : (
            <Result khodam={khodam} name={name} onClick={handleButtonCheckLagi} />
          )}
        </>
      )}
      <div className="glass-container-input w-fit mx-auto p-1 rounded-lg mt-5">
        <p className="text-center text-sm text-secondary">Created by @amand</p>
      </div>
    </div>
  );
}

export default Card;
