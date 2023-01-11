import httpService from "./httpServices";

export function createCard(card) {
  return httpService.post("/cards", card);
}
export async function getCards() {
  return httpService.get("/cards/my-cards");
}
export function deleteCard(id) {
  return httpService.delete(`/cards/${id}`);
}
export function updateCard(id, card) {
  return httpService.put(`/cards/${id}`, card);
}
export function getCard(id, card) {
  return httpService.get(`/cards/${id}`, card);
}
const cardsServices = {
  createCard,
  getCards,
  getCard,
  deleteCard,
  updateCard,
};
export default cardsServices;
