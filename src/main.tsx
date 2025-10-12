import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/Routes";
import { Provider } from "react-redux";
import { persistor, store } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "./context/ThemeContext";  // Import ThemeProvider

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Toaster position="top-right" reverseOrder={false} />
      <QueryClientProvider client={queryClient}>
        <PersistGate loading={null} persistor={persistor}>
          {/* Wrap the app with ThemeProvider */}
          <ThemeProvider>
            <RouterProvider router={routes} />
          </ThemeProvider>
        </PersistGate>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
