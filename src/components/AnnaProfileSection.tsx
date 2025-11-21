import { useRef } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useParallax } from "@/hooks/useParallax";
import annaProfile from "@/assets/anna-profile-latest.jpg";
const AnnaProfileSection = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageParallax = useParallax(imageRef, {
    speed: 0.2,
    direction: 'up'
  });
  const contentParallax = useParallax(contentRef, {
    speed: 0.15,
    direction: 'down'
  });
  const {
    ref: sectionRef,
    isVisible: sectionVisible
  } = useScrollReveal({
    threshold: 0.1
  });
  return <section id="anna-profile" className="py-20 sm:py-32 bg-background">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div ref={sectionRef} className={`grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 items-start max-w-7xl mx-auto transition-all duration-1000 ${sectionVisible ? 'animate-fade-in opacity-100' : 'opacity-0'}`}>
          {/* Image Column */}
          <div className="md:col-span-2">
            <div className="relative max-w-sm mx-auto md:mx-0 sticky top-24">
              <div className="absolute -inset-8 bg-gradient-to-br from-burgundy/20 to-accent/20 blur-3xl opacity-60" />
              <div ref={imageRef} style={imageParallax.style} className={`relative aspect-[3/4] overflow-hidden rounded-2xl transition-all duration-700 ${sectionVisible ? 'animate-scale-in' : 'opacity-0'}`}>
                <img src={annaProfile} alt="Dra. Anna L. Fontes Medeiros" className="w-full h-full object-cover object-center rounded-2xl" />
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div ref={contentRef} style={contentParallax.style} className="md:col-span-3">
            <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-primary mb-6">
              Sobre Anna Fontes
            </h2>
            
            <div className="space-y-4 font-crimson text-lg text-foreground/80 leading-relaxed">
              <p>Médica formada pela Universidade Federal de Minas Gerais (UFMG), com residência em Cirurgia Geral.</p>
              
              <p>
                Apaixonada pela educação médica e pelo desenvolvimento de futuros profissionais da saúde, Anna dedica-se a preparar estudantes de medicina para os desafios das provas de residência.
              </p>
              
              <p>
                Sua missão é transformar o estudo em uma jornada de excelência, combinando conhecimento técnico, estratégia e disciplina para que cada aluno alcance seus objetivos.
              </p>

              <div className="pt-6 mt-8">
                <h3 className="font-playfair text-2xl font-semibold text-primary mb-4">
                  Formação & Experiência
                </h3>
                <ul className="space-y-2 text-base">
                  <li className="flex items-start">
                    <span className="text-burgundy mr-2">•</span>
                    <span>Acadêmica de medicina na UFMG</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-burgundy mr-2">•</span>
                    <span> Observership em Harvard e iniciação científica na USP</span>
                  </li>
                  <li className="flex items-start">
                    
                    
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AnnaProfileSection;