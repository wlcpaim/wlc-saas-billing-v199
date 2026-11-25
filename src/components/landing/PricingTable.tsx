import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { Plan, BillingCycle } from '../../types/billing';
import { formatCurrency } from '../../utils/formatters';

interface PricingTableProps {
  plans: Plan[];
  onSelectPlan: (plan: Plan, cycle: BillingCycle) => void;
}

export const PricingTable: React.FC<PricingTableProps> = ({ plans, onSelectPlan }) => {
  const [cycle, setCycle] = useState<BillingCycle>('monthly');

  return (
    <section id="pricing" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Planos transparentes para cada estágio do seu negócio
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            Sem taxas escondidas. Cancele quando quiser.
          </p>

          <div className="mt-8 inline-flex items-center p-1.5 bg-slate-200 dark:bg-slate-800 rounded-xl">
            <button
              onClick={() => setCycle('monthly')}
              className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all ${
                cycle === 'monthly'
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              Mensal
            </button>
            <button
              onClick={() => setCycle('yearly')}
              className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all flex items-center gap-1.5 ${
                cycle === 'yearly'
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              Anual <span className="text-xs bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300 px-2 py-0.5 rounded-full font-bold">Economize 20%</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => {
            const price = cycle === 'monthly' ? plan.priceMonthly : plan.priceYearly;
            return (
              <div
                key={plan.id}
                className={`relative bg-white dark:bg-slate-800 rounded-3xl p-8 border flex flex-col justify-between transition-all ${
                  plan.popular
                    ? 'border-indigo-600 dark:border-indigo-500 shadow-xl shadow-indigo-500/10 ring-2 ring-indigo-600 dark:ring-indigo-500'
                    : 'border-slate-200 dark:border-slate-700 shadow-sm'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow">
                    Mais Popular
                  </div>
                )}

                <div>
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold">{formatCurrency(price)}</span>
                    <span className="text-sm text-slate-500 dark:text-slate-400">/{cycle === 'monthly' ? 'mês' : 'ano'}</span>
                  </div>

                  <ul className="mt-8 space-y-4 border-t border-slate-100 dark:border-slate-700/60 pt-6">
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                        <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8">
                  <button
                    onClick={() => onSelectPlan(plan, cycle)}
                    className={`w-full py-3.5 px-4 rounded-xl font-semibold text-sm transition-all ${
                      plan.popular
                        ? 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-600/20'
                        : 'bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-900 dark:text-white'
                    }`}
                  >
                    Assinar {plan.name}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
