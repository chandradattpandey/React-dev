import { useState } from "react";
import Alert from "./Alert";

interface Props {
text: string;
}

const Button = ({text}: Props) => {
  const [alertComp, setAlertComp] = useState(false);

  const alertOpen = () =>{
    setAlertComp(true);
  }

  const alertClose = () => {
    setAlertComp(false);
  }

  return (
    <>
    { alertComp && <Alert onClose = {alertClose} ></Alert>}
    <button className="btn btn-primary" onClick={alertOpen}>{text}</button> &nbsp;
    <button className="btn btn-danger" onClick={alertClose}>close</button>
    </>
  )
}

export default Button