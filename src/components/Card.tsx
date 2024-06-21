'use client';
import { useState } from 'react';
import Input from '@/components/Input';
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
  const handleClickButtonCheck = () => {
    setLoading(true);
    setTimeout(() => {
      const randomElement = data[Math.floor(Math.random() * data.length)];
      setKhodam(randomElement);
      setLoading(false);
    }, 5000);
  };
  const handleCheckLagi = () => {
    setKhodam('');
    setName('');
  };

  if (khodam.length < 1 && !loading) {
    return (
      <Input
        onChange={handleChange}
        onClick={handleClickButtonCheck}
        name={name}
      />
    );
    // return (
    //   <div className="card w-96 shadow-xl glass-container-card text-white">
    //     <div className="card-body">
    //       <h1 className="card-title mx-auto text-3xl font-extrabold">Cek Khodam</h1>
    //       <p className="text-sm mt-3">Cek sosok khodam yang ada di dalam diri kamu</p>
    //       <input
    //         type="search"
    //         placeholder="Tulis nama kamu di sini"
    //         className="input input-bordered glass-container-input w-full max-w-sm my-3"
    //         onChange={handleChange}
    //       />
    //       <div className="card-actions justify-end">
    //         <button
    //           onClick={handleClickButtonCheck}
    //           className={`px-5 ${name.length < 1 ? 'py-[14px] px-[22px] bg-[#3b7073] text-black rounded-full text-sm cursor-not-allowed' : 'btn btn-primary'}`}
    //           disabled={name.length < 1}
    //         >
    //           Check
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // );
  } else if (khodam.length > 1 && !loading) {
    return (
      <div className="card w-96 shadow-xl glass-container-card text-white">
        <div className="card-body">
          <h1 className="card-title mx-auto text-3xl font-extrabold">Cek Khodam</h1>
          <p className="text-sm mt-3">
            Khodam yang bersemayam dalam diri{' '}
            <span className="text-lg font-semibold text-accent">{name}</span> adalah sosok :
          </p>
          <h2 className="text-4xl font-extrabold text-accent mx-auto mt-3 mb-5">{khodam}</h2>
          <div className="card-actions justify-end">
            <button onClick={handleCheckLagi} className="btn btn-secondary px-5">
              Check lagi
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="card w-96 shadow-xl glass-container-card text-white">
        <div className="card-body">
          <h1 className="card-title mx-auto text-3xl font-extrabold">Cek Khodam</h1>
          <div className="flex items-center justify-center my-10">
            <span className="loading loading-ball loading-lg"></span>
          </div>
          <p className="mx-auto text-xs">
            Kami sedang memeriksa khodam yang ada di dalam diri{' '}
            <span className="text-lg font-semibold text-accent">{name}</span>
          </p>
        </div>
      </div>
    );
  }
}

export default Card;
