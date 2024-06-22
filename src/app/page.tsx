import Card from '@/components/Card';

async function getData() {
  const res = await fetch(`${process.env.API_URL}`);
  const data = await res.json();

  return data;
}

export default async function Home() {
  const data = await getData();
  return (
    <main className="w-full h-full flex justify-center items-center">
      <Card data={data} />
    </main>
  );
}
