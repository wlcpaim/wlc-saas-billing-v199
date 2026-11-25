import React from 'react';
import { BarChart3 } from 'lucide-react';

export const RevenueChart: React.FC = () => {
  const months = ['Nov', 'Dez', 'Jan', 'Fev', 'Mar', 'Abr'];
  const values = [92000, 98000, 105000, 112000, 118000, 124800];
  const maxVal = Math.max(...values);

  return (
    <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">Evolução da Receita (MRR)</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">Crescimento consolidado nos últimos 6 meses</p>
        </div>
        <div className="w-10 h-10 bg-indigo-50 dark:bg-indigo-950/60 rounded-xl flex items-center justify-center text-indigo-600 dark:text-indigo-400">
          <BarChart3 className="w-5 h-5" />
        </div>
      </div>

      <div className="h-64 flex items-end justify-between gap-2 sm:gap-4 pt-6 px-2">
        {values.map((val, idx) => {
          const heightPercent = (val / maxVal) * 100;
          return (
            <div key={idx} className="flex-1 flex flex-col items-center h-full justify-end group">
              <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2 opacity-0 group-hover:opacity-150 transition-opacity">
                R$ {(val / 1000).toFixed(1)}k
              </div>
              <div
                style={{ height: `${heightPercent}%` }}
                className="w-full bg-indigo-500 hover:bg-indigo-600 rounded-t-lg transition-all duration-300 shadow-md shadow-indigo-500/10"
              />
              <div className="text-xs font-medium text-slate-600 dark:text-slate-400 mt-3">
                {months[idx]}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
