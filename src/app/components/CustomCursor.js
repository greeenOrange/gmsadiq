import React from "react";
import AnimatedCursor from "react-animated-cursor";

function CustomCursor() {
  return (
    <AnimatedCursor
      innerSize={8}
      outerSize={18}
      outerAlpha={0.2}
      innerScale={1.7}
      outerScale={4}
      innerStyle={{
        backgroundColor: "var(--cursor-color)",
      }}
      clickables={[
        "a",
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        "label[for]",
        "select",
        "textarea",
        "button",
        ".link",
        {
          target: ".custom",
          options: {
            innerSize: 12,
            outerSize: 12,
            color: "#ff6b00",
            outerAlpha: 0.3,
            innerScale: 0.7,
            outerScale: 5,
          },
        },
      ]}
    />
  );
}

export default CustomCursor;
