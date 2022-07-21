import { Theme } from "../styles/theme";

export const getFromTheme =
  <P extends keyof Theme>(
    property: P,
    propertyValue?: Theme[P] extends string ? never : keyof Theme[P]
  ) =>
  ({ theme }: { theme: Theme }) => {
    const cssProperty = theme[property];
    if (!propertyValue) {
      return cssProperty;
    }
    return cssProperty[propertyValue];
  };
