'use client';
import { useState, useRef, useEffect } from 'react';
import Input from '@/components/Input';
import Result from '@/components/Result';
import Loading from '@/components/Loading';
import { randomNumber, shuffleData } from '@/utils';
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
  const [dataKhodam, setDataKhodam] = useState<string[]>([]);
  const [name, setName] = useState('');
  const [khodam, setKhodam] = useState('');
  const [loading, setLoading] = useState(false);
  const { setInitialName } = useInitialName();
  const [index, setIndex] = useState(0);
  const [initialRandomEmpty, setInitialRandomEmpty] = useState(0);
  const [randomEmpty, setRandomEmpty] = useState(() => randomNumber());
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    setDataKhodam(shuffleData(data));
  }, [data]);

  useEffect(() => {
    if (initialRandomEmpty === 10) {
      setInitialRandomEmpty(0);
      setRandomEmpty(randomNumber());
    }
  }, [initialRandomEmpty]);

  const handleCheckKhodam = () => {
    const newIndex = (index + 1) % data.length;
    setIndex(newIndex);
    setKhodam(dataKhodam[newIndex]);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    setInitialName(event.target.value);
  };
  const handleButtonCheck = () => {
    setLoading(true);
    setInitialRandomEmpty((prev) => prev + 1);
    setTimeout(() => {
      if (randomEmpty === initialRandomEmpty) {
        openModal('modal-empty', audioRef);
        setKhodam('');
        setName('');
        setLoading(false);
      } else {
        setLoading(false);
        handleCheckKhodam();
      }
    }, 3100);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && name.length > 0) {
      setLoading(true);
      setInitialRandomEmpty((prev) => prev + 1);
      setTimeout(() => {
        if (randomEmpty === initialRandomEmpty) {
          openModal('modal-empty', audioRef);
          setKhodam('');
          setName('');
          setLoading(false);
        } else {
          setLoading(false);
          handleCheckKhodam();
        }
      }, 3100);
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
