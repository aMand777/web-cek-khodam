interface LoadingProps {
  name: string;
}

function Loading({ name }: LoadingProps) {
  return (
    <div className="card w-96 shadow-xl glass-container-card text-white">
      <div className="card-body">
        <h1 className="card-title mx-auto text-3xl font-extrabold">Cek Khodam</h1>
        <div className="flex items-center justify-center my-10">
          <span className="loading loading-ball loading-lg"></span>
        </div>
        <p className="mx-auto text-xs">
          Kami sedang memeriksa khodam yang ada di dalam diri{' '}
          <span className="text-lg font-semibold text-accent">{name}</span>
        </p>
      </div>
    </div>
  );
}

export default Loading;
