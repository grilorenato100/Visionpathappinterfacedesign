import { createBrowserRouter, Navigate } from "react-router";
import { RootLayout } from "./components/RootLayout";
import { FormularioPage } from "./components/FormularioPage";
import { VagasPage } from "./components/VagasPage";
import { SuportePage } from "./components/SuportePage";
import { AuthPage } from "./components/AuthPage";

export const router = createBrowserRouter([
  {
    path: "/auth",
    Component: AuthPage,
  },
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, element: <Navigate to="/formulario" replace /> },
      { path: "formulario", Component: FormularioPage },
      { path: "vagas", Component: VagasPage },
      { path: "suporte", Component: SuportePage },
    ],
  },
]);
