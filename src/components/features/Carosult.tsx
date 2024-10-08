
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel"
import { Card, CardContent } from "@/components/ui/card"

const Carosult = () => {
const content =[
{Ima:'https://i.ibb.co/TB4Tzn4/Colorful-Brush-Fitness-Facebook-Cover-1.png'},
{Ima:'https://i.ibb.co.com/pytrnd9/Blue-Professional-Fitness-Tutorial-You-Tube-Thumbnail.png'},
{Ima:'https://i.ibb.co.com/vqf9Kr9/Green-Fitness-You-Tube-Thumbnail.png'},
]

  return (
    <Carousel className="max-w-[1250px] max-h-full mx-auto   ">
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
    </Carousel>
  )
}

export default Carosult
