import "./Button.css";

const Button = ({ player, className, disabled }) => {
  return (
    <>
      <button
        className={className}
        onClick={() => {
          player();
        }}
        disabled={disabled}
      ></button>
    </>
  );
};

export default Button;
