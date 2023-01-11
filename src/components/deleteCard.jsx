import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import cardsServices from "../services/cardServices";

const DeleteCard = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const deleteCard = async () => {
      await cardsServices.deleteCard(id);
      toast("Gone");
      navigate("/myCards");
    };
    deleteCard();
  }, []);
  return null;
};
export default DeleteCard;
