import React, { useState } from 'react';
import { Plan, BillingCycle } from '../../types/billing';
import { formatCurrency } from '../../utils/formatters';
import { X, CheckCircle2, CreditCard, ShieldCheck, Lock } from 'lucide-react';

interface CheckoutModalProps {
  plan: Plan;
  initialCycle: BillingCycle;
  onClose: () => void;
  onSuccess: (data: { name: string; email: string; company: string; plan: Plan; cycle: BillingCycle }) => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ plan, initialCycle, onClose, onSuccess }) => {
  const [cycle, setCycle] = useState<BillingCycle>(initialCycle);
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [loading, setLoading] = useState(false);

  const price = cycle === 'monthly' ? plan.priceMonthly : plan.priceYearly;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep('success');
      onSuccess({ name, email, company, plan, cycle });
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl max-w-lg w-full p-6 sm:p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 'form' ? (
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-3 py-1 rounded-full mb-2">
                Checkout Seguro WLC Billing
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Assinar Plano {plan.name}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                Preencha seus dados para iniciar a assinatura recorrente.
              </p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl mb-6 flex items-center justify-between border border-slate-200 dark:border-slate-700">
              <div>
                <div className="text-xs text-slate-500">Plano Escolhido</div>
                <div className="text-lg font-bold text-slate-900 dark:text-white">{plan.name} ({cycle === 'monthly' ? 'Mensal' : 'Anual'})</div>
              </div>
              <div className="text-right">
                <div className="text-xs text-slate-500">Total</div>
                <div className="text-xl font-extrabold text-indigo-600 dark:text-indigo-400">{formatCurrency(price)}</div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Nome Completo</label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Carlos Alberto"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">E-mail Profissional</label>
                <input
                  type="email"
                  required
                  placeholder="carlos@empresa.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Nome da Empresa / SaaS</label>
                <input
                  type="text"
                  required
                  placeholder="InovaTech Soluções"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Número do Cartão (Simulação)</label>
                <div className="relative">
                  <CreditCard className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    required
                    placeholder="4242 •••• •••• 4242"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full mt-2 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl shadow-lg shadow-indigo-600/20 text-sm transition-all flex items-center justify-center gap-2"
              >
                {loading ? (
                  <span>Processando pagamento...</span>
                ) : (
                  <>
                    <Lock className="w-4 h-4" /> Confirmar Assinatura ({formatCurrency(price)})
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-xs text-slate-400 pt-2">
                <ShieldCheck className="w-4 h-4 text-emerald-500" /> Pagamento criptografado e seguro via WLC Pay
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto shadow-lg">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Assinatura Realizada com Sucesso!</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 max-w-sm mx-auto">
              Parabéns! Sua assinatura do plano <span className="font-bold text-indigo-600 dark:text-indigo-400">{plan.name}</span> foi ativada e o cliente já foi adicionado ao painel.
            </p>
            <div className="pt-6">
              <button
                onClick={onClose}
                className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl text-sm transition-all shadow-md"
              >
                Ir para o Dashboard
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
