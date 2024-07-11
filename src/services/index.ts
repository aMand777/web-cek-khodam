export async function getDataKhodam() {
  const res = await fetch(`${process.env.API_URL_KHODAMLIST}?auth=${process.env.API_KEY}`);
  const data = await res.json();
  const values = Object?.values(data);
  const listData = (values as { khodam: string }[]).map((value) => value.khodam);
  return listData;
}

export async function postDataVisitor(data: { visitor: string }) {
  await fetch(`${process.env.BASE_API_URL}/visitorcekkhodam.json?auth=${process.env.API_KEY}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
}

export async function putDataVisitor(data: { visitor: string }, id: string) {
  await fetch(`${process.env.BASE_API_URL}/visitorcekkhodam/${id}.json/?auth=${process.env.API_KEY}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
}

export async function getDataVisitor() {
  const res = await fetch(
    `${process.env.BASE_API_URL}/visitorcekkhodam.json?auth=${process.env.API_KEY}`,
    {
      cache: 'no-store',
    },
  );
  const data = await res.json();
  if (data && Object.keys(data).length > 0) {
    const listDataVisitor = [data].flatMap((obj: { [key: string]: { visitor: string } }) =>
      Object.keys(obj).map((key) => ({
        id: key,
        visitor: obj[key].visitor,
      })),
    );
    return listDataVisitor;
  } else {
    return null;
  }
}

export async function deleteDataVisitor() {
  await fetch(`${process.env.BASE_API_URL}/visitorcekkhodam.json?auth=${process.env.API_KEY}`, {
    method: 'DELETE',
  });
}
