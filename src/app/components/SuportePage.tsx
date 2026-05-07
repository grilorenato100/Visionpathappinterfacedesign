import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { MessageCircle, Mail, Phone, HelpCircle, Send } from "lucide-react";
import { useState } from "react";

export function SuportePage() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [assunto, setAssunto] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Mensagem enviada com sucesso! Nossa equipe entrará em contato em breve.");
    setNome("");
    setEmail("");
    setAssunto("");
    setMensagem("");
  };

  const faqItems = [
    {
      pergunta: "Como funciona o algoritmo de IA?",
      resposta: "Nossa IA analisa seu perfil, habilidades e preferências para encontrar as vagas mais adequadas."
    },
    {
      pergunta: "As vagas são reais?",
      resposta: "Sim! Trabalhamos com empresas parceiras para trazer oportunidades reais e atualizadas."
    },
    {
      pergunta: "Como me candidatar a uma vaga?",
      resposta: "Basta clicar no botão 'Candidatar-se' na vaga desejada e seguir as instruções."
    },
    {
      pergunta: "Posso alterar meu perfil depois?",
      resposta: "Sim, você pode atualizar suas informações a qualquer momento no formulário."
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white mb-2">Central de Suporte</h2>
        <p className="text-gray-400">
          Estamos aqui para ajudar! Entre em contato ou consulte nossas perguntas frequentes.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Formulário de Contato */}
        <Card className="bg-zinc-900 border-zinc-800 p-6">
          <h3 className="text-xl font-bold text-white mb-6">Envie sua Mensagem</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="nome" className="text-gray-200 font-medium">Nome</Label>
              <Input
                id="nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Seu nome completo"
                className="bg-zinc-800 border-zinc-600 text-white placeholder:text-gray-400 focus:border-purple-500"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email-suporte" className="text-gray-200 font-medium">E-mail</Label>
              <Input
                id="email-suporte"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu@email.com"
                className="bg-zinc-800 border-zinc-600 text-white placeholder:text-gray-400 focus:border-purple-500"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="assunto" className="text-gray-200 font-medium">Assunto</Label>
              <Input
                id="assunto"
                value={assunto}
                onChange={(e) => setAssunto(e.target.value)}
                placeholder="Como podemos ajudar?"
                className="bg-zinc-800 border-zinc-600 text-white placeholder:text-gray-400 focus:border-purple-500"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="mensagem" className="text-gray-200 font-medium">Mensagem</Label>
              <Textarea
                id="mensagem"
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
                placeholder="Descreva sua dúvida ou problema..."
                className="bg-zinc-800 border-zinc-600 text-white placeholder:text-gray-400 min-h-[150px] focus:border-purple-500"
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 py-6"
            >
              <Send className="w-4 h-4 mr-2" />
              Enviar Mensagem
            </Button>
          </form>
        </Card>

        {/* FAQ e Contatos */}
        <div className="space-y-6">
          {/* FAQ */}
          <Card className="bg-zinc-900 border-zinc-800 p-6">
            <h3 className="text-xl font-bold text-white mb-4">Perguntas Frequentes</h3>
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <div key={index} className="border-b border-zinc-800 pb-4 last:border-0">
                  <p className="text-white font-semibold mb-2">{item.pergunta}</p>
                  <p className="text-gray-400 text-sm">{item.resposta}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Contatos Diretos */}
          <Card className="bg-zinc-900 border-zinc-800 p-6">
            <h3 className="text-xl font-bold text-white mb-4">Contato Direto</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-md bg-black border border-zinc-800">
                  <Mail className="w-5 h-5 text-purple-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">E-mail</p>
                  <p className="text-white">suporte@visionpath.com</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-3 rounded-md bg-black border border-zinc-800">
                  <Phone className="w-5 h-5 text-purple-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Telefone</p>
                  <p className="text-white">(11) 9999-9999</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-3 rounded-md bg-black border border-zinc-800">
                  <MessageCircle className="w-5 h-5 text-purple-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Horário</p>
                  <p className="text-white">Seg-Sex: 9h às 18h</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
