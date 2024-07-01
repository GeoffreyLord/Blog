import Image from "next/image";
import Link from "next/link";
import "../app/globals.css";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const header = (
    <header>
      <div className="text-center p-8 my-6 rounded-md">
        <Link href="/">
          <h1 className="text-2xl text-black font-bold mt-4">Geoff's Blog</h1>
        </Link>
        <p className="text-slate-300">R&D Reflections</p>
      </div>
    </header>
  );

  const head = (
    <head>
      <title>Geoff Lord</title>
      <link rel="icon" href="/favicon.ico" sizes="any" />
    </head>
  );

  const footer = (
    <footer>
      <div className="border-t border-slate-400 mt-12 py-6 text-center text-slate-400">
        <h3>Geoff Lord</h3>
      </div>
    </footer>
  );

  return (
    <html>
      {head}
      <body>
        <div className="mx-auto  max-w-2xl px-6">
          {header}
          {children}
          {footer}
        </div>
      </body>
    </html>
  );
}
