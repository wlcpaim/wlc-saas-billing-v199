import React from 'react';
import { Layers, Github, Twitter, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white">
                <Layers className="w-5 h-5" />
              </div>
              <span className="text-lg font-bold text-white">WLC Billing</span>
            </div>
            <p className="text-sm text-slate-400">
              Plataforma completa de gestão de assinaturas e faturamento recorrente para empresas SaaS em expansão.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Produto</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#pricing" className="hover:text-white transition-colors">Planos e Preços</a></li>
              <li><a href="#benefits" className="hover:text-white transition-colors">Gateway de Pix & Cartão</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Recuperação Dunning</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API & Webhooks</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Sobre nós</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Carreiras</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Privacidade</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Termos de Serviço</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Segurança</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} WLC Billing Inc. Todos os direitos reservados.
          </p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a href="#" className="text-slate-400 hover:text-white"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="text-slate-400 hover:text-white"><Linkedin className="w-5 h-5" /></a>
            <a href="#" className="text-slate-400 hover:text-white"><Github className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};
