import React, { useState } from 'react';
import { Customer, SubscriptionStatus } from '../../types/billing';
import { formatCurrency, formatDate } from '../../utils/formatters';
import { Search, Filter, MoreHorizontal, ShieldCheck, Clock, XCircle, ChevronRight } from 'lucide-react';

interface CustomerTableProps {
  customers: Customer[];
  onSelectCustomer: (customer: Customer) => void;
}

export const CustomerTable: React.FC<CustomerTableProps> = ({ customers, onSelectCustomer }) => {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');

  const filteredCustomers = customers.filter((cust) => {
    const matchesSearch = cust.name.toLowerCase().includes(search.toLowerCase()) ||
                          cust.email.toLowerCase().includes(search.toLowerCase()) ||
                          cust.company.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === 'all' || cust.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status: SubscriptionStatus) => {
    switch (status) {
      case 'active':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300">
            <ShieldCheck className="w-3.5 h-3.5" /> Ativa
          </span>
        );
      case 'pending':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300">
            <Clock className="w-3.5 h-3.5" /> Pendente
          </span>
        );
      case 'canceled':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-rose-100 text-rose-700 dark:bg-rose-950/60 dark:text-rose-300">
            <XCircle className="w-3.5 h-3.5" /> Cancelada
          </span>
        );
    }
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
      <div className="p-4 sm:p-6 border-b border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Buscar por nome, e-mail ou empresa..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
          <Filter className="w-4 h-4 text-slate-400 hidden sm:block" />
          {['all', 'active', 'pending', 'canceled'].map((st) => (
            <button
              key={st}
              onClick={() => setStatusFilter(st)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold capitalize transition-all whitespace-nowrap ${
                statusFilter === st
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {st === 'all' ? 'Todos' : st === 'active' ? 'Ativos' : st === 'pending' ? 'Pendentes' : 'Cancelados'}
            </button>
          ))}
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              <th className="py-4 px-6">Cliente</th>
              <th className="py-4 px-6">Empresa</th>
              <th className="py-4 px-6">Plano</th>
              <th className="py-4 px-6">Status</th>
              <th className="py-4 px-6">MRR</th>
              <th className="py-4 px-6">Próxima Cobrança</th>
              <th className="py-4 px-6 text-right">Ações</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-sm">
            {filteredCustomers.length > 0 ? (
              filteredCustomers.map((cust) => (
                <tr
                  key={cust.id}
                  onClick={() => onSelectCustomer(cust)}
                  className="hover:bg-slate-50/80 dark:hover:bg-slate-800/50 cursor-pointer transition-colors"
                >
                  <td className="py-4 px-6 flex items-center space-x-3">
                    <img src={cust.avatar} alt={cust.name} className="w-9 h-9 rounded-full object-cover" />
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-white">{cust.name}</div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">{cust.email}</div>
                    </div>
                  </td>
                  <td className="py-4 px-6 font-medium text-slate-700 dark:text-slate-300">{cust.company}</td>
                  <td className="py-4 px-6 uppercase text-xs font-bold text-indigo-600 dark:text-indigo-400">{cust.plan}</td>
                  <td className="py-4 px-6">{getStatusBadge(cust.status)}</td>
                  <td className="py-4 px-6 font-bold text-slate-900 dark:text-white">{formatCurrency(cust.mrr)}</td>
                  <td className="py-4 px-6 text-slate-600 dark:text-slate-400">{formatDate(cust.nextBilling)}</td>
                  <td className="py-4 px-6 text-right">
                    <button className="p-2 text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} className="py-12 text-center text-slate-500 dark:text-slate-400">
                  Nenhum cliente encontrado com os filtros atuais.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
