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

// export const getFontData = async (): Promise<FontData> => {
//   try {
//     const response = await fetch("/data.json"); // Adjust the path to your JSON file
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("Error fetching font data:", error);
//     throw error;
//   }
// };

export const FontData: FontData = {
  "ABeeZee": {
    "400": "https://fonts.gstatic.com/s/abeezee/v22/esDR31xSG-6AGleN2tWkkJUEGpA.woff2",
    "400italic": "https://fonts.gstatic.com/s/abeezee/v22/esDT31xSG-6AGleN2tCUkp8DOJKuGA.woff2",
  },
  "Abel": {
    "400": "https://fonts.gstatic.com/s/abel/v18/MwQ5bhbm2POE2V9BPbh5uGM.woff2"
  },
  "Abhaya Libre": {
    "400": "https://fonts.gstatic.com/s/abhayalibre/v14/e3tmeuGtX-Co5MNzeAOqinEQfEnXgPRE4g.woff2",
    "500": "https://fonts.gstatic.com/s/abhayalibre/v14/e3t5euGtX-Co5MNzeAOqinEYj2rCrdZJyIU9BQ.woff2",
    "600": "https://fonts.gstatic.com/s/abhayalibre/v14/e3t5euGtX-Co5MNzeAOqinEYo23CrdZJyIU9BQ.woff2",
    "700": "https://fonts.gstatic.com/s/abhayalibre/v14/e3t5euGtX-Co5MNzeAOqinEYx2zCrdZJyIU9BQ.woff2",
    "800": "https://fonts.gstatic.com/s/abhayalibre/v14/e3t5euGtX-Co5MNzeAOqinEY22_CrdZJyIU9BQ.woff2"
  },
  "Aboreto": {
    "400": "https://fonts.gstatic.com/s/aboreto/v2/5DCXAKLhwDDQ4N8bpKPUAk6t1Sc.woff2"
  },
  "Abril Fatface": {
    "400": "https://fonts.gstatic.com/s/abrilfatface/v19/zOL64pLDlL1D99S8g8PtiKchq-dmjcDidBc.woff2"
  }
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









  