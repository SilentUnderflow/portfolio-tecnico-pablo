import { Github, Linkedin, Mail, Code, Network, Terminal, Shield, Zap, BookOpen, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import TechCard from '@/components/TechCard';
import Timeline from '@/components/Timeline';
import { Button } from '@/components/ui/button';

const LOGO_URL = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663258683450/F96qkUtQQhpz7pemGrg3Rv/logo-pablo-dffBY427M2FxqQGMW5Lfic.webp';
const HERO_BG_URL = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663258683450/F96qkUtQQhpz7pemGrg3Rv/hero-bg-4YiFD3JaqvyWxahpSWhhHg.webp';

export default function Home() {
  const timelineItems = [
    {
      year: '2010+',
      title: 'Construção Civil (Contínuo)',
      description: 'Atuação recorrente desde a infância em obras, desenvolvendo lógica estrutural, disciplina operacional e execução prática de projetos do zero.',
      icon: '🏗️',
    },
    {
      year: '2015+ (até hoje)',
      title: 'Autônomo — Hardware & Manutenção',
      description: 'Montagem, manutenção, upgrade e venda de computadores. Experiência prática em diagnóstico de hardware, troubleshooting e suporte técnico independente.',
      icon: '🖥️',
    },
    {
      year: '2018',
      title: 'Subway',
      description: 'Primeiro emprego formal. Atendimento ao cliente, operação de rotina acelerada e trabalho sob pressão.',
      icon: '🍔',
    },
    {
      year: '2021',
      title: 'Lotérica',
      description: 'Operações financeiras, atendimento ao cliente e uso de sistemas internos de caixa e fluxo de valores.',
      icon: '💰',
    },
    {
      year: '2022',
      title: 'Exército Brasileiro',
      description: 'Disciplina, hierarquia, execução de ordens, rotinas intensas e desenvolvimento de responsabilidade operacional e mental.',
      icon: '⚔️',
    },
    {
      year: '2023',
      title: 'Mercado BH + Autônomo',
      description: 'Experiência em varejo e simultaneamente atuação independente em pintura e serviços de motoboy.',
      icon: '🏪',
    },
    {
      year: '2023',
      title: 'Expresso D2 (Logística)',
      description: 'Operações logísticas, carga e descarga, organização de fluxo de caminhões e otimização de distribuição. Prestador de serviços para Bartofil SA.',
      icon: '🚚',
    },
    {
      year: '2024',
      title: 'Farma Conde',
      description: 'Atendimento ao cliente, operação de sistemas internos, controle de estoque e apoio em vendas farmacêuticas.',
      icon: '💊',
    },
    {
      year: '2024+',
      title: 'Transição para Tecnologia',
      description: 'Estudos em redes, Linux, Python, segurança da informação e construção de laboratórios práticos.',
      icon: '💻',
    },
  ];

  const skills = [
    {
      category: 'Redes',
      icon: <Network className="h-6 w-6" />,
      items: ['TCP/IP', 'UDP', 'Wireshark', 'Nmap', 'Análise de tráfego'],
    },
    {
      category: 'Linux',
      icon: <Terminal className="h-6 w-6" />,
      items: ['Comandos básicos', 'Estrutura de sistema', 'Permissões', 'Configuração'],
    },
    {
      category: 'Segurança',
      icon: <Shield className="h-6 w-6" />,
      items: ['Conceitos SOC', 'Ferramentas de análise', 'Vulnerabilidades', 'Hardening básico'],
    },
    {
      category: 'Programação',
      icon: <Code className="h-6 w-6" />,
      items: ['Python básico', 'JavaScript', 'Lógica de programação', 'Scripts'],
    },
    {
      category: 'Hardware',
      icon: <Zap className="h-6 w-6" />,
      items: ['Troubleshooting', 'Montagem', 'Diagnóstico', 'Manutenção'],
    },
    {
      category: 'Operacional',
      icon: <BookOpen className="h-6 w-6" />,
      items: ['Processos estruturados', 'Resolução de problemas', 'Adaptabilidade', 'Aprendizado contínuo'],
    },
  ];

  const labs = [
    {
      title: 'Exploração de Vulnerabilidade',
      description: 'Laboratório com Windows 7 + Kali Linux em VMware. Estudo de EternalBlue e compreensão de portas, serviços e exposição de sistemas.',
      tech: 'VMware, Kali Linux, Windows 7',
      icon: '🔬',
    },
    {
      title: 'Análise de Rede',
      description: 'Captura e análise de tráfego com Wireshark. Identificação de pacotes, protocolos e comportamento de rede.',
      tech: 'Wireshark, TCP/IP, Protocolos',
      icon: '🌐',
    },
    {
      title: 'Scripts Python',
      description: 'Desenvolvimento de scripts simples para validação de dados e processamento de informações.',
      tech: 'Python, Lógica de programação',
      icon: '🐍',
    },
    {
      title: 'Ambientes Linux',
      description: 'Configuração e uso de diferentes distribuições Linux. Exploração de comandos, estrutura de sistema e permissões.',
      tech: 'Linux, Terminal, Bash',
      icon: '🐧',
    },
  ];

  const whatISolve = [
    'Diagnosticar problemas de hardware e software',
    'Analisar tráfego de rede e identificar anomalias',
    'Configurar ambientes Linux para teste e produção',
    'Operar ferramentas de segurança e análise',
    'Compreender e executar processos operacionais complexos',
    'Aprender rapidamente novas ferramentas e tecnologias',
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      <Header logoUrl={LOGO_URL} />

      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${HERO_BG_URL})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/30 via-slate-950/50 to-slate-950" />

        <div className="container relative z-10 flex min-h-screen flex-col items-center justify-center">
          <div className="max-w-4xl text-center">
            <h1 className="font-display mb-4 text-5xl font-bold md:text-7xl">
              <span className="gradient-text">Pablo</span>
            </h1>

            <h2 className="mb-6 text-xl font-semibold text-cyan-300 md:text-2xl">
              Profissional em Transição para Tecnologia
            </h2>

            <p className="mb-8 text-lg text-slate-300 md:text-xl">
              Redes | Linux | Cibersegurança | Suporte Técnico
            </p>

            <p className="mb-12 max-w-2xl text-base text-slate-400 md:text-lg">
              Transformei experiência operacional em base técnica. Hoje foco minha carreira em infraestrutura, redes e segurança da informação.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-cyan-500 text-slate-950 hover:bg-cyan-400"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Conectar Comigo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/10"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Saber Mais
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="border-t border-cyan-500/10 bg-slate-950 py-20">
        <div className="container">
          <h2 className="font-display mb-12 text-center text-4xl font-bold gradient-text">
            Sobre Mim
          </h2>

          <div className="max-w-3xl mx-auto space-y-6 text-slate-300">
            <p className="text-lg leading-relaxed">
              Profissional com trajetória construída em ambientes operacionais diversos, incluindo construção civil, logística, varejo, atendimento ao cliente e experiência militar.
            </p>

            <p className="text-lg leading-relaxed">
              Ao longo dos anos desenvolvi competências práticas em execução de processos, resolução de problemas e adaptação a ambientes de alta exigência.
            </p>

            <p className="text-lg leading-relaxed">
              Atualmente direciono minha carreira para tecnologia, com foco em redes, Linux, suporte técnico e cibersegurança, utilizando estudo autodidata e prática em laboratórios.
            </p>

            <div className="mt-8 rounded-lg border border-cyan-500/20 bg-gradient-to-br from-slate-900/50 to-purple-900/20 p-6 backdrop-blur-sm">
              <h3 className="font-display mb-4 text-lg font-bold text-cyan-300">
                Meu Diferencial
              </h3>
              <p className="text-slate-300">
                Mais de 15 anos de experiência prática em ambientes operacionais, combinado com aprendizado autodidata contínuo em tecnologia. Capacidade comprovada de decompor problemas complexos e executar soluções passo a passo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="border-t border-cyan-500/10 bg-slate-950 py-20">
        <div className="container">
          <h2 className="font-display mb-12 text-center text-4xl font-bold gradient-text">
            Minha Trajetória
          </h2>

          <Timeline items={timelineItems} />
        </div>
      </section>

      {/* What I Solve Section */}
      <section className="border-t border-cyan-500/10 bg-slate-950 py-20">
        <div className="container">
          <h2 className="font-display mb-12 text-center text-4xl font-bold gradient-text">
            O Que Eu Resolvo na Prática
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {whatISolve.map((item, idx) => (
              <div
                key={idx}
                className="glow-effect flex items-start gap-4 rounded-lg border border-cyan-500/20 bg-gradient-to-br from-slate-900/50 to-purple-900/20 p-6 backdrop-blur-sm"
              >
                <div className="mt-1 flex-shrink-0">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-lime-400/20">
                    <span className="text-sm font-bold text-lime-400">✓</span>
                  </div>
                </div>
                <p className="text-slate-300">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-lg border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 p-8 text-center backdrop-blur-sm">
            <p className="text-xl font-semibold text-cyan-300">
              "Não importa o problema — eu consigo decompor, analisar e executar a solução passo a passo."
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="border-t border-cyan-500/10 bg-slate-950 py-20">
        <div className="container">
          <h2 className="font-display mb-12 text-center text-4xl font-bold gradient-text">
            Competências Técnicas
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill, idx) => (
              <TechCard
                key={idx}
                icon={skill.icon}
                title={skill.category}
                description={`Conhecimentos em ${skill.category.toLowerCase()}`}
                items={skill.items}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Labs Section */}
      <section id="labs" className="border-t border-cyan-500/10 bg-slate-950 py-20">
        <div className="container">
          <h2 className="font-display mb-12 text-center text-4xl font-bold gradient-text">
            Laboratórios Técnicos
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {labs.map((lab, idx) => (
              <div
                key={idx}
                className="glow-effect group overflow-hidden rounded-lg border border-cyan-500/20 bg-gradient-to-br from-slate-900/50 to-purple-900/20 p-6 backdrop-blur-sm"
              >
                <div className="mb-4 text-3xl">{lab.icon}</div>

                <h3 className="font-display mb-2 text-lg font-bold text-cyan-300">
                  {lab.title}
                </h3>

                <p className="mb-4 text-sm text-slate-300">
                  {lab.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {lab.tech.split(', ').map((tech, i) => (
                    <span
                      key={i}
                      className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Objective Section */}
      <section className="border-t border-cyan-500/10 bg-slate-950 py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto rounded-lg border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 p-8 md:p-12 backdrop-blur-sm text-center">
            <h2 className="font-display mb-6 text-3xl font-bold gradient-text">
              Objetivo Profissional
            </h2>

            <p className="text-lg text-slate-300 leading-relaxed">
              Busco uma oportunidade na área de tecnologia para atuar em suporte técnico, infraestrutura, redes ou segurança da informação, aplicando minha experiência operacional e minha formação técnica em desenvolvimento contínuo.
            </p>

            <p className="mt-6 text-slate-400">
              Estou pronto para aprender, me dedicar e crescer em qualquer oportunidade que se alinhe com meus estudos e aspirações profissionais.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="border-t border-cyan-500/10 bg-slate-950 py-20">
        <div className="container">
          <h2 className="font-display mb-12 text-center text-4xl font-bold gradient-text">
            Conecte-se Comigo
          </h2>

          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="https://www.linkedin.com/in/pablomendess/"
              target="_blank"
              rel="noopener noreferrer"
              className="glow-effect flex items-center gap-3 rounded-lg border border-cyan-500/20 bg-gradient-to-br from-slate-900/50 to-purple-900/20 px-6 py-3 backdrop-blur-sm transition-all hover:border-cyan-400/50"
            >
              <Linkedin className="h-5 w-5 text-cyan-400" />
              <span className="font-semibold text-slate-300">LinkedIn</span>
            </a>

            <a
              href="https://github.com/SilentUnderflow"
              target="_blank"
              rel="noopener noreferrer"
              className="glow-effect flex items-center gap-3 rounded-lg border border-cyan-500/20 bg-gradient-to-br from-slate-900/50 to-purple-900/20 px-6 py-3 backdrop-blur-sm transition-all hover:border-cyan-400/50"
            >
              <Github className="h-5 w-5 text-cyan-400" />
              <span className="font-semibold text-slate-300">GitHub</span>
            </a>

            <div className="glow-effect flex items-center gap-3 rounded-lg border border-cyan-500/20 bg-gradient-to-br from-slate-900/50 to-purple-900/20 px-6 py-3 backdrop-blur-sm">
              <Mail className="h-5 w-5 text-cyan-400" />
              <span className="font-semibold text-slate-300">pablomendes457@gmail.com</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-cyan-500/10 bg-slate-900/50 py-8 backdrop-blur-sm">
        <div className="container text-center text-slate-400">
          <p>© 2024 Pablo | Portfólio Técnico. Desenvolvido com dedicação.</p>
        </div>
      </footer>
    </div>
  );
}
