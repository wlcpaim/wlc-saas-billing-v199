import React from 'react';
import { Activity, ArrowUpRight, RefreshCw, AlertCircle, CheckCircle2 } from 'lucide-react';

interface ActivityItem {
  id: string;
  type: string;
  description: string;
  time: string;
  amount: string;
}

interface RecentActivityProps {
  activities: ActivityItem[];
}

export const RecentActivity: React.FC<RecentActivityProps> = ({ activities }) => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'new_subscription':
        return <CheckCircle2 className="w-5 h-5 text-emerald-500" />;
      case 'renewal':
        return <RefreshCw className="w-5 h-5 text-indigo-500" />;
      case 'payment_failed':
        return <AlertCircle className="w-5 h-5 text-rose-500" />;
      case 'upgrade':
        return <ArrowUpRight className="w-5 h-5 text-violet-500" />;
      default:
        return <Activity className="w-5 h-5 text-slate-500" />;
    }
  };

  return (
    <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">Atividades Recentes</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">Eventos de cobrança em tempo real</p>
        </div>
      </div>

      <div className="space-y-4">
        {activities.map((act) => (
          <div key={act.id} className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center flex-shrink-0">
                {getIcon(act.type)}
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900 dark:text-white line-clamp-1">{act.description}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">{act.time}</p>
              </div>
            </div>
            <div className="text-sm font-bold text-slate-900 dark:text-white ml-2 flex-shrink-0">
              {act.amount}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
