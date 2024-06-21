import Card from '@/components/Card';
import Empty from '@/components/Empty';

async function getData() {
  const res = await fetch(
    `https://web-portofolio-sg-default-rtdb.asia-southeast1.firebasedatabase.app/khodam.json`,
  );
  const data = await res.json();

  return data;
}
export default async function Home() {
  const data = await getData();
  return (
    <main className="w-full h-full flex justify-center items-center">
      <Card data={data} />
      <Empty />
    </main>
  );
}
