import { useFonts } from "expo-font";

export const useInitialize = () => {
  const [fontsLoaded] = useFonts({
    "Roboto-Bold": require("@Assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Medium": require("@Assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Regular": require("@Assets/fonts/Roboto-Regular.ttf"),
  });

  return { appReady: fontsLoaded };
};
