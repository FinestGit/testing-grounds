import React from "react";

import "../styles/components/tooltip.scss";

interface TooltipProperties {
  type?: "info" | "error" | "warning" | "success";
  location?: "right" | "left" | "top" | "bottom";
  hasArrow?: boolean;
  tooltipText: string;
  hoverClass: string;
}

const Tooltip: React.FC<TooltipProperties> = ({
  type = "info",
  location = "bottom",
  hasArrow = false,
  hoverClass,
  tooltipText,
}): React.ReactElement => {
  const constructClassName = (): string => {
    const arrowClass = hasArrow ? "arrow" : "";
    return `${hoverClass} ${type} ${location} ${arrowClass}`;
  };

  return <span className={constructClassName()}>{tooltipText}</span>;
};

export default Tooltip;
