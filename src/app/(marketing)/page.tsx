import { Button } from "@/components/ui/button";
import { Hero } from "./_components/hero";
import { Contact, Cookie } from "lucide-react";
import Link from "next/link";

const Page = () => {
    return (
        <div className="relative h-[90vh]">
            <Hero />        
            <div className="relative w-full h-full">
                <div>
                    <h1 className="text-white scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl flex justify-center pt-32">
                        Los mejores Restauantes de Ayacucho
                    </h1>
                </div>
                <div className="absolute bottom-14 " >
                    <div className="w-screen flex gap-x-24 justify-center ">
                        <Button className="w-[300px] h-[60px] text-xl bg-yellow-500 " size={"lg"} variant={"outline"} asChild>

                            <Link href={"/home"}>
                                <Cookie size={24} className="mr-2" />
                                ver platillos
                            </Link>
                        </Button>
                        <Button className="w-[300px] h-[60px] text-xl text-black bg-white" size={"lg"} variant={"outline"}>
                            <Contact size={24} className="mr-2" />
                            contactar
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;