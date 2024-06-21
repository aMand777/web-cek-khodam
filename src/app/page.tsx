import Card from '@/components/Card';

async function getData() {
  const res = await fetch(
    `https://web-portofolio-sg-default-rtdb.asia-southeast1.firebasedatabase.app/khodam.json`,
  );
  const data = await res.json();

  return data;
}
export default async function Home() {
  const data = await getData();
  // const randomElement = data[Math.floor(Math.random() * data.length)];
  return (
    <main className="w-full h-full flex justify-center items-center">
      <Card data={data} />
    </main>
  );
}
