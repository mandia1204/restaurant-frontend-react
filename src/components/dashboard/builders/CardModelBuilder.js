import { CardOptions } from '../../../util/Constants';

const generateCardModel = (cards, cardName) => {
  const options = CardOptions[cardName];
  const card = cards[cardName];

  if (!card) {
    return {};
  }

  return { ...card, ...options, ...{ valueFormatted: options.format.replace('${0}', card.value) } }; // eslint-disable-line no-template-curly-in-string
};

const build = cards => ({
  produccionDia: generateCardModel(cards, 'PRODUCCION_DIA'),
  ventaDia: generateCardModel(cards, 'VENTA_DIA'),
  paxDia: generateCardModel(cards, 'PAX_DIA'),
  ticketPromedioDia: generateCardModel(cards, 'TICKET_PROMEDIO_DIA'),
});

export const CardModelBuilder = () => ({
  build,
});
