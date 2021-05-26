import FONT_FAMILIES from "./fontFamilies";
import FONT_SIZE from "./fontSize";

const APP_FONTS = {
  xxsRegular: { fontSize: FONT_SIZE.xxSmall, ...FONT_FAMILIES.regular },
  xsRegular: { fontSize: FONT_SIZE.xSmall, ...FONT_FAMILIES.regular },
  smRegular: { fontSize: FONT_SIZE.small, ...FONT_FAMILIES.regular },
  mdRegular: { fontSize: FONT_SIZE.medium, ...FONT_FAMILIES.regular },
  lgRegular: { fontSize: FONT_SIZE.large, ...FONT_FAMILIES.regular },
  xlRegular: { fontSize: FONT_SIZE.xLarge, ...FONT_FAMILIES.regular },
  xxlRegular: { fontSize: FONT_SIZE.xxLarge, ...FONT_FAMILIES.regular },
  xxxlRegular: { fontSize: FONT_SIZE.xxxLarge, ...FONT_FAMILIES.regular },

  xxsMedium: { fontSize: FONT_SIZE.xxSmall, ...FONT_FAMILIES.medium },
  xsMedium: { fontSize: FONT_SIZE.xSmall, ...FONT_FAMILIES.medium },
  smMedium: { fontSize: FONT_SIZE.small, ...FONT_FAMILIES.medium },
  mdMedium: { fontSize: FONT_SIZE.medium, ...FONT_FAMILIES.medium },
  lgMedium: { fontSize: FONT_SIZE.large, ...FONT_FAMILIES.medium },
  xlMedium: { fontSize: FONT_SIZE.xLarge, ...FONT_FAMILIES.medium },
  xxlMedium: { fontSize: FONT_SIZE.xxLarge, ...FONT_FAMILIES.medium },
  xxxlMedium: { fontSize: FONT_SIZE.xxxLarge, ...FONT_FAMILIES.medium },

  xxsBold: { fontSize: FONT_SIZE.xxSmall, ...FONT_FAMILIES.bold },
  xsBold: { fontSize: FONT_SIZE.xSmall, ...FONT_FAMILIES.bold },
  smBold: { fontSize: FONT_SIZE.small, ...FONT_FAMILIES.bold },
  mdBold: { fontSize: FONT_SIZE.medium, ...FONT_FAMILIES.bold },
  lgBold: { fontSize: FONT_SIZE.large, ...FONT_FAMILIES.bold },
  xlBold: { fontSize: FONT_SIZE.xLarge, ...FONT_FAMILIES.bold },
  xxlBold: { fontSize: FONT_SIZE.xxLarge, ...FONT_FAMILIES.bold },
  xxxlBold: { fontSize: FONT_SIZE.xxxLarge, ...FONT_FAMILIES.bold },
};

export default APP_FONTS;
