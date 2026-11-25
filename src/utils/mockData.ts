import { Plan, Customer, Metrics } from '../types/billing';

export const plans: Plan[] = [
  {
    id: 'starter',
    name: 'Starter',
    priceMonthly: 97,
    priceYearly: 931,
    features: [
      'Até 500 assinantes ativos',
      'Cobrança via Cartão e Pix',
      'Dashboard de métricas essenciais',
      'Suporte por e-mail'
    ]
  },
  {
    id: 'pro',
    name: 'Profissional',
    priceMonthly: 247,
    priceYearly: 2371,
    popular: true,
    features: [
      'Até 5.000 assinantes ativos',
      'Webhook e API completa',
      'Recuperação de inadimplência (Dunning)',
      'Múltiplos gateways de pagamento',
      'Suporte prioritário via chat'
    ]
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    priceMonthly: 597,
    priceYearly: 5731,
    features: [
      'Assinantes ilimitados',
      'Gerente de conta dedicado',
      'SLA de 99.9% garantido',
      'Customização de domínio e marca',
      'Relatórios avançados de Cohort'
    ]
  }
];

export const initialCustomers: Customer[] = [
  {
    id: 'cust-1',
    name: 'Carlos Alberto',
    email: 'carlos@inovatech.com',
    company: 'InovaTech Soluções',
    plan: 'pro',
    status: 'active',
    mrr: 247,
    nextBilling: '2025-05-15',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150'
  },
  {
    id: 'cust-2',
    name: 'Mariana Souza',
    email: 'mariana@finhub.io',
    company: 'FinHub Brasil',
    plan: 'enterprise',
    status: 'active',
    mrr: 597,
    nextBilling: '2025-05-18',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150'
  },
  {
    id: 'cust-3',
    name: 'Roberto Mendes',
    email: 'roberto@cloudnet.com.br',
    company: 'CloudNet Host',
    plan: 'starter',
    status: 'pending',
    mrr: 97,
    nextBilling: '2025-05-12',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150'
  },
  {
    id: 'cust-4',
    name: 'Fernanda Lima',
    email: 'fernanda@educadigital.org',
    company: 'Educa Digital',
    plan: 'pro',
    status: 'canceled',
    mrr: 247,
    nextBilling: '2025-04-30',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
  },
  {
    id: 'cust-5',
    name: 'Lucas Vasconcelos',
    email: 'lucas@logisticafast.com',
    company: 'FastLog Express',
    plan: 'enterprise',
    status: 'active',
    mrr: 597,
    nextBilling: '2025-05-22',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150'
  }
];

export const metricsData: Metrics = {
  mrr: 124800,
  arr: 1497600,
  churnRate: 2.1,
  ltv: 3450,
  activeSubscribers: 1420,
  mrrGrowth: 14.8
};

export const recentActivities = [
  {
    id: 'act-1',
    type: 'new_subscription',
    description: 'Nova assinatura Pro realizada por FinHub Brasil',
    time: 'Há 12 minutos',
    amount: '+R$ 247,00'
  },
  {
    id: 'act-2',
    type: 'renewal',
    description: 'Renovação automática de InovaTech Soluções',
    time: 'Há 45 minutos',
    amount: '+R$ 247,00'
  },
  {
    id: 'act-3',
    type: 'payment_failed',
    description: 'Falha na cobrança do cartão de CloudNet Host',
    time: 'Há 2 horas',
    amount: 'R$ 97,00'
  },
  {
    id: 'act-4',
    type: 'upgrade',
    description: 'Upgrade de Starter para Enterprise feito por FastLog',
    time: 'Há 5 horas',
    amount: '+R$ 500,00'
  }
];
