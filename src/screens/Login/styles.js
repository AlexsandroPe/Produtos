import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
  welcomeContainer: {
    flex: 1,
    justifyContent: "center",
    gap: 80,
    alignItems: "center",
  },

  welcomeHello: {
    fontSize: 40,
    color: "#fff",
    fontWeight: "semibold",
  },

  mainButton: {
    backgroundColor: "#3E5C76",
    width: 250,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 14,
  },

  mainButtonTitle: {
    fontSize: 18,
    fontWeight: "semibold",
    color: "#fff",
  },

  mainInput: {
    borderBottomWidth: 1,
    height: 50,
    width: 300,
    color: "#fff",
    fontWeight: 700,
    fontSize: 14,
  },
  mainInputNeg: {
    borderBottomWidth: 1,
    height: 50,
    width: 300,
    fontWeight: 600,

    color: "#fff",
    fontSize: 15,
  },
});
