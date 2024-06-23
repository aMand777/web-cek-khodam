import Image from 'next/image';
import useInitialName from '@/hook/useInitialName';

function Empty() {
  const { initialName } = useInitialName();
  return (
    <dialog id="modal-empty" className="modal">
      <div className="modal-box min-h-[276px] max-w-sm p-0 glass-container-card">
        <Image src="/kosong.webp" alt="kosong" width={384} height={276} className="rounded-2xl" />
        <p className="text-white text-base text-center my-2">
          <span className="font-semibold text-accent">{initialName}</span> tidak memiliki khodam
          pendamping
        </p>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}

export default Empty;
