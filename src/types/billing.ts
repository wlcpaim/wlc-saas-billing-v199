export type PlanType = 'starter' | 'pro' | 'enterprise';
export type BillingCycle = 'monthly' | 'yearly';
export type SubscriptionStatus = 'active' | 'pending' | 'canceled';

export interface Plan {
  id: PlanType;
  name: string;
  priceMonthly: number;
  priceYearly: number;
  features: string[];
  popular?: boolean;
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  company: string;
  plan: PlanType;
  status: SubscriptionStatus;
  mrr: number;
  nextBilling: string;
  avatar: string;
}

export interface Metrics {
  mrr: number;
  arr: number;
  churnRate: number;
  ltv: number;
  activeSubscribers: number;
  mrrGrowth: number;
}