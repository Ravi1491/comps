import React from "react";

const Button = ({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
}) => {
  return (
    <div>
      <button className="">{children}</button>
    </div>
  );
};

Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);
    if (count > 1) {
      throw new Error("You can only use one variation at a time");
    }
  },
};

export default Button;
