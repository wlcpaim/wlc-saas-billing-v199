import React from 'react';
import { Cpu, RefreshCw, ShieldCheck, Zap, BarChart3, Users } from 'lucide-react';

export const Benefits: React.FC = () => {
  const items = [
    {
      icon: <RefreshCw className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />,
      title: 'Cobrança Recorrente Automatizada',
      description: 'Cartão de crédito, Pix automático e boleto com emissão instantânea e baixa automática.'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
      title: 'Recuperação de Inadimplência (Dunning)',
      description: 'Estratégias inteligentes via SMS, WhatsApp e e-mail para resgatar pagamentos recusados.'
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-violet-600 dark:text-violet-400" />,
      title: 'Métricas SaaS em Tempo Real',
      description: 'Acompanhe MRR, ARR, Churn Rate, LTV e Net Revenue Retention sem planilhas manuais.'
    },
    {
      icon: <Zap className="w-6 h-6 text-amber-600 dark:text-amber-400" />,
      title: 'Checkout Transparente e Rápido',
      description: 'Modais de pagamento altamente otimizados para conversão mobile e desktop.'
    },
    {
      icon: <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: 'Gestão Completa de Clientes',
      description: 'Histórico de faturas, alteração de planos, notas e auditoria por usuário.'
    },
    {
      icon: <Cpu className="w-6 h-6 text-rose-600 dark:text-rose-400" />,
      title: 'API Robusta & Webhooks',
      description: 'Integração completa com seu ecossistema e automações via n8n, Zapier ou Webhooks.'
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-slate-100/50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Tudo o que seu SaaS precisa para escalar com previsibilidade
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            Esqueça sistemas legados e cobranças manuais. O WLC Billing cuida de todo o ciclo de vida do seu faturamento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-slate-100 dark:bg-slate-700 rounded-xl flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
