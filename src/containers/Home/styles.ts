import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  headerText: {
    fontSize: 20,
    color: "#20212475",
  },
  headerTextLogo: {
    color: "#048b7e",
    fontWeight: "700",
    fontSize: 30,
    marginBottom: 16,
  },
  headerSeparator: {
    height: 1,
    backgroundColor: "#9e9e9e47",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  recentTransactionsHeader: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#9e9e9e47",
    marginBottom: 16,
  },
  recentTransactionsHeaderText: {
    fontWeight: "700",
  },
  recentTransactionsItem: {
    paddingVertical: 8,
  },
});
