import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"



const AboutCarousel = () => {
  const content =[
    {
      Ima: "https://i.ibb.co/TB4Tzn4/Colorful-Brush-Fitness-Facebook-Cover-1.png",
      feedback:"Leading the company with a passion for fitness and innovation, Abu oversees all business strategies to deliver top-quality products.",
      name:' Abu Bokor Siddik – Founder & CEO'
    },
    {
      Ima: "https://i.ibb.co/TB4Tzn4/Colorful-Brush-Fitness-Facebook-Cover-1.png",
      feedback:"Sarah drives our marketing efforts, crafting campaigns that grow our brand and connect with fitness enthusiasts worldwide.",
      name:'Sarah Johnson – Chief Marketing Officer (CMO)'
    },
    {
      Ima: "https://i.ibb.co/TB4Tzn4/Colorful-Brush-Fitness-Facebook-Cover-1.png",
      feedback:"Mark leads product innovation, ensuring every item is functional, durable, and designed with customer needs in mind.",
      name:'Mark Thompson – Head of Product Development'
    },
    ]
    
      return (
        <Carousel className="max-w-sm  mx-auto   ">
        <CarouselContent>
          {content.map((item, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card className=" max-h-auto">
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                  <div className="card h-[350px] bg-base-100 w-96 shadow-xl mx-auto">
                    <div className="avatar mx-auto ">
                      <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                      </div>
                    </div>
                    <div className="card-body">
                      <h2 className="card-title">{item.name}</h2>
                    <p className="text-justify">{item.feedback}</p>
                      
                    </div>
                  </div>
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

