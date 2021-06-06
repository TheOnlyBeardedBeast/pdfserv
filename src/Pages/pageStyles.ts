import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  page: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
    fontFamily: "Raleway",
  },
  title: {
    fontSize: 20,
    fontFamily: "Raleway",
    fontWeight: 900,
    color: "#000000",
  },
  paragraph: {
    fontSize: 16,
    fontFamily: "Raleway",
    fontWeight: 400,
    color: "#000000",
    textAlign: "justify",
  },
  pageCenter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  header: {
    paddingBottom: 4,
    marginBottom: 16,
    borderBottom: "2 solid #000000",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    textAlign: "center",
    paddingBottom: 30,
  },
  small: {
    fontSize: 12,
    fontFamily: "Raleway",
    fontWeight: 400,
    color: "grey",
  },
  row: {
    display: "flex",
    flexDirection: "row",
  },
});
