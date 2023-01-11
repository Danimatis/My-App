import { useEffect } from "react";
import { useState } from "react";
import cardsServices from "../services/cardServices";

const UseMyCards = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    const getCards = async () => {
      const { data } = await cardsServices.getCards();
      setCards(data);
    };
    getCards();
  }, []);
  return cards;
};
export default UseMyCards;
