import './Popup.css'
const Popup = (props) => {
  const {trigger, setTrigger} = props
  return (trigger) ? (
    <div className="popup">
      <div className="popup-inner">
        <button className='close-btn' onClick={()=>setTrigger(false)}>close</button>
        {props.children}
      </div>
    </div>
  ) : "";
};

export default Popup;