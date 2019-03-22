import { CardOptions, Cards } from '../../../util/Constants';

const generateCardModel = (cards, cardName) => {
  const options = CardOptions[cardName];
  const card = cards[cardName];

  if (!card) {
    return {};
  }

  return {
    ...card,
    ...options,
    ...{ valueFormatted: options.format.replace('${0}', card.value) }, // eslint-disable-line no-template-curly-in-string
  };
};

const build = cards => ({
  produccionDia: generateCardModel(cards, Cards.produccionDia),
  ventaDia: generateCardModel(cards, Cards.ventaDia),
  paxDia: generateCardModel(cards, Cards.paxDia),
  ticketPromedioDia: generateCardModel(cards, Cards.ticketPromedioDia),
});

export const CardModelBuilder = () => ({
  build,
});
