import { navItems } from "@/utils/nav-items";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4">
      {/* logo */}
      <div className="w-60">
        <Image
          src="/assets/logo.png"
          alt=""
          width={320}
          height={180}
          className="w-32"
        />
      </div>

      {/* navbar */}
      <nav className="flex items-center justify-center gap-6 uppercase font-medium">
        {navItems?.map((item) => (
          <Link key={item.id} href={item.url}>
            {item.name}
          </Link>
        ))}
      </nav>

      {/* cta */}
      <div>
        <button className="w-60 bg-primary h-12 rounded">See Pricing</button>
      </div>
    </header>
  );
}
