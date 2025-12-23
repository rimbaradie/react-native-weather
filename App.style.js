import { StyleSheet } from "react-native";
export const s = StyleSheet.create({
  container: {
    flex: 1,
  },
  img_background: {
    flex: 1,
    backgroundColor: "black",
  },
  img: {
    opacity: 0.75, //make background darker
  },
});
/*-------------------------------------
export default function App() {
  const arr = [1, 2, 3, 4, 5];
  const [one, two, three, ...rest] = arr;
  return (
    <>
      {one} {two} {three} {rest}
    </>
  );
}*/
