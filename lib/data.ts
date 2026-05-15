import {
  BatteryCharging,
  CalendarCheck,
  CurrencyDollar,
  Gauge,
  MapPin,
  ShieldCheck,
  Sparkle,
  Storefront,
  Wrench
} from "@phosphor-icons/react/dist/ssr";

export const business = {
  name: "Moto Show Mirassol",
  address: "Av. Neid Maluli Fares, 1021, Lot. Res. Golden Park, Mirassol/SP",
  shortAddress: "Av. Neid Maluli Fares, 1021",
  city: "Mirassol/SP",
  whatsapp: "(17) 99703-1951",
  instagram: "https://instagram.com/motoshowmirassol",
  seller: "Eduardo",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Av.%20Neid%20Maluli%20Fares%2C%201021%2C%20Mirassol%20SP",
  hours: "Segunda a sabado, consulte horarios pelo WhatsApp"
};

export const models = [
  {
    name: "Volt City S",
    autonomy: "55 km",
    speed: "45 km/h",
    power: "1200 W",
    price: "12x de R$ 489",
    cash: "A partir de R$ 5.890",
    color: "#FF6B00",
    slug: "Volt City S"
  },
  {
    name: "Aima Urban",
    autonomy: "70 km",
    speed: "50 km/h",
    power: "1500 W",
    price: "18x de R$ 379",
    cash: "A partir de R$ 6.490",
    color: "#00C853",
    slug: "Aima Urban"
  },
  {
    name: "NIU Lite",
    autonomy: "65 km",
    speed: "48 km/h",
    power: "1400 W",
    price: "24x de R$ 299",
    cash: "A partir de R$ 6.990",
    color: "#E0E0E0",
    slug: "NIU Lite"
  },
  {
    name: "Super Soco Flex",
    autonomy: "85 km",
    speed: "55 km/h",
    power: "1800 W",
    price: "36x de R$ 259",
    cash: "A partir de R$ 7.990",
    color: "#FF8A33",
    slug: "Super Soco Flex"
  }
];

export const valueCards = [
  {
    title: "Economia de ate R$400/mes",
    description:
      "Enquanto a gasolina pesa todo mes, a eletrica roda por centavos e deixa dinheiro no bolso.",
    stat: "R$0,08/km vs R$0,45/km",
    icon: CurrencyDollar,
    className: "md:col-span-2 md:row-span-2"
  },
  {
    title: "Manutencao quase zero",
    description: "Sem troca de oleo, sem filtro, sem correia. O essencial fica simples.",
    stat: "Menos paradas",
    icon: Wrench,
    className: "md:col-span-1"
  },
  {
    title: "Zero emissao",
    description: "Voce se locomove em silencio e sem soltar fumaca pelo caminho.",
    stat: "0 ton/ano",
    icon: Sparkle,
    className: "md:col-span-1"
  },
  {
    title: "Loja fisica em Mirassol",
    description:
      "Toque, teste, fale com Eduardo e saia com suporte local de verdade.",
    stat: "Assistencia local",
    icon: Storefront,
    className: "md:col-span-2"
  }
];

export const trustItems = [
  "Aima",
  "NIU",
  "Voltz",
  "Super Soco",
  "Moto Show",
  "Garantia de fabrica",
  "Assistencia local",
  "Parcelas ate 48x"
];

export const testimonials = [
  {
    name: "Marcos A.",
    city: "Mirassol",
    model: "Aima Urban",
    text: "Eu usava a moto todo dia para trabalhar. A economia apareceu no primeiro mes.",
    imageToken: "IMG_CLIENTE_1"
  },
  {
    name: "Renata P.",
    city: "Sao Jose do Rio Preto",
    model: "Volt City S",
    text: "Fui testar sem compromisso e me surpreendi. Silenciosa, leve e muito facil de pilotar.",
    imageToken: "IMG_CLIENTE_2"
  },
  {
    name: "Carlos M.",
    city: "Mirassol",
    model: "NIU Lite",
    text: "Comprei pela parcela e fiquei pela praticidade. O atendimento do Eduardo fez diferenca.",
    imageToken: "IMG_CLIENTE_3"
  },
  {
    name: "Juliana T.",
    city: "Bady Bassitt",
    model: "Super Soco Flex",
    text: "A moto é linda e chama atencao onde passa. Ja indiquei pra dois amigos do trabalho!",
    imageToken: "IMG_CLIENTE_4"
  },
  {
    name: "Fernando V.",
    city: "Mirassol",
    model: "Aima Urban",
    text: "Parei de me preocupar com o preço da gasolina. Ligo na tomada e no outro dia ta pronta pra rodar.",
    imageToken: "IMG_CLIENTE_5"
  },
  {
    name: "Patricia L.",
    city: "Neves Paulista",
    model: "Volt City S",
    text: "Atendimento impecável! O Eduardo tirou todas as minhas duvidas e o financiamento foi super rapido.",
    imageToken: "IMG_CLIENTE_6"
  }
];

export const processSteps = [
  { title: "Escolha o modelo", icon: Gauge },
  { title: "Simule online", icon: CurrencyDollar },
  { title: "Aprovacao rapida", icon: ShieldCheck },
  { title: "Saia pilotando", icon: BatteryCharging }
];

export const testRideSteps = [
  { title: "Agende pelo WhatsApp", description: "Escolha o melhor dia com Eduardo.", icon: CalendarCheck },
  { title: "Venha ate a loja", description: "Estamos na Av. Neid Maluli Fares.", icon: MapPin },
  { title: "Pilote sem compromisso", description: "Traga CNH A ou ACC e sinta a diferenca.", icon: Gauge }
];
