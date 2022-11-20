export const themes = [
  {
    isColor: true,
    palette: [
      [227, 227, 227],
      [36, 120, 143],
      [132, 141, 171],
      [171, 204, 177],
    ],
  },
  {
    isColor: false,
    palette: [
      [58, 58, 58],
      [100, 100, 100],
      [192, 192, 192],
      [220, 220, 220],
    ],
  },
];

export const getPalette = (useThemeColor) => {
  return themes.find((t) => t.isColor === useThemeColor).palette;
};
