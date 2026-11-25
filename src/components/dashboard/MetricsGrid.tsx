import React from 'react';
import { TrendingUp, Users, DollarSign, Activity, Award } from 'lucide-react';
import { Metrics } from '../../types/billing';
import { formatCurrency, formatNumber } from '../../utils/formatters';

interface MetricsGridProps {
  metrics: Metrics;
}

export const MetricsGrid: React.FC<MetricsGridProps> = ({ metrics }) => {
  const cards = [
    {
      title: 'MRR (Receita Recorrente Mensal)',
      value: formatCurrency(metrics.mrr),
      change: `+${metrics.mrrGrowth}% vs mês anterior`,
      positive: true,
      icon: <DollarSign className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
    },
    {
      title: 'ARR (Receita Recorrente Anual)',
      value: formatCurrency(metrics.arr),
      change: 'Projeção atualizada',
      positive: true,
      icon: <Award className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
    },
    {
      title: 'Taxa de Churn (Mensal)',
      value: `${metrics.churnRate}%`,
      change: '-0.4% vs média do mercado',
      positive: true,
      icon: <Activity className="w-6 h-6 text-rose-600 dark:text-rose-400" />
    },
    {
      title: 'LTV (Valor do Cliente)',
      value: formatCurrency(metrics.ltv),
      change: 'Calculado sobre 18 meses',
      positive: true,
      icon: <TrendingUp className="w-6 h-6 text-violet-600 dark:text-violet-400" />
    },
    {
      title: 'Assinantes Ativos',
      value: formatNumber(metrics.activeSubscribers),
      change: '+52 novos neste mês',
      positive: true,
      icon: <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {cards.map((card, idx) => (
        <div
          key={idx}
          className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between"
        >
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium text-slate-500 dark:text-slate-400">{card.title}</span>
            <div className="w-12 h-12 bg-slate-50 dark:bg-slate-800 rounded-xl flex items-center justify-center">
              {card.icon}
            </div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-1">
              {card.value}
            </div>
            <div className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
              {card.change}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
