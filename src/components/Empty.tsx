import Image from 'next/image';

function Empty() {
  return (
    <dialog id="modal-empty" className="modal">
      <div className="modal-box min-h-[276px] max-w-sm p-0 glass-container-card">
        {/* <div className="modal-box bg-[url('/kosong.webp')] bg-no-repeat bg-cover min-h-[276px] max-w-sm"></div> */}
        <Image src="/kosong.webp" alt="kosong" width={384} height={276} className="rounded-2xl" />
        <p className="text-white text-sm text-center my-2">
          <span className="font-semibold text-accent">Kamu</span> tidak memiliki khodam pendamping
        </p>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}

export default Empty;
