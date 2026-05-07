import { useState } from "react";
import { useNavigate } from "react-router";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { Lock, Mail, Sparkles, AlertCircle } from "lucide-react";

export function AuthPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErro("");

    if (!email.includes("@")) {
      setErro("Por favor, insira um email válido contendo @");
      return;
    }

    if (senha.length < 4) {
      setErro("A senha deve ter pelo menos 4 caracteres");
      return;
    }

    sessionStorage.setItem("visionPathAuthenticated", "true");
    sessionStorage.setItem("visionPathUserEmail", email);
    navigate("/formulario");
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-12 h-12 text-purple-500" />
            <h1 className="text-5xl font-bold text-white">VisionPath</h1>
          </div>
          <p className="text-gray-400 text-lg">Encontre sua carreira ideal com IA</p>
        </div>

        <Card className="bg-zinc-900 border-zinc-800 p-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-white mb-2">Bem-vindo</h2>
            <p className="text-gray-400">Faça login para continuar</p>
          </div>

          {erro && (
            <div className="mb-6 p-4 bg-red-900/20 border border-red-500/50 rounded-md flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-red-500" />
              <p className="text-red-400 text-sm">{erro}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-200 font-medium">
                <Mail className="w-4 h-4 inline mr-2" />
                E-mail
              </Label>
              <Input
                id="email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="exemplo@gmail.com"
                className="bg-zinc-800 border-zinc-600 text-white placeholder:text-gray-400 focus:border-purple-500 focus:bg-zinc-750 h-12"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="senha" className="text-gray-200 font-medium">
                <Lock className="w-4 h-4 inline mr-2" />
                Senha
              </Label>
              <Input
                id="senha"
                type="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                placeholder="Digite sua senha"
                className="bg-zinc-800 border-zinc-600 text-white placeholder:text-gray-400 focus:border-purple-500 focus:bg-zinc-750 h-12"
                required
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-gray-400">
                <input type="checkbox" className="rounded border-zinc-700 bg-black" />
                Lembrar-me
              </label>
              <a href="#" className="text-purple-500 hover:text-purple-400">
                Esqueceu a senha?
              </a>
            </div>

            <Button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white py-6 text-lg font-semibold"
            >
              Entrar no VisionPath
            </Button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-400">
              Não tem uma conta?{" "}
              <a href="#" className="text-purple-500 hover:text-purple-400 font-semibold">
                Cadastre-se gratuitamente
              </a>
            </p>
          </div>
        </Card>

        <div className="mt-6 text-center">
          <p className="text-xs text-gray-600">
            Ao entrar, você concorda com nossos Termos de Uso e Política de Privacidade
          </p>
        </div>
      </div>
    </div>
  );
}
