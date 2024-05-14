import SearchBox from "@/components/ui/search-box";
import api from "@/lib/api";
import Link from "next/link";

const Page = async (
  {searchParams}: {searchParams: {q:string} }
) => {
  const restaurants = await api.search(searchParams.q || "");

  return (
    <div>
      <div className="sticky top-0  py-1">
      <SearchBox />
      </div>
      <section className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3 py-2">
        {restaurants.map((restaurant) => {
          return (
            <article key={restaurant.id}>
              <img
                alt={restaurant.name}
                className="mb-3 h-[300px] w-full object-cover"
                src={restaurant.image}
              />
              <h2 className="inline-flex gap-2 text-lg font-bold">
                <Link href={`/home/${restaurant.id}`}>
                  <span>{restaurant.name}</span>
                </Link>

                <small className="inline-flex gap-1">
                  <span>⭐</span>
                  <span>{restaurant.score}</span>
                  <span className="font-normal opacity-75">({restaurant.ratings})</span>
                </small>
              </h2>
              <p className="opacity-90">
                {restaurant.description.substring(0, 70)}...
                </p>
            </article>
          );
        })}
      </section>
    </div>
  );
}

export default Page;