import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/Routes.tsx";
import { Provider } from "react-redux";
import { persistor, store } from "./store/store.ts";
import { PersistGate } from "redux-persist/integration/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from 'react-hot-toast';

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
       <Toaster position="top-right" reverseOrder={false} />
      <QueryClientProvider client={queryClient}>
        <PersistGate loading={null} persistor={persistor}>
          <RouterProvider router={routes} />
        </PersistGate>
      </QueryClientProvider>
    </Provider>
  </StrictMode>
);
