import courseMed from "@/assets/course-med.png";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ArrowRight, TrendingUp } from "lucide-react";
const CoursesSection = () => {
  const {
    ref: sectionRef,
    isVisible: sectionVisible
  } = useScrollReveal({
    threshold: 0.1
  });
  return <section id="courses" ref={sectionRef} className="py-20 sm:py-32 bg-gradient-to-b from-background to-muted/20">
      <div className="container px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Section Header */}
        <div className={`text-center mb-12 transition-all duration-1000 ${sectionVisible ? 'animate-fade-down opacity-100' : 'opacity-0'}`}>
          <h2 className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-6">
            Nosso Curso Principal
          </h2>
          <p className="font-crimson text-xl text-foreground/80 max-w-3xl mx-auto">
            O programa que vai transformar seu modo de estudar, pensar e construir sua carreira médica com excelência e propósito.
          </p>
        </div>

        {/* Featured Course */}
        <div className={`transition-all duration-1000 ${sectionVisible ? 'animate-scale-in opacity-100' : 'opacity-0'}`}>
          <div className="bg-card rounded-3xl shadow-2xl overflow-hidden border border-border/50 relative">
            {/* Badge de Destaque */}
            <div className="absolute top-6 right-6 z-20">
              <Badge className="bg-primary text-primary-foreground px-4 py-2 text-sm font-playfair font-semibold shadow-lg flex items-center gap-2 animate-pulse">
                <TrendingUp className="h-4 w-4" />
                Mais Vendido
              </Badge>
            </div>
            
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image Side */}
              <div className="relative h-[400px] md:h-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 z-10" />
                <img src={courseMed} alt="Método de Excelência e Desempenho" className="w-full h-full object-cover" />
              </div>

              {/* Content Side */}
              <div className="p-8 sm:p-12 flex flex-col justify-center">
                <h3 className="font-playfair text-3xl sm:text-4xl font-bold text-primary mb-6 leading-tight">
                  Método de Excelência e Desempenho
                </h3>
                
                <p className="font-crimson text-lg sm:text-xl text-foreground/90 mb-8 leading-relaxed">
                  Aprenda a dominar os fundamentos da medicina com propósito e clareza. Um curso que une técnica, rotina e mentalidade científica para estudantes que desejam alcançar a excelência desde os primeiros períodos.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-baseline gap-3">
                    
                    
                  </div>
                  <div className="flex items-baseline gap-3">
                    <span className="font-crimson text-muted-foreground text-lg font-normal">Investimento:</span>
                    <span className="font-playfair font-bold text-primary text-3xl">12x de R$ 41,06</span>
                  </div>
                </div>

                <a href="https://pay.kiwify.com.br/zgMVgl5" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="w-full sm:w-auto text-lg px-10 py-6 bg-primary hover:bg-primary/90 text-primary-foreground font-playfair font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                    Quero me inscrever
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
            Investimento em sua formação é investimento em vidas que você vai transformar.
          </p>
        </div>
      </div>
    </section>;
};
export default CoursesSection;