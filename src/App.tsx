import React, { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/landing/Hero';
import { Benefits } from './components/landing/Benefits';
import { PricingTable } from './components/landing/PricingTable';
import { Testimonials } from './components/landing/Testimonials';
import { MetricsGrid } from './components/dashboard/MetricsGrid';
import { RevenueChart } from './components/dashboard/RevenueChart';
import { RecentActivity } from './components/dashboard/RecentActivity';
import { CustomerTable } from './components/customers/CustomerTable';
import { CustomerDetailModal } from './components/customers/CustomerDetailModal';
import { CheckoutModal } from './components/checkout/CheckoutModal';
import { plans, initialCustomers, metricsData, recentActivities } from './utils/mockData';
import { Plan, BillingCycle, Customer } from './types/billing';
import { Users, DollarSign, LayoutDashboard, ArrowUpRight } from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState<'landing' | 'dashboard'>('landing');
  const [customers, setCustomers] = useState<Customer[]>(initialCustomers);
  const [selectedPlanForCheckout, setSelectedPlanForCheckout] = useState<{ plan: Plan; cycle: BillingCycle } | null>(null);
  const [selectedCustomerForModal, setSelectedCustomerForModal] = useState<Customer | null>(null);

  const handleOpenCheckout = (plan: Plan, cycle: BillingCycle = 'monthly') => {
    setSelectedPlanForCheckout({ plan, cycle });
  };

  const handleCheckoutSuccess = (newCustomerData: { name: string; email: string; company: string; plan: Plan; cycle: BillingCycle }) => {
    const newCust: Customer = {
      id: `cust-${Date.now()}`,
      name: newCustomerData.name,
      email: newCustomerData.email,
      company: newCustomerData.company,
      plan: newCustomerData.plan.id,
      status: 'active',
      mrr: newCustomerData.cycle === 'monthly' ? newCustomerData.plan.priceMonthly : Math.round(newCustomerData.plan.priceYearly / 12),
      nextBilling: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150'
    };
    setCustomers([newCust, ...customers]);
  };

  const handleUpdateCustomerStatus = (id: string, status: 'active' | 'pending' | 'canceled') => {
    setCustomers(customers.map(c => c.id === id ? { ...c, status } : c));
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] dark:bg-[#0f172a] text-[#0f172a] dark:text-[#f8fafc] selection:bg-indigo-600 selection:text-white">
      <Navbar
        currentView={currentView}
        setCurrentView={setCurrentView}
        onOpenCheckout={(plan) => handleOpenCheckout(plan, 'monthly')}
      />

      <main className="flex-grow">
        {currentView === 'landing' ? (
          <div className="animate-fade-in">
            <Hero onGetStarted={() => handleOpenCheckout(plans[1], 'monthly')} />
            <Benefits />
            <PricingTable plans={plans} onSelectPlan={handleOpenCheckout} />
            <Testimonials />
          </div>
        ) : (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 animate-fade-in">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                  Dashboard Administrativo
                </h1>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Visão geral e gestão completa de assinaturas do WLC Billing
                </p>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setCurrentView('landing')}
                  className="px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-sm font-semibold rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                >
                  Ver Landing Page
                </button>
                <button
                  onClick={() => handleOpenCheckout(plans[1], 'monthly')}
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold rounded-xl shadow-md shadow-indigo-500/20 transition-all"
                >
                  + Nova Assinatura
                </button>
              </div>
            </div>

            <MetricsGrid metrics={metricsData} />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <RevenueChart />
              </div>
              <div>
                <RecentActivity activities={recentActivities} />
              </div>
            </div>

            <div className="pt-6">
              <div className="mb-6">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">Gestão de Clientes e Assinaturas</h2>
                <p className="text-sm text-slate-500 dark:text-slate-400">Filtre, pesquise e gerencie o status dos assinantes ativos</p>
              </div>
              <CustomerTable
                customers={customers}
                onSelectCustomer={(cust) => setSelectedCustomerForModal(cust)}
              />
            </div>
          </div>
        )}
      </main>

      <Footer />

      {selectedPlanForCheckout && (
        <CheckoutModal
          plan={selectedPlanForCheckout.plan}
          initialCycle={selectedPlanForCheckout.cycle}
          onClose={() => setSelectedPlanForCheckout(null)}
          onSuccess={handleCheckoutSuccess}
        />
      )}

      {selectedCustomerForModal && (
        <CustomerDetailModal
          customer={selectedCustomerForModal}
          onClose={() => setSelectedCustomerForModal(null)}
          onUpdateStatus={handleUpdateCustomerStatus}
        />
      )}
    </div>
  );
}
