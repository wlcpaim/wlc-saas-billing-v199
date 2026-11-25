import React from 'react';
import { Star } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: 'O WLC Billing transformou nossa operação de cobrança. Reduzimos o churn involuntário em 35% no primeiro mês de uso.',
      author: 'Bruno Silveira',
      role: 'CTO na DataFlow SaaS',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150'
    },
    {
      quote: 'A facilidade de integração e o checkout transparente nos permitiram lançar novos planos globais em tempo recorde.',
      author: 'Camila Ribeiro',
      role: 'CEO na PayPulse',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150'
    },
    {
      quote: 'Dashboard completo e preciso. Finalmente temos controle total sobre o MRR e ARR sem precisar de planilhas complexas.',
      author: 'Marcos Vinicius',
      role: 'CFO na CloudScale',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-slate-100/50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Amado por centenas de empresas inovadoras
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            Veja o que fundadores e líderes de tecnologia dizem sobre o WLC Billing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-700 dark:text-slate-200 text-sm leading-relaxed mb-6">
                  "{t.quote}"
                </p>
              </div>

              <div className="flex items-center space-x-3 border-t border-slate-100 dark:border-slate-700/60 pt-4">
                <img src={t.avatar} alt={t.author} className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <div className="text-sm font-semibold text-slate-900 dark:text-white">{t.author}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
