export const whatsappNumber = "5517997031951";

export type WhatsAppContext = "home" | "economia" | "financiamento" | "test-ride" | "modelos";

export const whatsappMessages: Record<WhatsAppContext, string> = {
  home: "Oi! Vi o site da Moto Show e quero saber mais sobre as scooters eletricas",
  economia: "Oi! Quero entender melhor a economia com scooter eletrica",
  financiamento: "Oi! Quero simular o financiamento de uma scooter",
  "test-ride": "Oi! Quero agendar meu test ride gratuito",
  modelos: "Oi! Quero conhecer os modelos de scooters eletricas disponiveis"
};

export function whatsappUrl(context: WhatsAppContext, extra?: string) {
  const message = extra ? `${whatsappMessages[context]} ${extra}` : whatsappMessages[context];
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}
