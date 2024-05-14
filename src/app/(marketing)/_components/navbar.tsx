import { Button } from "@/components/ui/button";
import Link from "next/link";

const natItems = [
  { name: "Home", link: "/home" },
  { name: "About", link: "/#" },
  { name: "Contact", link: "/#" },
];


export function Navbar() {
  return (
    <nav className="container mx-auto h-[5vh] flex justify-between items-center">

      <div>
        <Link href="/">
          <h1 className="text-3xl font-semibold">
            Ayacucho 🍽️
          </h1>
        </Link>
      </div>

      <div className="flex gap-x-5 items-center">
        <div className="flex gap-4">
          {natItems.map((item) => (
            <Link key={item.name} href={item.link}>
              {item.name}
            </Link>
          ))}

        </div>
        <div>
          <Button asChild>
            <Link href={"/home"}>
              Init Session
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}