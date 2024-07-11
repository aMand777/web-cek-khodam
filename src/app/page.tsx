import Card from '@/components/Card';
import { getDataKhodam, postDataVisitor, getDataVisitor, putDataVisitor } from '@/services';

export default async function Home() {
  const dataVisitor = await getDataVisitor();

  if (dataVisitor === null) {
    await postDataVisitor({visitor: '1'});
  } else {
    await putDataVisitor({visitor: `${Number(dataVisitor[0].visitor) + 1}`}, dataVisitor[0].id);
  }

  const listData = await getDataKhodam();

  return (
    <main className="w-full h-full flex justify-center items-center">
      <Card data={listData} />
    </main>
  );
}
