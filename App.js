import { DefaultTheme } from "react-native-paper";
import RootNavigation from "./src";

export default function App() {
  const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: "#BFF5D0",
  },
};
  return (<RootNavigation />);
}
