import PageHeader from "./PageHeader";
import { Link } from "react-router-dom";
import newCard from "../icons/new-card.png";
import UseMyCards from "../hooks/useMyCards";
import Card from "./common/card";
const MyCards = () => {
  const cards = UseMyCards();
  return (
    <>
      <PageHeader title="My Cards" description="Here are Your Cards" />
      <Link to="/createCard">
        {" "}
        <img src={newCard} alt="Create Card" height={80} width={80} />
      </Link>
      <div className="d-flex flex-wrap justify-content-around">{!cards.length ? (
        <div>No Cards Yet...</div>
      ) : (
        cards.map((card, index) => {
          return <Card card={card} key={index}></Card>;
        })
      )}</div>
    </>
  );
};
export default MyCards;
