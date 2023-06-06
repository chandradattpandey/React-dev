
interface Props {
  onClose : ()=> void;
}
const Alert = ({onClose}:Props) => {

  return (
    <>
    <div className="alert alert-primary alert-dismissible">Alert
    <button type="button" className="btn-close" onClick={onClose} data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    </>
  )
}

export default Alert