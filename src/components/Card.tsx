'use client';
import { useState } from 'react';
import Input from '@/components/Input';
import Result from '@/components/Result';
import Loading from '@/components/Loading';
interface CardProps {
  data: [''];
}
function Card({ data }: CardProps) {
  const [name, setName] = useState('');
  const [khodam, setKhodam] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const handleButtonCheck = () => {
    setLoading(true);
    setTimeout(() => {
      const randomElement = data[Math.floor(Math.random() * data.length)];
      setKhodam(randomElement);
      setLoading(false);
    }, 5000);
  };
  const handleButtonCheckLagi = () => {
    setKhodam('');
    setName('');
  };

  if (khodam.length < 1 && !loading) {
    return <Input onChange={handleChange} onClick={handleButtonCheck} name={name} />;
  } else if (khodam.length > 1 && !loading) {
    return <Result khodam={khodam} name={name} onClick={handleButtonCheckLagi} />;
  } else {
    return <Loading name={name} />;
  }
}

export default Card;
