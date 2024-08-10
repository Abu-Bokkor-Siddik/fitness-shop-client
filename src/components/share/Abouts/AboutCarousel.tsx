import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"



const AboutCarousel = () => {
  const content =[
    {Ima:'https://i.ibb.co/TB4Tzn4/Colorful-Brush-Fitness-Facebook-Cover-1.png'},
    {Ima:'https://i.ibb.co/HYTjzqN/Bodybuilder-Fitness-Club-Black-Logo.png'},
    ]
    
      return (
        <Carousel className="max-w-sm  mx-auto   ">
        <CarouselContent>
          {content.map((item, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card className=" max-h-auto">
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                      <img src={item.Ima} alt={`allImage${index+1}`} className="h-full w-full object-fill " />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className=" hidden lg:block " />
        <CarouselNext className="hidden lg:block" />
      </Carousel>)
}

export default AboutCarousel

