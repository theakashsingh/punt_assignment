// FontSelector.tsx

// FontSelector.tsx
import React from "react";
import { FontData, getFontVariants } from "./fontData";

interface FontSelectorProps {
  selectedFont: string;
  onFontChange: (font: string) => void;
  onVariantChange: (variant: string) => void;
  onItalicToggle: () => void;
}

const FontSelector: React.FC<FontSelectorProps> = ({
  selectedFont,
  onFontChange,
  onVariantChange,
  onItalicToggle,
}) => {
  const fontVariants = getFontVariants(selectedFont);

  return (
    <div>
      <label>Font Family:</label>
     <select value={selectedFont} onChange={(e) => onFontChange(e.target.value)}>
      {Object.keys(FontData).map((font) => (
          <option key={font} value={font}>
            {font}
          </option>
        ))}
      </select>

      <label>Font Weight:</label>
      <select
        value={fontVariants.find((v) => v.weight === selectedFont)?.weight || "400"}
        onChange={(e) => onVariantChange(e.target.value)}
      >
        {fontVariants.map((variant) => (
          <option key={variant.weight} value={variant.weight}>
            {variant.weight}
          </option>
        ))}
      </select>

      <label>Italic:</label>
      <input type="checkbox" checked={fontVariants.find((v) => v.weight === selectedFont)?.italic || false} onChange={onItalicToggle} />
    </div>
  );
};

export default FontSelector;
