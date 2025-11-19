import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, Check } from "lucide-react";
import annaProfile from "@/assets/anna-mentoria.png";
const MentorshipSection = () => {
  const {
    ref: sectionRef,
    isVisible: sectionVisible
  } = useScrollReveal({
    threshold: 0.1,
    triggerOnce: true
  });
  return <section ref={sectionRef} className="py-20 sm:py-32 bg-gradient-to-b from-background to-muted/20">
      <div className="container px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Section Header */}
        <div className={`text-center mb-12 transition-all duration-1000 ${sectionVisible ? 'animate-fade-down opacity-100' : 'opacity-0'}`}>
          <h2 className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-6">
            Mentoria Individual com Anna Fontes
          </h2>
          <p className="font-crimson text-xl text-foreground/80 max-w-3xl mx-auto">
            Excelência que transforma sua jornada médica de dentro para fora.
          </p>
        </div>

        {/* Featured Mentorship Card */}
        <div className={`transition-all duration-1000 ${sectionVisible ? 'animate-scale-in opacity-100' : 'opacity-0'}`}>
          <div className="bg-card rounded-3xl shadow-2xl overflow-hidden border border-border/50 relative">
            {/* Badge de Destaque */}
            <div className="absolute top-6 right-6 z-20">
              <Badge className="bg-primary text-primary-foreground px-4 py-2 text-sm font-playfair font-semibold shadow-lg flex items-center gap-2 animate-pulse">
                <Sparkles className="h-4 w-4" />
                Vagas Limitadas
              </Badge>
            </div>
            
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image Side */}
              <div className="relative h-[400px] md:h-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 z-10" />
                <img src={annaProfile} alt="Anna Fontes Mentoria" className="w-full h-full object-cover" />
              </div>

              {/* Content Side */}
              <div className="p-8 sm:p-12 flex flex-col justify-center">
                <div className="mb-8">
                  <p className="font-crimson text-lg text-foreground/90 leading-relaxed mb-6">
                    Estudar medicina é mais do que acumular conhecimento — é construir propósito, maturidade e direção. 
                    A mentoria individual foi criada para o estudante que deseja unir ciência, organização, constância e espiritualidade 
                    numa jornada de alta performance com profundidade e sentido.
                  </p>
                  <p className="font-crimson text-lg text-foreground/90 leading-relaxed">
                    Inspirada no arquétipo do Sábio, Anna orienta com autoridade serena e humanidade, oferecendo clareza, método e propósito enquanto caminha ao seu lado.
                  </p>
                </div>

                {/* O que você vai receber */}
                <div className="mb-8 space-y-4">
                  {["4 encontros individuais ao longo do ano", "Direcionamento personalizado", "Acompanhamento humano + técnico", "Kit exclusivo MED"].map((item, index) => <div key={index} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="font-crimson text-foreground/90">{item}</span>
                    </div>)}
                </div>

                {/* Bonus Badge */}
                <div className="mb-8 p-4 bg-primary/5 rounded-lg border border-primary/10">
                  <p className="font-playfair font-semibold text-primary mb-2">
                    🎁 Bônus para os 5 primeiros inscritos
                  </p>
                  <p className="font-crimson text-sm text-foreground/80">
                    Curso Completo "Método de Excelência e Desempenho (MED)"
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-baseline gap-3">
                    <span className="font-crimson text-muted-foreground text-lg font-normal">Investimento:</span>
                    <span className="font-playfair font-bold text-primary text-3xl">12x de R$134,14</span>
                  </div>
                  <p className="font-crimson text-sm text-muted-foreground">
                    Possibilidade de parcelamento diretamente pela plataforma
                  </p>
                </div>

                <a href="https://pay.kiwify.com.br/csfDE3p" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="w-full sm:w-auto text-lg px-10 py-6 bg-primary hover:bg-primary/90 text-primary-foreground font-playfair font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                    Garantir Minha Vaga na Mentoria
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Message */}
        <div className={`text-center mt-12 transition-all duration-1000 ${sectionVisible ? 'animate-fade-up opacity-100' : 'opacity-0'}`} style={{
        animationDelay: '400ms'
      }}>
          <p className="font-crimson text-xl text-muted-foreground italic">
            "Os que confiam no processo voam mais alto. Sua jornada começa aqui."
          </p>
        </div>
      </div>
    </section>;
};
export default MentorshipSection;