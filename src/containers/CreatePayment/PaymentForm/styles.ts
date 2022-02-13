import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "white",
  },
  container: {
    flex: 1,
    padding: 20,
  },
  scrollView: {
    flex: 1,
  },
  button: {
    backgroundColor: "#048b7e",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    textTransform: "uppercase",
  },
  inputError: {
    marginBottom: 8,
    color: "red",
  },
  disabledButton: {
    opacity: 0.5,
  },
});
