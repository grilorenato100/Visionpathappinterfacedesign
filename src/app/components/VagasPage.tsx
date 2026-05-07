import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Sparkles, MapPin, Building2, TrendingUp, DollarSign, Clock, Brain, ArrowLeft } from "lucide-react";

interface Vaga {
  id: number;
  titulo: string;
  empresa: string;
  localizacao: string;
  tipo: string;
  salario: string;
  nivel: string;
  match: number;
  descricao: string;
  habilidadesRequeridas: string[];
}

export function VagasPage() {
  const navigate = useNavigate();
  const [vagas, setVagas] = useState<Vaga[]>([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState<any>(null);

  useEffect(() => {
    // Recupera dados do formulário
    const data = sessionStorage.getItem("visionPathFormData");
    if (data) {
      setFormData(JSON.parse(data));
      // Simula processamento de IA
      setTimeout(() => {
        generateVagas(JSON.parse(data));
        setLoading(false);
      }, 2000);
    } else {
      setLoading(false);
    }
  }, []);

  const generateVagas = (data: any) => {
    // Gera vagas baseadas nos dados completos do formulário
    const nivelVaga = data.anosExperiencia === "sem-experiencia" || data.anosExperiencia === "0-1"
      ? "Júnior/Estágio"
      : data.anosExperiencia === "1-3" || data.anosExperiencia === "3-5"
      ? "Pleno"
      : "Sênior";

    const vagasGeradas: Vaga[] = [
      {
        id: 1,
        titulo: `Profissional de ${data.areaInteresse} ${nivelVaga}`,
        empresa: "TechVision Inovação",
        localizacao: data.regiao === "remoto" ? "Remoto" : data.regiao === "hibrido" ? "Híbrido" : "São Paulo - SP",
        tipo: data.preferenciaContrato === "clt" ? "CLT" : data.preferenciaContrato === "pj" ? "PJ" : "CLT",
        salario: data.pretensaoSalarial === "ate-2k" ? "R$ 1.500 - R$ 2.000"
          : data.pretensaoSalarial === "2k-4k" ? "R$ 2.000 - R$ 4.000"
          : data.pretensaoSalarial === "4k-6k" ? "R$ 4.000 - R$ 6.000"
          : data.pretensaoSalarial === "6k-8k" ? "R$ 6.000 - R$ 8.000"
          : data.pretensaoSalarial === "8k-12k" ? "R$ 8.000 - R$ 12.000"
          : "R$ 12.000 - R$ 18.000",
        nivel: nivelVaga,
        match: 95,
        descricao: `Oportunidade alinhada ao seu perfil de ${data.curso} com foco em ${data.areaInteresse}. Valorizamos profissionais com sua formação em ${data.instituicao}.`,
        habilidadesRequeridas: data.habilidades.split(',').slice(0, 4).map((h: string) => h.trim())
      },
      {
        id: 2,
        titulo: `Especialista em ${data.curso}`,
        empresa: "DataPath Analytics",
        localizacao: data.regiao === "remoto" ? "Remoto" : data.regiao === "hibrido" ? "Híbrido - SP" : "Rio de Janeiro - RJ",
        tipo: data.preferenciaContrato === "pj" ? "PJ" : "CLT",
        salario: data.pretensaoSalarial === "4k-6k" ? "R$ 4.000 - R$ 6.000"
          : data.pretensaoSalarial === "6k-8k" ? "R$ 6.000 - R$ 8.000"
          : "R$ 8.000 - R$ 12.000",
        nivel: nivelVaga,
        match: 88,
        descricao: `Profissional com ${data.nivelFormacao} para atuar em projetos estratégicos. Experiência em ${data.areaInteresse} será um diferencial.`,
        habilidadesRequeridas: data.habilidades.split(',').slice(1, 5).map((h: string) => h.trim())
      },
      {
        id: 3,
        titulo: `Coordenador de ${data.areaInteresse}`,
        empresa: "Innovation Labs",
        localizacao: data.regiao === "hibrido" ? "Híbrido - SP" : data.regiao === "remoto" ? "Remoto" : "São Paulo - SP",
        tipo: "CLT",
        salario: data.pretensaoSalarial === "8k-12k" ? "R$ 8.000 - R$ 12.000"
          : data.pretensaoSalarial === "12k-20k" ? "R$ 12.000 - R$ 20.000"
          : "R$ 10.000 - R$ 15.000",
        nivel: nivelVaga === "Júnior/Estágio" ? "Pleno" : "Sênior",
        match: 92,
        descricao: `Desenvolvimento de soluções inovadoras. Buscamos profissionais formados em ${data.instituicao} ou instituições similares.`,
        habilidadesRequeridas: data.habilidades.split(',').slice(0, 4).map((h: string) => h.trim())
      },
      {
        id: 4,
        titulo: `Analista ${nivelVaga} de ${data.curso}`,
        empresa: "Future Growth Inc",
        localizacao: data.regiao === "remoto" ? "Remoto" : "Belo Horizonte - MG",
        tipo: data.preferenciaContrato === "clt" ? "CLT" : "PJ",
        salario: data.pretensaoSalarial === "6k-8k" ? "R$ 6.000 - R$ 8.000"
          : data.pretensaoSalarial === "12k-20k" ? "R$ 12.000 - R$ 20.000"
          : "R$ 8.000 - R$ 14.000",
        nivel: nivelVaga,
        match: 85,
        descricao: `Oportunidade para crescimento profissional alinhada ao seu objetivo: ${data.objetivoCarreira.substring(0, 80)}...`,
        habilidadesRequeridas: data.habilidades.split(',').slice(2, 6).map((h: string) => h.trim())
      },
      {
        id: 5,
        titulo: `Consultor de ${data.areaInteresse}`,
        empresa: "Creative Path Studio",
        localizacao: data.regiao === "remoto" ? "Remoto" : "Híbrido",
        tipo: data.preferenciaContrato === "pj" ? "PJ" : data.preferenciaContrato === "freelancer" ? "Freelancer" : "CLT",
        salario: data.pretensaoSalarial === "4k-6k" ? "R$ 4.000 - R$ 6.000"
          : data.pretensaoSalarial === "8k-12k" ? "R$ 8.000 - R$ 12.000"
          : "R$ 7.000 - R$ 11.000",
        nivel: nivelVaga,
        match: 80,
        descricao: `Criação e implementação de soluções estratégicas. Valorizamos sua formação acadêmica e disponibilidade: ${data.disponibilidade}.`,
        habilidadesRequeridas: data.habilidades.split(',').slice(1, 5).map((h: string) => h.trim())
      },
      {
        id: 6,
        titulo: `Gerente de ${data.areaInteresse}`,
        empresa: "AI Vision Corp",
        localizacao: data.regiao === "remoto" ? "Remoto" : "São Paulo - SP",
        tipo: "CLT",
        salario: data.pretensaoSalarial === "12k-20k" ? "R$ 12.000 - R$ 20.000"
          : data.pretensaoSalarial === "20k+" ? "R$ 18.000 - R$ 25.000"
          : "R$ 15.000 - R$ 22.000",
        nivel: nivelVaga === "Júnior/Estágio" ? "Pleno" : "Sênior/Especialista",
        match: 90,
        descricao: `Liderança de equipes e projetos estratégicos em ${data.curso}. Excelente match com seu perfil de ${data.nivelFormacao}.`,
        habilidadesRequeridas: data.habilidades.split(',').slice(0, 4).map((h: string) => h.trim())
      }
    ];

    setVagas(vagasGeradas);
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <div className="relative mb-6">
          <div className="w-16 h-16 border-4 border-zinc-800 border-t-purple-500 rounded-full animate-spin"></div>
        </div>
        <p className="text-xl text-white">IA analisando seu perfil...</p>
        <p className="text-sm text-gray-400 mt-2">Gerando vagas personalizadas</p>
      </div>
    );
  }

  if (!formData) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <Sparkles className="w-16 h-16 text-purple-500 mb-4" />
        <h2 className="text-2xl font-bold text-white mb-2">Nenhum dado encontrado</h2>
        <p className="text-gray-400 mb-6">Preencha o formulário primeiro para ver vagas personalizadas</p>
        <Button
          onClick={() => navigate("/formulario")}
          className="bg-purple-600 hover:bg-purple-700"
        >
          Ir para Formulário
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Vagas Recomendadas</h2>
            <p className="text-gray-400">
              {vagas.length} oportunidades encontradas baseadas no seu perfil
            </p>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-md bg-zinc-900 border border-zinc-800">
            <Brain className="w-4 h-4 text-purple-500" />
            <span className="text-sm text-gray-300">IA</span>
          </div>
        </div>

        {/* Resumo do Perfil */}
        <Card className="bg-zinc-900 border-zinc-800 p-4 mb-6">
          <div className="flex flex-wrap gap-4 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-gray-400">Nome:</span>
              <span className="text-white">{formData.nomeCompleto}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-400">Formação:</span>
              <span className="text-white">{formData.nivelFormacao} em {formData.curso}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-400">Experiência:</span>
              <span className="text-white">{formData.anosExperiencia}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-400">Região:</span>
              <span className="text-white">{formData.regiao}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-400">Pretensão:</span>
              <span className="text-white">{formData.pretensaoSalarial}</span>
            </div>
          </div>
        </Card>
      </div>

      {/* Lista de Vagas */}
      <div className="space-y-4">
        {vagas.map((vaga) => (
          <Card
            key={vaga.id}
            className="bg-zinc-900 border-zinc-800 p-6 hover:border-purple-500 transition-colors"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold text-white">{vaga.titulo}</h3>
                  <Badge className="bg-green-600 text-white border-0">
                    {vaga.match}% Match
                  </Badge>
                </div>
                <div className="flex items-center gap-2 text-gray-400 mb-3">
                  <Building2 className="w-4 h-4" />
                  <span>{vaga.empresa}</span>
                </div>
              </div>
            </div>

            <p className="text-gray-300 mb-4">{vaga.descricao}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="w-4 h-4 text-gray-500" />
                <span className="text-gray-400">{vaga.localizacao}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <DollarSign className="w-4 h-4 text-gray-500" />
                <span className="text-gray-400">{vaga.salario}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <TrendingUp className="w-4 h-4 text-gray-500" />
                <span className="text-gray-400">{vaga.nivel}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4 text-gray-500" />
                <span className="text-gray-400">{vaga.tipo}</span>
              </div>
            </div>

            <div className="mb-4">
              <p className="text-sm text-gray-500 mb-2">Habilidades Requeridas:</p>
              <div className="flex flex-wrap gap-2">
                {vaga.habilidadesRequeridas.map((habilidade, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="border-zinc-600 text-gray-200 bg-zinc-800"
                  >
                    {habilidade}
                  </Badge>
                ))}
              </div>
            </div>

            <Button className="w-full md:w-auto bg-purple-600 hover:bg-purple-700">
              Candidatar-se
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}
