import React from 'react';
import { Customer, SubscriptionStatus } from '../../types/billing';
import { formatCurrency, formatDate } from '../../utils/formatters';
import { X, ShieldCheck, Clock, XCircle, Mail, Building, CreditCard, Calendar } from 'lucide-react';

interface CustomerDetailModalProps {
  customer: Customer;
  onClose: () => void;
  onUpdateStatus: (id: string, status: SubscriptionStatus) => void;
}

export const CustomerDetailModal: React.FC<CustomerDetailModalProps> = ({ customer, onClose, onUpdateStatus }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl max-w-lg w-full p-6 sm:p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center space-x-4 mb-6">
          <img src={customer.avatar} alt={customer.name} className="w-16 h-16 rounded-2xl object-cover shadow-md" />
          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">{customer.name}</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-1.5 mt-0.5">
              <Mail className="w-4 h-4" /> {customer.email}
            </p>
          </div>
        </div>

        <div className="space-y-4 border-t border-b border-slate-100 dark:border-slate-800 py-6 my-6">
          <div className="flex items-center justify-between text-sm">
            <span className="text-slate-500 dark:text-slate-400 flex items-center gap-2">
              <Building className="w-4 h-4" /> Empresa
            </span>
            <span className="font-semibold text-slate-900 dark:text-white">{customer.company}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-slate-500 dark:text-slate-400 flex items-center gap-2">
              <CreditCard className="w-4 h-4" /> Plano Atual
            </span>
            <span className="font-bold uppercase text-indigo-600 dark:text-indigo-400">{customer.plan} ({formatCurrency(customer.mrr)}/mês)</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-slate-500 dark:text-slate-400 flex items-center gap-2">
              <Calendar className="w-4 h-4" /> Próxima Cobrança
            </span>
            <span className="font-semibold text-slate-900 dark:text-white">{formatDate(customer.nextBilling)}</span>
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Ações da Assinatura</h4>
          <div className="grid grid-cols-3 gap-3">
            <button
              onClick={() => { onUpdateStatus(customer.id, 'active'); onClose(); }}
              className={`py-2.5 px-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                customer.status === 'active'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
              }`}
            >
              <ShieldCheck className="w-4 h-4" /> Ativar
            </button>
            <button
              onClick={() => { onUpdateStatus(customer.id, 'pending'); onClose(); }}
              className={`py-2.5 px-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                customer.status === 'pending'
                  ? 'bg-amber-600 text-white shadow-md'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
              }`}
            >
              <Clock className="w-4 h-4" /> Pendente
            </button>
            <button
              onClick={() => { onUpdateStatus(customer.id, 'canceled'); onClose(); }}
              className={`py-2.5 px-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                customer.status === 'canceled'
                  ? 'bg-rose-600 text-white shadow-md'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
              }`}
            >
              <XCircle className="w-4 h-4" /> Cancelar
            </button>
          </div>
        </div>

        <div className="mt-8">
          <button
            onClick={onClose}
            className="w-full py-3 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold text-sm rounded-xl transition-colors"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
