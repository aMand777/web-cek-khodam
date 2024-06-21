const random1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const random2 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const random3 = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
const random4 = [31, 33, 33, 34, 35, 36, 37, 38, 39, 40];
const random5 = [41, 42, 43, 44, 45, 46, 47, 48, 49, 50];

const randomSample1 = random1[Math.floor(Math.random() * random1.length)];
const randomSample2 = random2[Math.floor(Math.random() * random2.length)];
const randomSample3 = random3[Math.floor(Math.random() * random3.length)];
const randomSample4 = random4[Math.floor(Math.random() * random4.length)];
const randomSample5 = random5[Math.floor(Math.random() * random5.length)];

export const randomNumber = [
  randomSample1,
  randomSample2,
  randomSample3,
  randomSample4,
  randomSample5,
];

export const openModal = (id: string) => {
  const openModal = document.getElementById(id) as HTMLDialogElement | null;
  if (openModal) {
    openModal.showModal();
  }
};
