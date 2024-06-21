function Empty() {
  return (
    <dialog id="modal-empty" className="modal">
      <div className="modal-box bg-[url('/kosong.webp')] bg-no-repeat bg-cover min-h-[276px] max-w-sm"></div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}

export default Empty;
