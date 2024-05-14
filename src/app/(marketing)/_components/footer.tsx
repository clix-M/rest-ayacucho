import Link from "next/link";

export function Footer() {
  return (
    <footer className="h-[5vh] flex justify-between items-center container mx-auto">
 
        <p>
          {`Panteras © ${new Date().getFullYear()} Derechos reservados.`}
        </p>
        <div className="">
          <Link href="/#" className="text-gray-500 hover:text-gray-700 ml-6">
            Privacidad
          </Link>
          <Link href="/#" className="text-gray-500 hover:text-gray-700 ml-6">
            Términos
          </Link>
        </div>
    
    </footer>
  );
}