import React from 'react';
import { ThemeToggle } from './ThemeToggle';
import { Layers, LayoutDashboard, Home, CreditCard } from 'lucide-react';
import { Plan } from '../../types/billing';

interface NavbarProps {
  currentView: 'landing' | 'dashboard';
  setCurrentView: (view: 'landing' | 'dashboard') => void;
  onOpenCheckout: (plan: Plan) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, setCurrentView, onOpenCheckout }) => {
  return (
    <header className="sticky top-0 z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setCurrentView('landing')}>
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-md shadow-indigo-500/20">
            <Layers className="w-6 h-6" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
            WLC Billing
          </span>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          {currentView === 'landing' ? (
            <>
              <a href="#benefits" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Benefícios</a>
              <a href="#pricing" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Planos</a>
              <a href="#testimonials" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Depoimentos</a>
            </>
          ) : (
            <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 flex items-center gap-1.5">
              <LayoutDashboard className="w-4 h-4" /> Painel Administrativo
            </span>
          )}
        </nav>

        <div className="flex items-center space-x-3">
          <ThemeToggle />
          {currentView === 'landing' ? (
            <button
              onClick={() => setCurrentView('dashboard')}
              className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-4 py-2 rounded-xl shadow-lg shadow-indigo-500/20 transition-all"
            >
              <LayoutDashboard className="w-4 h-4" /> Acessar Dashboard
            </button>
          ) : (
            <button
              onClick={() => setCurrentView('landing')}
              className="inline-flex items-center gap-2 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-sm font-medium px-4 py-2 rounded-xl transition-all"
            >
              <Home className="w-4 h-4" /> Ver Landing Page
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
