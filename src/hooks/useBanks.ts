import { Alert } from "react-native";
import { useQuery } from "react-query";
import { ServerData } from "src/services";
import * as BankAPI from "src/services/BankService";
import { Bank } from "src/types/banks";

export const useBanks = () => {
  return useQuery<ServerData, Error>("banks", BankAPI.getBanks, {
    onError: (error: any) => {
      Alert.alert("Failed to fetch banks", error?.message);
    },
  });
};
