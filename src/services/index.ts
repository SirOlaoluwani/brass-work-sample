import { BASE_URL } from "@env";
import axios, { AxiosRequestConfig } from "axios";

// Axios Config
axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post.Accept = "application/json";

export interface ServerResponse {
  data: ServerData;
}

export interface ServerData {
  status: boolean;
  data: unknown;
  message?: string;
}

export async function makeAPICall(
  config: AxiosRequestConfig
): Promise<ServerResponse> {
  try {
    const response = await axios(config);
    if (!response.data?.status) {
      throw new Error(response.data?.message ?? "");
    }
    return Promise.resolve(response);
  } catch (error: unknown) {
    return Promise.reject(error);
  }
}
