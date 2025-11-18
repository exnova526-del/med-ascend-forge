import { useEffect, useState, useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { useParallax } from "@/hooks/useParallax";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselApi } from "@/components/ui/carousel";
import gallery1 from "@/assets/gallery-1.png";
import gallery2 from "@/assets/gallery-2.png";
import gallery3 from "@/assets/gallery-3.png";
import gallery4 from "@/assets/gallery-4.png";
import gallery5 from "@/assets/gallery-5.png";
import gallery6 from "@/assets/gallery-6.png";
import gallery7 from "@/assets/gallery-7.png";
import gallery8 from "@/assets/gallery-8.png";
import gallery9 from "@/assets/gallery-9.png";
import gallery10 from "@/assets/gallery-10.png";
const galleryImages = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8, gallery9, gallery10];
const GalleryCarouselSection = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const carouselParallax = useParallax(carouselRef, {
    speed: 0.15,
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
  return <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl text-foreground mb-4 font-bold font-serif text-[#5a2224] md:text-5xl">SUA JORNADA COM O MÉTODO</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Aqui você encontra os materiais iniciais, introduções e orientações essenciais para começar com segurança, clareza e confiança sua formação médica avançada.</p>
        </div>

        <div ref={carouselRef} style={carouselParallax.style} className="relative max-w-5xl mx-auto">
          <Carousel setApi={setApi} opts={{
          align: "center",
          loop: true
        }} plugins={[Autoplay({
          delay: 2000,
          stopOnInteraction: false,
          stopOnMouseEnter: false
        })]} className="w-full">
            <CarouselContent>
              {galleryImages.map((image, index) => <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <div className="relative aspect-[9/16] overflow-hidden rounded-2xl shadow-lg">
                      <img src={image} alt={`Galeria ${index + 1}`} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                    </div>
                  </div>
                </CarouselItem>)}
            </CarouselContent>
            <CarouselPrevious className="left-2 md:-left-12" />
            <CarouselNext className="right-2 md:-right-12" />
          </Carousel>

          {/* Indicadores (bolinhas) */}
          <div className="flex justify-center gap-2 mt-6">
            {galleryImages.map((_, index) => <button key={index} onClick={() => api?.scrollTo(index)} className={`h-2 rounded-full transition-all duration-300 ${current === index ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"}`} aria-label={`Ir para imagem ${index + 1}`} />)}
          </div>
        </div>
      </div>
    </section>;
};
export default GalleryCarouselSection;