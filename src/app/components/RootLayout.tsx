import { Outlet, Link, useLocation, useNavigate, Navigate } from "react-router";
import { Sparkles, HelpCircle, LogOut } from "lucide-react";

export function RootLayout() {
  const location = useLocation();
  const navigate = useNavigate();

  const isAuthenticated = sessionStorage.getItem("visionPathAuthenticated") === "true";

  if (!isAuthenticated) {
    return <Navigate to="/auth" replace />;
  }

  const handleLogout = () => {
    sessionStorage.removeItem("visionPathAuthenticated");
    navigate("/auth");
  };

  const navItems = [
    { path: "/formulario", label: "Formulário" },
    { path: "/vagas", label: "Vagas" },
  ];

  return (
    <div className="min-h-screen bg-black">
      <header className="border-b border-zinc-800 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-3">
                <Sparkles className="w-7 h-7 text-purple-500" />
                <h1 className="text-2xl font-bold text-white">VisionPath</h1>
              </div>

              <nav className="flex gap-1">
                {navItems.map((item) => {
                  const isActive = location.pathname === item.path;

                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`px-4 py-2 rounded-md transition-colors ${
                        isActive
                          ? "bg-purple-600 text-white"
                          : "text-gray-400 hover:text-white hover:bg-zinc-800"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
            </div>

            <div className="flex items-center gap-3">
              <Link
                to="/suporte"
                className="flex items-center gap-2 px-4 py-2 text-gray-400 hover:text-white hover:bg-zinc-800 rounded-md transition-colors"
              >
                <HelpCircle className="w-4 h-4" />
                Suporte
              </Link>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 text-gray-400 hover:text-white hover:bg-zinc-800 rounded-md transition-colors"
              >
                <LogOut className="w-4 h-4" />
                Sair
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        <Outlet />
      </main>
    </div>
  );
}
