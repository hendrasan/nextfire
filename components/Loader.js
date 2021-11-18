export default function Loader({ show }) {
  return show ? <div className="loader animate-spin"></div> : null;
}
