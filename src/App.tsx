// App.tsx
import "./App.css"
import React, { useState, useEffect } from "react";
import FontSelector from "./FontSelector";
import {getFontVariants, getClosestVariant } from "./fontData";

const App: React.FC = () => {
  const [text, setText] = useState<string>("");
  const [selectedFont, setSelectedFont] = useState<string>("Arial");
  const [selectedVariant, setSelectedVariant] = useState<string>("400");
  const [italic, setItalic] = useState<boolean>(false);

  useEffect(() => {
    // Load saved data from localStorage
    const savedText = localStorage.getItem("text");
    const savedFont = localStorage.getItem("font");
    const savedVariant = localStorage.getItem("variant");
    const savedItalic = localStorage.getItem("italic");

    if (savedText) setText(savedText);
    if (savedFont) setSelectedFont(savedFont);
    if (savedVariant) setSelectedVariant(savedVariant);
    if (savedItalic) setItalic(savedItalic === "true");
  }, []);

  useEffect(() => {
    // Save data to localStorage
    localStorage.setItem("text", text);
    localStorage.setItem("font", selectedFont);
    localStorage.setItem("variant", selectedVariant);
    localStorage.setItem("italic", italic.toString());
  }, [text, selectedFont, selectedVariant, italic]);

  const handleFontChange = (font: string) => {
    const variants = getFontVariants(font);
    const closestVariant = getClosestVariant(
      { weight: selectedVariant, italic },
      variants
    );
    setSelectedFont(font);
    setSelectedVariant(closestVariant.weight);
    setItalic(closestVariant.italic);
  };

  const handleVariantChange = (variant: string) => {
    setSelectedVariant(variant);
  };

  const handleItalicToggle = () => {
    setItalic(!italic);
  };

  const handleSave = () => {
    // Implement save functionality here
    alert("Text saved!");
  };

  const handleReset = () => {
    // Implement reset functionality here
    setText("");
  };

  return (
    <div className="main">
      <div className="selector_wrapper">
        <FontSelector
          selectedFont={selectedFont}
          onFontChange={handleFontChange}
          onVariantChange={handleVariantChange}
          onItalicToggle={handleItalicToggle}
        />
      </div>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{
          fontFamily: selectedFont,
          fontWeight: selectedVariant,
          fontStyle: italic ? "italic" : "normal",
        }}
      />
      <div className="save_reset_wrapper">
        <button onClick={handleSave}>Save</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default App;
