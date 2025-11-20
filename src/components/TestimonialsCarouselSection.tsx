import { useEffect, useState, useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { useParallax } from "@/hooks/useParallax";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";
import testimonial4 from "@/assets/testimonial-4.jpg";
import testimonial5 from "@/assets/testimonial-5.jpg";
import testimonial6 from "@/assets/testimonial-6.jpg";
import testimonialWhatsapp from "@/assets/testimonial-whatsapp.jpg";
const testimonialImages = [testimonial1, testimonial2, testimonial3, testimonial4, testimonial5, testimonial6, testimonialWhatsapp];
const TestimonialsCarouselSection = ({
  className = ""
}: {
  className?: string;
}) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const carouselParallax = useParallax(carouselRef, {
    speed: 0.3,
    direction: 'up'
  });
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);
  return <section className={`py-20 sm:py-32 bg-offWhite ${className}`}>
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-playfair sm:text-4xl md:text-5xl font-bold text-darkBrown mb-6 text-[#571e20] font-sans text-5xl">
              O Que Nossos Alunos Dizem
            </h2>
            <p className="font-crimson text-lg sm:text-xl text-darkBrown/80">
              Depoimentos reais de estudantes que transformaram suas jornadas
            </p>
          </div>

          <div ref={carouselRef} style={carouselParallax.style} className="rounded-full">
            <Carousel setApi={setApi} plugins={[Autoplay({
            delay: 4000
          })]} opts={{
            loop: true,
            align: "center"
          }} className="w-full">
              <CarouselContent className="-ml-2 md:-ml-4">
                {testimonialImages.map((image, index) => <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3 py-0 px-0 mx-0">
                    <div className="relative rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-110 bg-offWhite max-w-[480px] mx-auto">
                      <img src={image} alt={`Depoimento de aluno ${index + 1}`} className="w-full h-auto object-contain" />
                    </div>
                  </CarouselItem>)}
              </CarouselContent>
              <CarouselPrevious className="hidden sm:flex" />
              <CarouselNext className="hidden sm:flex" />
            </Carousel>

            <div className="flex justify-center gap-2 mt-8">
              {testimonialImages.map((_, index) => <button key={index} className={`h-2 rounded-full transition-all duration-300 ${index === current ? "w-8 bg-accent" : "w-2 bg-darkBrown/30 hover:bg-darkBrown/50"}`} onClick={() => api?.scrollTo(index)} aria-label={`Ir para depoimento ${index + 1}`} />)}
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default TestimonialsCarouselSection;