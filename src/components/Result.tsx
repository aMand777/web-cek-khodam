interface ResultProps {
  name: string;
  khodam: string;
  onClick: () => void;
}

function Result({ name, khodam, onClick }: ResultProps) {
  return (
    <div className="card w-96 shadow-xl glass-container-card text-white">
      <div className="card-body">
        <h1 className="card-title mx-auto text-3xl font-extrabold">Cek Khodam</h1>
        <p className="text-sm mt-3">
          Khodam yang bersemayam dalam diri{' '}
          <span className="text-lg font-semibold text-accent">{name}</span> adalah sosok :
        </p>
        <h2 className="text-4xl font-extrabold text-accent mx-auto mt-3 mb-5">{khodam}</h2>
        <div className="card-actions justify-end">
          <button onClick={onClick} className="btn btn-secondary px-5">
            Check lagi
          </button>
        </div>
      </div>
    </div>
  );
}

export default Result;
