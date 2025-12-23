import { StyleSheet } from "react-native";
const BACK_BTN_WIDTH = 30;
export const s = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  back_btn: {
    // backgroundColor:"blue",
    width: BACK_BTN_WIDTH,
  },
  header_txts: {
    flex: 1,
    marginRight: BACK_BTN_WIDTH,
    alignItems: "center",
    // backgroundColor:"blue",
  },
  subtitle: {
    fontSize: 20,
  },
});
