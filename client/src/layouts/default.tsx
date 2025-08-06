import { Link } from "@heroui/link";

import { Navbar } from "@/components/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="relative flex flex-col h-screen"
      style={{
        background: `
    0% 0% / auto 25px repeat-y linear-gradient(
      to top,
      #ff000000 0% 49%,
      #ffffff59 49% 51%,
      #0000ff00 51%
    ),
    0% 0% / 25px auto repeat-x linear-gradient(
      to right,
      #ff000000 0% 49%,
      #ffffff59 49% 51%,
      #0000ff00 51%
    ),
    radial-gradient(
      180% 130% at 100% 100%,
      #2a641fff 0%,
      #0b0b0bff 40%,
      #0b0b0bff 75%,
      #4d4d4dff 100%
    )
  `,
        backgroundBlendMode: "overlay",
      }}
    >
      <Navbar />
      <main className="container mx-auto max-w-7xl px-6 flex-grow pt-16">
        {children}
      </main>
      <footer className="w-full flex items-center justify-center py-3">
        <Link
          isExternal
          className="flex items-center gap-1 text-current"
          href="https://heroui.com"
          title="heroui.com homepage"
        >
          <span className="text-default-600">Powered by</span>
          <p className="text-primary">HeroUI</p>
        </Link>
      </footer>
    </div>
  );
}
