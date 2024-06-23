import React from 'react';

const random1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const random2 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const random3 = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
const random4 = [31, 33, 33, 34, 35, 36, 37, 38, 39, 40];
const random5 = [41, 42, 43, 44, 45, 46, 47, 48, 49, 50];
const random6 = [51, 52, 53, 55, 55, 56, 57, 58, 59, 60];
const random7 = [61, 62, 63, 66, 65, 66, 67, 68, 69, 70];
const random8 = [71, 72, 73, 77, 75, 77, 77, 78, 79, 80];
const random9 = [81, 82, 83, 88, 85, 88, 87, 88, 89, 90];
const random10 = [91, 92, 93, 99, 95, 99, 97, 98, 99, 100];

const randomSample1 = random1[Math.floor(Math.random() * random1.length)];
const randomSample2 = random2[Math.floor(Math.random() * random2.length)];
const randomSample3 = random3[Math.floor(Math.random() * random3.length)];
const randomSample4 = random4[Math.floor(Math.random() * random4.length)];
const randomSample5 = random5[Math.floor(Math.random() * random5.length)];
const randomSample6 = random6[Math.floor(Math.random() * random6.length)];
const randomSample7 = random7[Math.floor(Math.random() * random7.length)];
const randomSample8 = random7[Math.floor(Math.random() * random8.length)];
const randomSample9 = random7[Math.floor(Math.random() * random9.length)];
const randomSample10 = random7[Math.floor(Math.random() * random10.length)];

export const randomNumber = [
  randomSample1,
  randomSample2,
  randomSample3,
  randomSample4,
  randomSample5,
  randomSample6,
  randomSample7,
  randomSample8,
  randomSample9,
  randomSample10,
];

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
