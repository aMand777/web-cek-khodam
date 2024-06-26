import React from 'react';

export const sound = [
  '/sound/kunti.mp3',
  '/sound/wolf.mp3',
  '/sound/ahh.mp3',
  '/sound/mak-lampir.mp3',
  '/sound/rawr.mp3',
  '/sound/wow.mp3',
  '/sound/fart.mp3',
  '/sound/bwa.mp3',
  '/sound/bomb.mp3',
  '/sound/quek.mp3',
  '/sound/window-error.mp3',
];

export const openModal = (id: string, audio: React.RefObject<HTMLAudioElement> | null) => {
  audio?.current?.play();
  const openModal = document.getElementById(id) as HTMLDialogElement | null;
  if (openModal) {
    openModal.showModal();
  }
};

export const randomNumber = () => {
  const randomAngka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const randomSample = randomAngka[Math.floor(Math.random() * randomAngka.length)];
  return randomSample;
};

export const shuffleData = (array: string[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};
