import React from "react";
import * as Lucide from "lucide-react";

const SafeIcon = ({ name, size = 24, color = "currentColor", className = "" }) => {
  const IconComponent = Lucide[name] || Lucide.Code;
  return <IconComponent size={size} color={color} className={className} strokeWidth={2} />;
};

export default SafeIcon; // This MUST be 'export default'