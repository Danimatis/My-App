import { Link } from "react-router-dom";
import remove from "../../icons/delete.png";
import edit from "../../icons/edit.png";

const Card = ({
  card: {
    bizImage: image,
    bizName: name,
    bizAddress: address,
    bizPhone: phone,
    bizDescription: description,
    bizNumber: businessNumber,
    _id,
  },
}) => {
  return (
    <>
      <div className="card m-2" style={{ width: "18rem" }}>
        {image && <img src={image} className="card-img-top" alt={image} />}
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Address: {address}</li>
          <li className="list-group-item">Phone Number: {phone}</li>
          <li className="list-group-item">Business Number: {businessNumber}</li>
        </ul>
        <div className="card-body d-flex justify-content-between">
          <Link to={`/cards/${_id}`}>
            <img src={edit} alt="Edit Card" height={50} width={50} />
          </Link>
          <Link to={`/cards/delete/${_id}`}>
            <img src={remove} alt="Delete Card" height={50} width={50} />
          </Link>
        </div>
      </div>
    </>
  );
};
export default Card;
