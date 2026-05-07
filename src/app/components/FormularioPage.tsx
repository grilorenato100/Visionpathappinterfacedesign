import { useState } from "react";
import { useNavigate } from "react-router";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Brain, GraduationCap, Briefcase, MapPin, Sparkles, DollarSign, Calendar, Award, Target } from "lucide-react";

export function FormularioPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nomeCompleto: "",
    idade: "",
    formacaoAcademica: "",
    nivelFormacao: "",
    curso: "",
    instituicao: "",
    anoConclusao: "",
    habilidades: "",
    experienciaProfissional: "",
    anosExperiencia: "",
    areaInteresse: "",
    preferenciaContrato: "",
    pretensaoSalarial: "",
    regiao: "",
    disponibilidade: "",
    objetivoCarreira: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Armazena os dados no sessionStorage para usar na página de vagas
    sessionStorage.setItem("visionPathFormData", JSON.stringify(formData));
    navigate("/vagas");
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white mb-2">Encontre Sua Carreira Ideal</h2>
        <p className="text-gray-400">
          Preencha o formulário completo e nossa IA encontrará as melhores oportunidades personalizadas para você
        </p>
      </div>

      <Card className="bg-zinc-900 border-zinc-800 p-8">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Dados Pessoais */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-purple-500" />
              Dados Pessoais
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="nomeCompleto" className="text-gray-200 font-medium">
                  Nome Completo
                </Label>
                <Input
                  id="nomeCompleto"
                  value={formData.nomeCompleto}
                  onChange={(e) => setFormData({ ...formData, nomeCompleto: e.target.value })}
                  placeholder="Seu nome completo"
                  className="bg-zinc-800 border-zinc-600 text-white placeholder:text-gray-400 focus:border-purple-500"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="idade" className="text-gray-200 font-medium">
                  Idade
                </Label>
                <Input
                  id="idade"
                  type="number"
                  value={formData.idade}
                  onChange={(e) => setFormData({ ...formData, idade: e.target.value })}
                  placeholder="Sua idade"
                  className="bg-zinc-800 border-zinc-600 text-white placeholder:text-gray-400 focus:border-purple-500"
                  required
                />
              </div>
            </div>
          </div>

          {/* Formação Acadêmica */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-purple-500" />
              Formação Acadêmica
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="nivelFormacao" className="text-gray-200 font-medium">
                  Nível de Formação
                </Label>
                <Select
                  value={formData.nivelFormacao}
                  onValueChange={(value) => setFormData({ ...formData, nivelFormacao: value })}
                  required
                >
                  <SelectTrigger className="bg-zinc-800 border-zinc-600 text-white focus:border-purple-500 hover:bg-zinc-750 cursor-pointer h-11">
                    <SelectValue placeholder="Selecione o nível" className="text-white" />
                  </SelectTrigger>
                  <SelectContent className="bg-zinc-800 border-zinc-600 max-h-[300px] overflow-y-auto">
                    <SelectItem className="text-white hover:bg-zinc-700 focus:bg-zinc-700 cursor-pointer" value="medio">Ensino Médio</SelectItem>
                    <SelectItem className="text-white hover:bg-zinc-700 focus:bg-zinc-700 cursor-pointer" value="tecnico">Técnico</SelectItem>
                    <SelectItem className="text-white hover:bg-zinc-700 focus:bg-zinc-700 cursor-pointer" value="superior-cursando">Superior Cursando</SelectItem>
                    <SelectItem className="text-white hover:bg-zinc-700 focus:bg-zinc-700 cursor-pointer" value="superior-completo">Superior Completo</SelectItem>
                    <SelectItem className="text-white hover:bg-zinc-700 focus:bg-zinc-700 cursor-pointer" value="pos-graduacao">Pós-Graduação</SelectItem>
                    <SelectItem className="text-white hover:bg-zinc-700 focus:bg-zinc-700 cursor-pointer" value="mestrado">Mestrado</SelectItem>
                    <SelectItem className="text-white hover:bg-zinc-700 focus:bg-zinc-700 cursor-pointer" value="doutorado">Doutorado</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="curso" className="text-gray-200 font-medium">
                  Curso/Área de Formação
                </Label>
                <Select
                  value={formData.curso}
                  onValueChange={(value) => setFormData({ ...formData, curso: value })}
                  required
                >
                  <SelectTrigger className="bg-zinc-800 border-zinc-600 text-white focus:border-purple-500 hover:bg-zinc-750 cursor-pointer h-11">
                    <SelectValue placeholder="Selecione sua área" className="text-white" />
                  </SelectTrigger>
                  <SelectContent className="bg-zinc-800 border-zinc-600 max-h-[300px] overflow-y-auto">
                    <SelectItem className="text-white hover:bg-zinc-700 focus:bg-zinc-700 cursor-pointer" value="tecnologia">Tecnologia da Informação</SelectItem>
                    <SelectItem className="text-white hover:bg-zinc-700 focus:bg-zinc-700 cursor-pointer" value="engenharia">Engenharia</SelectItem>
                    <SelectItem className="text-white hover:bg-zinc-700 focus:bg-zinc-700 cursor-pointer" value="administracao">Administração</SelectItem>
                    <SelectItem className="text-white hover:bg-zinc-700 focus:bg-zinc-700 cursor-pointer" value="marketing">Marketing</SelectItem>
                    <SelectItem className="text-white hover:bg-zinc-700 focus:bg-zinc-700 cursor-pointer" value="design">Design</SelectItem>
                    <SelectItem className="text-white hover:bg-zinc-700 focus:bg-zinc-700 cursor-pointer" value="saude">Saúde</SelectItem>
                    <SelectItem className="text-white hover:bg-zinc-700 focus:bg-zinc-700 cursor-pointer" value="educacao">Educação</SelectItem>
                    <SelectItem className="text-white hover:bg-zinc-700 focus:bg-zinc-700 cursor-pointer" value="direito">Direito</SelectItem>
                    <SelectItem className="text-white hover:bg-zinc-700 focus:bg-zinc-700 cursor-pointer" value="ciencias">Ciências</SelectItem>
                    <SelectItem className="text-white hover:bg-zinc-700 focus:bg-zinc-700 cursor-pointer" value="financas">Finanças</SelectItem>
                    <SelectItem className="text-white hover:bg-zinc-700 focus:bg-zinc-700 cursor-pointer" value="outros">Outros</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="instituicao" className="text-gray-200 font-medium">
                  Instituição de Ensino
                </Label>
                <Input
                  id="instituicao"
                  value={formData.instituicao}
                  onChange={(e) => setFormData({ ...formData, instituicao: e.target.value })}
                  placeholder="Nome da instituição"
                  className="bg-zinc-800 border-zinc-600 text-white placeholder:text-gray-400 focus:border-purple-500"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="anoConclusao" className="text-gray-200 font-medium">
                  <Calendar className="w-4 h-4 inline mr-2" />
                  Ano de Conclusão
                </Label>
                <Input
                  id="anoConclusao"
                  type="number"
                  value={formData.anoConclusao}
                  onChange={(e) => setFormData({ ...formData, anoConclusao: e.target.value })}
                  placeholder="Ex: 2023"
                  className="bg-zinc-800 border-zinc-600 text-white placeholder:text-gray-400 focus:border-purple-500"
                  required
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="formacaoAcademica" className="text-gray-200 font-medium">
                  Detalhes da Formação Acadêmica
                </Label>
                <Textarea
                  id="formacaoAcademica"
                  value={formData.formacaoAcademica}
                  onChange={(e) => setFormData({ ...formData, formacaoAcademica: e.target.value })}
                  placeholder="Descreva sua formação, cursos complementares, certificações..."
                  className="bg-zinc-800 border-zinc-600 text-white placeholder:text-gray-400 min-h-[100px] focus:border-purple-500"
                  required
                />
              </div>
            </div>
          </div>

          {/* Experiência Profissional */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-purple-500" />
              Experiência Profissional
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="anosExperiencia" className="text-gray-200 font-medium">
                  Anos de Experiência
                </Label>
                <Select
                  value={formData.anosExperiencia}
                  onValueChange={(value) => setFormData({ ...formData, anosExperiencia: value })}
                  required
                >
                  <SelectTrigger className="bg-zinc-800 border-zinc-600 text-white focus:border-purple-500 hover:bg-zinc-750 cursor-pointer h-11">
                    <SelectValue placeholder="Selecione" className="text-white" />
                  </SelectTrigger>
                  <SelectContent className="bg-zinc-800 border-zinc-600 max-h-[300px] overflow-y-auto">
                    <SelectItem className="text-white hover:bg-zinc-700 focus:bg-zinc-700 cursor-pointer" value="sem-experiencia">Sem experiência</SelectItem>
                    <SelectItem className="text-white hover:bg-zinc-700 focus:bg-zinc-700 cursor-pointer" value="0-1">Menos de 1 ano</SelectItem>
                    <SelectItem className="text-white hover:bg-zinc-700 focus:bg-zinc-700 cursor-pointer" value="1-3">1 a 3 anos</SelectItem>
                    <SelectItem className="text-white hover:bg-zinc-700 focus:bg-zinc-700 cursor-pointer" value="3-5">3 a 5 anos</SelectItem>
                    <SelectItem className="text-white hover:bg-zinc-700 focus:bg-zinc-700 cursor-pointer" value="5-10">5 a 10 anos</SelectItem>
                    <SelectItem className="text-white hover:bg-zinc-700 focus:bg-zinc-700 cursor-pointer" value="10+">Mais de 10 anos</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="areaInteresse" className="text-gray-200 font-medium">
                  <Target className="w-4 h-4 inline mr-2" />
                  Área de Interesse
                </Label>
                <Input
                  id="areaInteresse"
                  value={formData.areaInteresse}
                  onChange={(e) => setFormData({ ...formData, areaInteresse: e.target.value })}
                  placeholder="Ex: Desenvolvimento, Gestão, Vendas..."
                  className="bg-zinc-800 border-zinc-600 text-white placeholder:text-gray-400 focus:border-purple-500"
                  required
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="experienciaProfissional" className="text-gray-200 font-medium">
                  Descreva sua Experiência Profissional
                </Label>
                <Textarea
                  id="experienciaProfissional"
                  value={formData.experienciaProfissional}
                  onChange={(e) => setFormData({ ...formData, experienciaProfissional: e.target.value })}
                  placeholder="Descreva suas experiências anteriores, projetos, responsabilidades..."
                  className="bg-zinc-800 border-zinc-600 text-white placeholder:text-gray-400 min-h-[100px] focus:border-purple-500"
                  required
                />
              </div>
            </div>
          </div>

          {/* Habilidades */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-purple-500" />
              Habilidades e Competências
            </h3>
            <div className="space-y-2">
              <Label htmlFor="habilidades" className="text-gray-200 font-medium">
                Liste suas principais habilidades
              </Label>
              <Textarea
                id="habilidades"
                value={formData.habilidades}
                onChange={(e) => setFormData({ ...formData, habilidades: e.target.value })}
                placeholder="Ex: Python, JavaScript, Liderança, Análise de Dados, Excel, Comunicação..."
                className="bg-zinc-800 border-zinc-600 text-white placeholder:text-gray-400 min-h-[100px] focus:border-purple-500"
                required
              />
            </div>
          </div>

          {/* Preferências de Trabalho */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-purple-500" />
              Preferências de Trabalho
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="regiao" className="text-gray-200 font-medium">
                  Região Preferida
                </Label>
                <Select
                  value={formData.regiao}
                  onValueChange={(value) => setFormData({ ...formData, regiao: value })}
                  required
                >
                  <SelectTrigger className="bg-zinc-800 border-zinc-600 text-white focus:border-purple-500 hover:bg-zinc-750 cursor-pointer h-11">
                    <SelectValue placeholder="Selecione a região" className="text-white" />
                  </SelectTrigger>
                  <SelectContent className="bg-zinc-800 border-zinc-600 max-h-[300px] overflow-y-auto">
                    <SelectItem className="text-white hover:bg-zinc-700 focus:bg-zinc-700 cursor-pointer" value="remoto">Remoto (Home Office)</SelectItem>
                    <SelectItem className="text-white hover:bg-zinc-700 focus:bg-zinc-700 cursor-pointer" value="hibrido">Híbrido</SelectItem>
                    <SelectItem className="text-white hover:bg-zinc-700 focus:bg-zinc-700 cursor-pointer" value="sp">São Paulo</SelectItem>
                    <SelectItem className="text-white hover:bg-zinc-700 focus:bg-zinc-700 cursor-pointer" value="rj">Rio de Janeiro</SelectItem>
                    <SelectItem className="text-white hover:bg-zinc-700 focus:bg-zinc-700 cursor-pointer" value="bh">Belo Horizonte</SelectItem>
                    <SelectItem className="text-white hover:bg-zinc-700 focus:bg-zinc-700 cursor-pointer" value="brasilia">Brasília</SelectItem>
                    <SelectItem className="text-white hover:bg-zinc-700 focus:bg-zinc-700 cursor-pointer" value="sul">Região Sul</SelectItem>
                    <SelectItem className="text-white hover:bg-zinc-700 focus:bg-zinc-700 cursor-pointer" value="nordeste">Região Nordeste</SelectItem>
                    <SelectItem className="text-white hover:bg-zinc-700 focus:bg-zinc-700 cursor-pointer" value="norte">Região Norte</SelectItem>
                    <SelectItem className="text-white hover:bg-zinc-700 focus:bg-zinc-700 cursor-pointer" value="centro-oeste">Centro-Oeste</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="preferenciaContrato" className="text-gray-200 font-medium">
                  Tipo de Contrato
                </Label>
                <Select
                  value={formData.preferenciaContrato}
                  onValueChange={(value) => setFormData({ ...formData, preferenciaContrato: value })}
                  required
                >
                  <SelectTrigger className="bg-zinc-800 border-zinc-600 text-white focus:border-purple-500 hover:bg-zinc-750 cursor-pointer h-11">
                    <SelectValue placeholder="Selecione" className="text-white" />
                  </SelectTrigger>
                  <SelectContent className="bg-zinc-800 border-zinc-600 max-h-[300px] overflow-y-auto">
                    <SelectItem className="text-white hover:bg-zinc-700 focus:bg-zinc-700 cursor-pointer" value="clt">CLT</SelectItem>
                    <SelectItem className="text-white hover:bg-zinc-700 focus:bg-zinc-700 cursor-pointer" value="pj">PJ</SelectItem>
                    <SelectItem className="text-white hover:bg-zinc-700 focus:bg-zinc-700 cursor-pointer" value="estagio">Estágio</SelectItem>
                    <SelectItem className="text-white hover:bg-zinc-700 focus:bg-zinc-700 cursor-pointer" value="temporario">Temporário</SelectItem>
                    <SelectItem className="text-white hover:bg-zinc-700 focus:bg-zinc-700 cursor-pointer" value="freelancer">Freelancer</SelectItem>
                    <SelectItem className="text-white hover:bg-zinc-700 focus:bg-zinc-700 cursor-pointer" value="qualquer">Qualquer</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="pretensaoSalarial" className="text-gray-200 font-medium">
                  <DollarSign className="w-4 h-4 inline mr-2" />
                  Pretensão Salarial
                </Label>
                <Select
                  value={formData.pretensaoSalarial}
                  onValueChange={(value) => setFormData({ ...formData, pretensaoSalarial: value })}
                  required
                >
                  <SelectTrigger className="bg-zinc-800 border-zinc-600 text-white focus:border-purple-500 hover:bg-zinc-750 cursor-pointer h-11">
                    <SelectValue placeholder="Selecione a faixa" />
                  </SelectTrigger>
                  <SelectContent className="bg-zinc-800 border-zinc-600 max-h-[300px] overflow-y-auto">
                    <SelectItem className="text-white hover:bg-zinc-700 focus:bg-zinc-700 cursor-pointer" value="ate-2k">Até R$ 2.000</SelectItem>
                    <SelectItem className="text-white hover:bg-zinc-700 focus:bg-zinc-700 cursor-pointer" value="2k-4k">R$ 2.000 - R$ 4.000</SelectItem>
                    <SelectItem className="text-white hover:bg-zinc-700 focus:bg-zinc-700 cursor-pointer" value="4k-6k">R$ 4.000 - R$ 6.000</SelectItem>
                    <SelectItem className="text-white hover:bg-zinc-700 focus:bg-zinc-700 cursor-pointer" value="6k-8k">R$ 6.000 - R$ 8.000</SelectItem>
                    <SelectItem className="text-white hover:bg-zinc-700 focus:bg-zinc-700 cursor-pointer" value="8k-12k">R$ 8.000 - R$ 12.000</SelectItem>
                    <SelectItem className="text-white hover:bg-zinc-700 focus:bg-zinc-700 cursor-pointer" value="12k-20k">R$ 12.000 - R$ 20.000</SelectItem>
                    <SelectItem className="text-white hover:bg-zinc-700 focus:bg-zinc-700 cursor-pointer" value="20k+">Acima de R$ 20.000</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="disponibilidade" className="text-gray-200 font-medium">
                  Disponibilidade
                </Label>
                <Select
                  value={formData.disponibilidade}
                  onValueChange={(value) => setFormData({ ...formData, disponibilidade: value })}
                  required
                >
                  <SelectTrigger className="bg-zinc-800 border-zinc-600 text-white focus:border-purple-500 hover:bg-zinc-750 cursor-pointer h-11">
                    <SelectValue placeholder="Quando pode começar?" className="text-white" />
                  </SelectTrigger>
                  <SelectContent className="bg-zinc-800 border-zinc-600 max-h-[300px] overflow-y-auto">
                    <SelectItem className="text-white hover:bg-zinc-700 focus:bg-zinc-700 cursor-pointer" value="imediata">Imediata</SelectItem>
                    <SelectItem className="text-white hover:bg-zinc-700 focus:bg-zinc-700 cursor-pointer" value="15-dias">15 dias</SelectItem>
                    <SelectItem className="text-white hover:bg-zinc-700 focus:bg-zinc-700 cursor-pointer" value="30-dias">30 dias</SelectItem>
                    <SelectItem className="text-white hover:bg-zinc-700 focus:bg-zinc-700 cursor-pointer" value="2-meses">2 meses</SelectItem>
                    <SelectItem className="text-white hover:bg-zinc-700 focus:bg-zinc-700 cursor-pointer" value="3-meses">3 meses ou mais</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Objetivo de Carreira */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Target className="w-5 h-5 text-purple-500" />
              Objetivo de Carreira
            </h3>
            <div className="space-y-2">
              <Label htmlFor="objetivoCarreira" className="text-gray-200 font-medium">
                Descreva seus objetivos profissionais
              </Label>
              <Textarea
                id="objetivoCarreira"
                value={formData.objetivoCarreira}
                onChange={(e) => setFormData({ ...formData, objetivoCarreira: e.target.value })}
                placeholder="Ex: Busco uma posição onde possa crescer profissionalmente e aplicar minhas habilidades..."
                className="bg-zinc-800 border-zinc-600 text-white placeholder:text-gray-400 min-h-[100px] focus:border-purple-500"
                required
              />
            </div>
          </div>

          {/* Botão Submit */}
          <Button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-6 text-lg font-semibold"
          >
            <Brain className="w-5 h-5 mr-2" />
            Gerar Vagas Personalizadas com IA
          </Button>
        </form>
      </Card>

      <div className="mt-6 text-center">
        <p className="text-gray-500 text-sm">
          Seus dados são processados de forma segura e privada pela nossa IA
        </p>
      </div>
    </div>
  );
}
