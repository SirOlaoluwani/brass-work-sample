import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "white",
  },
  scrollView: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  amountTitle: {
    fontSize: 14,
    opacity: 0.5,
    marginBottom: 8,
  },
  amountValue: {
    fontSize: 18,
  },
  statusBadge: {
    backgroundColor: "grey",
    borderRadius: 20,
    padding: 10,
  },
  statusBadgeText: {
    color: "white",
  },
  contentCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
  },
  contentTitle: {
    fontWeight: "300",
    width: "40%",
  },
  contentValue: {
    fontWeight: "700",
    width: "60%",
    textAlign: "right",
  },
});
