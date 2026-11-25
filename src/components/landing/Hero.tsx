import React from 'react';
import { ArrowRight, ShieldCheck, Zap, TrendingUp } from 'lucide-react';

interface HeroProps {
  onGetStarted: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onGetStarted }) => {
  return (
    <section className="relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-32">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 via-transparent to-violet-50/30 dark:from-indigo-950/20 dark:to-slate-900 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full mb-6 border border-indigo-200/50 dark:border-indigo-800/50">
          <Zap className="w-4 h-4 text-indigo-600 dark:text-indigo-400" /> Nova Versão 1.9.9 Hybrid Team Disponível
        </div>
        
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight max-w-4xl mx-auto leading-tight">
          Automatize suas <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">Assinaturas e Cobranças</span> com Alta Conversão
        </h1>
        
        <p className="mt-6 text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          Gerencie clientes, reduza o churn com recuperação inteligente de falhas e escale sua receita recorrente sem atritos.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onGetStarted}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-4 rounded-xl shadow-xl shadow-indigo-600/20 text-base transition-all transform hover:-translate-y-0.5"
          >
            Começar Gratuitamente <ArrowRight className="w-5 h-5" />
          </button>
          <a
            href="#pricing"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold px-8 py-4 rounded-xl border border-slate-200 dark:border-slate-700 text-base transition-all"
          >
            Ver Planos
          </a>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-500" /> Certificado PCI-DSS Nível 1
          </div>
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-indigo-500" /> Até 30% menos Churn
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-amber-500" /> Setup em menos de 5 minutos
          </div>
        </div>

        <div className="mt-16 relative max-w-5xl mx-auto rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl p-2 sm:p-4">
          <div className="absolute top-3 left-4 flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-rose-500" />
            <div className="w-3 h-3 rounded-full bg-amber-500" />
            <div className="w-3 h-3 rounded-full bg-emerald-500" />
          </div>
          <div className="pt-6 pb-2 text-center text-xs font-mono text-slate-400">wlc-billing.app/dashboard/overview</div>
          <div className="bg-slate-100 dark:bg-slate-950 rounded-xl p-4 sm:p-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
            <div className="bg-white dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-800">
              <div className="text-xs text-slate-500">MRR Atual</div>
              <div className="text-lg sm:text-2xl font-bold text-indigo-600 dark:text-indigo-400 mt-1">R$ 124.800</div>
              <div className="text-xs text-emerald-500 font-semibold mt-1">+14.8% este mês</div>
            </div>
            <div className="bg-white dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-800">
              <div className="text-xs text-slate-500">Assinantes Ativos</div>
              <div className="text-lg sm:text-2xl font-bold mt-1">1.420</div>
              <div className="text-xs text-emerald-500 font-semibold mt-1">+52 novos hoje</div>
            </div>
            <div className="bg-white dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-800">
              <div className="text-xs text-slate-500">Taxa Churn</div>
              <div className="text-lg sm:text-2xl font-bold text-rose-500 mt-1">2.1%</div>
              <div className="text-xs text-emerald-500 font-semibold mt-1">-0.4% vs média</div>
            </div>
            <div className="bg-white dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-800">
              <div className="text-xs text-slate-500">LTV Médio</div>
              <div className="text-lg sm:text-2xl font-bold mt-1">R$ 3.450</div>
              <div className="text-xs text-emerald-500 font-semibold mt-1">Saudável</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
