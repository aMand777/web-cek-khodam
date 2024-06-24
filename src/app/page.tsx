import Card from '@/components/Card';

async function getData() {
  const res = await fetch(`${process.env.BASE_API_URL}`, { next: { revalidate: 86400 } });
  const data = await res.json();
  const values = Object?.values(data);
  const listData = (values as { khodam: string }[]).map((value) => value.khodam);
  return listData;
}

export default async function Home() {
  const listData = await getData();

  return (
    <main className="w-full h-full flex justify-center items-center">
      <Card data={listData} />
    </main>
  );
}
