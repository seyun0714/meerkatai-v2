import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex justify-between h-24 px-8 py-2 border-b border-zinc-200">
      <Link href="/dashboard" className="flex justify-center items-center text-3xl font-bold cursor-pointer">
        <span>Meerkat</span>
        <span className="text-primary">AI</span>
      </Link>
      <div></div>
    </header>
  );
}
