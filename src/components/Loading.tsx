interface LoadingProps {
  name: string;
}

function Loading({ name }: LoadingProps) {
  return (
    <div className="card w-96 shadow-xl glass-container-card min-h-[276px] text-white">
      <div className="card-body">
        <h1 className="card-title mx-auto text-3xl font-extrabold">Cek Khodam</h1>
        <div className="flex items-center justify-center my-10">
          <span className="loading loading-ball loading-lg text-primary"></span>
        </div>
        <p className="mx-auto text-[13px]">Kami sedang memeriksa khodam pendamping dari</p>
        <p className="text-xl font-semibold text-accent text-center">{name}</p>
      </div>
    </div>
  );
}

export default Loading;
