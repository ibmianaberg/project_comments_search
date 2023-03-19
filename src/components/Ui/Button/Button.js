import "./Button.css";

export const Button = ({ className, text, onClick, disabled }) => {
    
  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};
