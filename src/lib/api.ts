interface Restaurant {
  id: string;
  name: string;
  image: string;
  description: string;
  address: string;
  score: number;
  ratings: number;
}

const restaurants: Restaurant[] = [
  
  {
    id: "1",
    name: "ViaVia Cafe Ayacucho",
    description: "ViaVia Cafe Ayacucho es un restaurante y hotel ubicado en el centro histórico de Ayacucho, frente a la Plaza de Armas. Ofrece una vista panorámica única de la ciudad y una carta con platos elaborados con insumos locales e internacionales. El restaurante también cuenta con un bar donde se puede disfrutar de una variedad de bebidas. El hotel dispone de habitaciones cómodas y bien equipadas, así como de wifi gratuito y recepción 24 horas.",
    address: "Portal Constitución 4, Ayacucho 05003, Perú (frente a la Plaza de Armas)",
    score: 4.5,
    ratings: 150,
    image: "https://media-cdn.tripadvisor.com/media/photo-w/08/df/84/ed/viavia-cafe-ayacucho.jpg",
  },
  {
    id: "2",
    name: "La Casona",
    description: "Tipo de comida: Pizzas, pollos a la brasa, parrillas Horario de atención: Lunes a domingo, de 11:00 a.m. a 11:00 p.m Teléfono: +51 943 942 274",
    address: "Jr. Sur 463, Ayacucho 05003,",
    score: 3.5,
    ratings: 130,
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/dc/5b/0a/20161212-143015-largejpg.jpg?w=1200&h=-1&s=1",
  },
  {
    id: "3",
    name: "Antaqa | Café De Especialidad",
    description: "Antaqa | Café De Especialidad es un café ubicado en el centro histórico de Ayacucho. Ofrece una variedad de cafés de especialidad, así como pasteles, sándwiches y otras opciones para comer. El café tiene un ambiente acogedor y moderno, y es un lugar popular para reunirse con amigos o trabajar.",
    address: "Jr, Jirón Tres Máscaras 510, Ayacucho 05003",
    score: 5,
    ratings: 170,
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/48/37/20/barrita-de-cafe-de-especialida.jpg?w=1200&h=-1&s=1",
  },
  {
    id: "4",
    name: "Complejo Recreacional Villa Barboza",
    description: "El Complejo Recreacional Villa Barboza es un restaurante y centro de recreación ubicado en Ayacucho, Perú. Ofrece una variedad de platos típicos de la cocina peruana e internacional, así como parrilladas y carnes a la brasa. El complejo también cuenta con piscina, áreas verdes, juegos para niños y un salón de eventos. Es un lugar ideal para disfrutar de una comida en familia o con amigos, o para celebrar un evento especial.",
    address: " Centro poblado Luricocha s/n, Ayacucho",
    score: 3.5,
    ratings: 150,
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/e8/79/6b/contamos-con-una-piscina.jpg?w=1200&h=-1&s=1",
  },
  
];

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const api = {
  list: async (): Promise<Restaurant[]> => {
    await sleep(750);

    return restaurants;
  },
  fetch: async (id: Restaurant["id"]): Promise<Restaurant> => {
    await sleep(750);

    const restaurant = restaurants.find((restaurant) => restaurant.id === id);

    if (!restaurant) {
      throw new Error(`Restaurant with id ${id} not found`);
    }

    return restaurant;
  },
  search: async (query: string): Promise<Restaurant[]> => {
    // Obtenemos los restaurantes
    const results = await api.list().then((restaurants) =>
      // Los filtramos por nombre
      restaurants.filter((restaurant) =>
        restaurant.name.toLowerCase().includes(query.toLowerCase()),
      ),
    );

    // Los retornamos
    return results;
  },
};

export default api;
