import { useState } from "react";
import { useEffect } from "react";
import cardsServices from "../services/cardServices";

const UseCard = (id) => {
  const [card, setCard] = useState(null);
  useEffect(() => {
    const getCard = async () => {
      const { data } = await cardsServices.getCard(id);
      setCard(data);
    };
    getCard();
  }, [id]);
  return card;
};
export default UseCard;
