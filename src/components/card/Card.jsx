import React from "react";
import "./card.scss";
import Modal from '../modal/Modal'
import { useModal } from "react-modal-hook";


const defaultImage =
  "https://images.pexels.com/photos/4464918/pexels-photo-4464918.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";

const Card = ({ title, subTitle, text, bottomText, img }) => {
  const [showModal, hideModal] = useModal(
    ({ in: open, onExited}) => (
      <Modal
        title={title}
        subTitle={subTitle}
        text={text}
        bottomText={bottomText}
        img={img ? `https://image.tmdb.org/t/p/w500${img}` : defaultImage}
        open={open}
        onCancel={hideModal}
      >
      </Modal>
    ),[]
  );

  return (
    <div className="card" onClick={showModal}>
      <img
        className="card-img"
        src={img ? `https://image.tmdb.org/t/p/w500${img}` : defaultImage}
        alt="movie"
      />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <strong className="card-subTitle">{subTitle}</strong>
        <p className="card-text">{text}</p>
        <span className="card-bottomText">{bottomText}</span>
      </div>
    </div>
  );
};

export default Card;
