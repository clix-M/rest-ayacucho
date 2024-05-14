import { MoveLeft } from "lucide-react";
import Link from "next/link";

const Layout = (
    { children }: { children: React.ReactNode }
) => {
    return (
        <div>
            <Link href="/home" className="flex">
                <MoveLeft size={24} className="mr-2" />
                Regresar
            </Link>
            {children}
        </div>
    );
}

export default Layout;