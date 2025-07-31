import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <>
      <nav className="p-6">
        <div className="">
          <ul className="flex flex-wrap justify-between">
            <div>
              <li>
                <Link
                  className="cursor-pointer underline underline-offset-4"
                  href="/"
                >
                  <Image
                    src="/logo.svg"
                    alt="Talent match maker logo"
                    width={50}
                    height={40}
                  />
                </Link>
              </li>
            </div>
            <div className="flex flex-wrap gap-2 px-4">
              <li>
                <Link
                  className="cursor-pointer underline underline-offset-4"
                  href="/"
                >
                  Talents
                </Link>
              </li>
              <li>
                <Link
                  className="cursor-pointer underline underline-offset-4"
                  href="/gigs"
                >
                  Gigs
                </Link>
              </li>
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
}
