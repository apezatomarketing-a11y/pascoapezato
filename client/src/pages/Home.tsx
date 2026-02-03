import { Button } from "@/components/ui/button";
import { useAuth } from "@/_core/hooks/useAuth";
import { useLocation } from "wouter";

export default function Home() {
  const { user, isAuthenticated } = useAuth();
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Páscoa Pezato</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Cardápio Digital com Painel Administrativo
          </p>

          <div className="flex gap-4 justify-center">
            {isAuthenticated && user?.role === "admin" ? (
              <>
                <Button size="lg" onClick={() => navigate("/admin")}>
                  Ir para Painel Admin
                </Button>
                <Button size="lg" variant="outline">
                  Ver Cardápio
                </Button>
              </>
            ) : (
              <>
                <Button size="lg">
                  Ver Cardápio
                </Button>
                <Button size="lg" variant="outline">
                  Login Admin
                </Button>
              </>
            )}
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="font-bold text-lg mb-2">📦 Cardápio Dinâmico</h3>
              <p className="text-muted-foreground">
                Produtos carregados em tempo real do banco de dados
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="font-bold text-lg mb-2">🔐 Painel Seguro</h3>
              <p className="text-muted-foreground">
                Autenticação protegida para administradores
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="font-bold text-lg mb-2">⚡ Gerenciamento Fácil</h3>
              <p className="text-muted-foreground">
                Adicionar, editar e remover produtos facilmente
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
