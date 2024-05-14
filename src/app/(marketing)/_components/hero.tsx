import Image from "next/image";

export function Hero() {
    return (
        <div className="absolute h-full w-full -z-50">
         <Image 
            fill
            alt="hero"
            src="/hero.jpg"
            className="object-cover"
         />
        </div>
    );
    }