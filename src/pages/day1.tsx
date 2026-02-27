export default function Component() {
  return (
    <div className="flex h-full items-center justify-center bg-linear-to-tr from-[#43389F] to-[#4ec6ca]">
      <div className="font-courier-new size-1/2 text-white">
        <div className="relative h-25 w-50 [--shadow-number:0_0_13px_0_rgba(0,0,0,0.2)]">
          {/* number 1 */}
          <div className="absolute -left-4 z-1 h-10 w-5 rotate-50 rounded-sm bg-white shadow-(--shadow-number)"></div>
          {/* number 1 */}
          <div className="absolute z-10 h-25 w-6 rounded-sm bg-white shadow-(--shadow-number)"></div>
          {/* number 0 */}
          <div className="absolute left-4.25 z-8 size-25 rounded-full border-24 border-white shadow-(--shadow-number)"></div>
          {/* number 0 */}
          <div className="absolute left-25 z-6 size-25 rounded-full border-24 border-white shadow-(--shadow-number)"></div>
        </div>

        <div className="text-[82px]/16.5 font-bold uppercase">Days</div>
        <div className="text-[23px]/5 font-bold tracking-wider uppercase">
          CSS Challenge
        </div>
      </div>
    </div>
  );
}
