'use client';
import { useState, useRef } from 'react';
import Input from '@/components/Input';
import Result from '@/components/Result';
import Loading from '@/components/Loading';
import { randomNumber } from '@/utils';
import { openModal } from '@/utils';
import Empty from '@/components/Empty';
import useInitialName from '@/hook/useInitialName';
import Whatsapp from '@/components/Whatsapp';
import X from '@/components/X';
import Share from '@/components/Share';

interface CardProps {
  data: string[];
}

function Card({ data }: CardProps) {
  const [name, setName] = useState('');
  const [khodam, setKhodam] = useState('');
  const [loading, setLoading] = useState(false);
  const [emptyKhodam, setEmptyKhodam] = useState(0);
  const { setInitialName } = useInitialName();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    setInitialName(event.target.value);
  };

  const handleButtonCheck = () => {
    const randomData = data[Math.floor(Math.random() * data.length)];
    setEmptyKhodam(emptyKhodam + 1);
    setLoading(true);
    setTimeout(() => {
      if (randomNumber.filter((number) => number).includes(emptyKhodam)) {
        openModal('modal-empty', audioRef);
        setKhodam('');
        setName('');
        setLoading(false);
      } else {
        setKhodam(randomData);
        setLoading(false);
      }
    }, 6000);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const randomData = data[Math.floor(Math.random() * data.length)];
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
          setKhodam(randomData);
          setLoading(false);
        }
      }, 6000);
    }
  };

  const handleButtonCheckLagi = () => {
    setKhodam('');
    setName('');
  };

  const message = `Khodam pendamping di dalam diri ${name} ada sosok "${khodam}". Cek khodam kamu disini 👉 https://web-cek-khodam.vercel.app/`;
  const urlWhatsapp = `https://wa.me/?text=${encodeURIComponent(message)}`;
  const urlX = `https://x.com/intent/post?url=${encodeURIComponent(message)}`;

  return (
    <div>
      <Empty />
      <audio ref={audioRef}>
        <source src="/sound/kosong.mp3" />
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
      {khodam.length > 0 && (
        <div className="mx-auto mt-10 w-fit">
          <span className="text-white text-sm flex gap-1 items-center mb-3">
            Share result <Share />{' '}
          </span>
          <div className="w-full flex gap-8  justify-center items-center">
            <Whatsapp href={urlWhatsapp} />
            <X href={urlX} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Card;
