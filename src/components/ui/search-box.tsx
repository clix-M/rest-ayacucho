'use client'

import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "./button";
import { Input } from "./input";
import { Search } from "lucide-react";
import Link from "next/link";

export default function SearchBox() {
  const router = useRouter();
  const searchParams = useSearchParams();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    // Prevenimos que la página se refresque al enviar el formulario
    event.preventDefault();

    // Obtenemos el valor del input
    const query = event.currentTarget.query.value;

    // Redireccionamos al index con una query
    router.push(`/home/?q=${query}`);
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center justify-center gap-2 mb-4 py-1">
      {/* Inicializamos el input para que contenga el valor actual de la query */}
      <Input defaultValue={searchParams.get('q') || ''} className="px-2" name="query"  placeholder="escribe el nombre del restaurante..."/>
      <Button type="submit" size={"lg"}>
        <Search size={24}  className="mr-2"/>
        Buscar</Button>
    </form>
  );
}