import className from "classnames";
const Button = ({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...props
}) => {
  const classes = className(
    props.className,
    "flex items-center py-1.5 px-3 border",
    {
      "border-blue-500 bg-blue-500 text-white": primary,
      "border-gray-500 bg-gray-500 text-white": secondary,
      "border-green-500 bg-green-500 text-white": success,
      "border-yellow-400 bg-yellow-400 text-white": warning,
      "border-red-500 bg-red-500 text-white": danger,
      "rounded-full": rounded,
      "bg-white": outline,
      "text-blue-500": outline && primary,
      "text-gray-500": outline && secondary,
      "text-green-500": outline && success,
      "text-yellow-400": outline && warning,
      "text-red-500": outline && danger,
    }
  );

  return (
    <button {...props} className={classes}>
      {children}
    </button>
  );
};
Button.propTypes = {
  checkVariation: ({ success, primary, secondary, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);
    if (count > 1) {
      throw new Error("Only one variation allowed");
    }
  },
};
export default Button;
