export default function Hamburger({ isNavOpen }: { isNavOpen: boolean }) {
  const base = "bg-slate-100 w-6 h-0.5 transition-all ease-in-out duration-300";

  return (
    <div className="md:hidden flex h-16 w-12 flex-col items-center justify-center gap-1">
      <div
        className={`${base} ${
          isNavOpen && "rotate-45 translate-x-1 translate-y-1 bg-accent-400/100"
        }`}
      ></div>
      <div className={`${base} ${isNavOpen && "opacity-0"}`}></div>
      <div
        className={`${base} ${
          isNavOpen &&
          "origin-bottom-left rotate-[-45deg] translate-x-2 bg-accent-400/100"
        }`}
      ></div>
    </div>
  );
}
