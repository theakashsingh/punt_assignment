import fontData from "../public/data.json"

// fontData.ts
export interface FontVariant {
  weight: string;
  italic: boolean;
}

export interface FontData {
  [key: string]: {
    [key: string]: string;
  };
}

export const FontData: FontData = {
  ...fontData
};

export const getFontVariants = (font: string): FontVariant[] => {
    const variants: FontVariant[] = [];
  for (const key in FontData[font]) {
    const parts = key.match(/(\d+)(italic)?/);
    if (parts) {
      const weight = parts[1];
      const italic = !!parts[2];
      variants.push({ weight, italic });
    }
  }
  return variants;
};

export const getClosestVariant = (target: FontVariant, variants: FontVariant[]): FontVariant => {
    const closestItalic = variants.find((v) => v.italic === target.italic);
  if (closestItalic) {
    return closestItalic;
  }
  const closestWeight = variants.reduce((prev, curr) => (
    Math.abs(Number(curr.weight) - Number(target.weight)) < Math.abs(Number(prev.weight) - Number(target.weight)) ? curr : prev
  ));
  return closestWeight;
};









  