import React from "react";

// Thirdparty
import { QueryClient, QueryClientProvider } from "react-query";

//Navigation
import RootNavigation from "./src/navigation";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RootNavigation />
    </QueryClientProvider>
  );
}
