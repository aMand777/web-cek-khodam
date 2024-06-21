'use client';
import { useState } from 'react';
import Input from '@/components/Input';
import Result from '@/components/Result';
import Loading from '@/components/Loading';
import { randomNumber } from '@/utils';
import { openModal } from '@/utils';

interface CardProps {
  data: [''];
}

function Card({ data }: CardProps) {
  const [name, setName] = useState('');
  const [khodam, setKhodam] = useState('');
  const [loading, setLoading] = useState(false);
  const [emptyKhodam, setEmptyKhodam] = useState(0);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleButtonCheck = () => {
    setEmptyKhodam(emptyKhodam + 1);
    setLoading(true);
    setTimeout(() => {
      if (randomNumber.filter((number) => number).includes(emptyKhodam)) {
        openModal('modal-empty');
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
          openModal('modal-empty');
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

  if (khodam.length < 1 && !loading) {
    return (
      <Input
        onChange={handleChange}
        onClick={handleButtonCheck}
        onKeyDown={handleKeyDown}
        name={name}
      />
    );
  } else if (khodam.length > 0 && !loading) {
    return <Result khodam={khodam} name={name} onClick={handleButtonCheckLagi} />;
  } else {
    return <Loading name={name} />;
  }
}

export default Card;
