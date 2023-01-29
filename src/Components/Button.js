import CssClass from "../Css/Button.module.css";
import React from "react";
const Button = ({
  children,
  action,
  paddingX,
  paddingY,
  borderColor,
  hoverColor,
  backgroundColor,
  textHover,
  textColor,
}) => {
  return (
    <button
      className={`flex items-center relative justify-center overflow-hidden border-[1px] rounded-[4px] transition-all ease-in-out ${CssClass.button}`}
      onClick={action}
      style={{
        padding: `${paddingY} ${paddingX} ${paddingY} ${paddingX}`,
        borderColor: borderColor,
        '--color': textColor,
        '--colorHover': textHover,
        '--bgColor':backgroundColor,
        '--bgHover':hoverColor,
        '--borderColor':borderColor
      }}
    >
      <div className="relative z-[2]">
      {children}
      </div>
    </button>
  );
};
export default React.memo(Button);
