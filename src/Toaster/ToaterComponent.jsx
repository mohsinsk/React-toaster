import {
  FaCheck,
  FaXmark,
  FaInfo,
  FaTriangleExclamation,
  FaSkull,
} from "react-icons/fa6";

import Styles from "./Toaster.module.css";

const IconsMapping = {
  info: <FaInfo />,
  success: <FaCheck />,
  warning: <FaTriangleExclamation />,
  danger: <FaSkull />,
};

export default function Toaster({
  type,
  position,
  animation,
  text,
  onClose,
  customColor,
}) {
  return (
    <div
      className={`${Styles.toaster} ${Styles[type]}  ${Styles[position]} ${Styles[animation]}`}
      style={{
        backgroundColor: customColor || "auto",
      }}
    >
      <span>{IconsMapping[type]}</span>
      <span>{text}</span>
      <span>
        <FaXmark className={Styles.close} onClick={onClose} />
      </span>
    </div>
  );
}
