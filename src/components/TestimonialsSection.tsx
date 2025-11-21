import { useRef } from "react";
import { Star } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useParallax } from "@/hooks/useParallax";
const testimonials = [{
  name: "Maria Silva",
  initials: "MS",
  course: "Método de Excelência e Desempenho",
  text: "O curso transformou minha forma de estudar. Consegui organizar minha rotina e meus resultados melhoraram muito. Recomendo para todos que querem começar com o pé direito na medicina!",
  rating: 5
}, {
  name: "João Pedro",
  initials: "JP",
  course: "Método de Excelência e Desempenho",
  text: "Estava perdido na fase clínica, mas esse curso me deu clareza e método. As estratégias práticas de estudo fizeram toda a diferença. Vale cada centavo!",
  rating: 5
}, {
  name: "Ana Beatriz",
  initials: "AB",
  course: "Método de Excelência e Desempenho",
  text: "A mentoria me ajudou a encontrar meu propósito e a construir uma visão clara da minha carreira. Mais do que técnicas, aprendi a ter uma mentalidade de excelência.",
  rating: 5
}, {
  name: "Carlos Eduardo",
  initials: "CE",
  course: "Método de Excelência e Desempenho",
  text: "Nunca imaginei que estudar medicina poderia ser tão organizado e eficiente. O método é completo e muito bem estruturado. Indico para qualquer estudante!",
  rating: 5
}];
const TestimonialsSection = () => {
  const cardsRef = useRef<HTMLDivElement>(null);
  const cardsParallax = useParallax(cardsRef, {
    speed: 0.2,
    direction: 'up'
  });
  const {
    ref: sectionRef,
    isVisible: sectionVisible
  } = useScrollReveal({
    threshold: 0.1
  });
  return <section id="testimonials" ref={sectionRef} className="py-20 sm:py-32 bg-darkerBrown">
      
    </section>;
};
export default TestimonialsSection;