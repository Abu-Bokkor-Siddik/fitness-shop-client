import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

const Testimonial = () => {
  const content = [
    {
      Ima: "https://i.ibb.co.com/1TnFJ5V/360-F-214746128-31-Jkea-P6r-U0-Nzzzd-FC4kh-Gkmqc8noe6h.jpg",
      feedback:"I’ve been using the strength training equipment from Fitness Equipment and Accessories for over a year, and I couldn’t be happier! The quality is exceptional, and I’ve seen significant improvements in my workouts. The customer service team was also incredibly helpful in guiding me toward the best products for my home gym!",
      name:'John D'
    },
    {
      Ima: "https://i.ibb.co.com/hLyThwc/download-9.jpg",
      feedback:"We recently upgraded our cardio and strength sections with products from Fitness Equipment and Accessories, and it has been a game-changer! The equipment is sturdy, reliable, and user-friendly. Our members have noticed the difference, and we’ve seen a boost in overall satisfaction with the new gear.",
      name:'Michael K.'
    },
    {
      Ima: "https://i.ibb.co.com/fdVFVY8/istockphoto-611778400-170667a.jpg",
      feedback:"As a personal trainer, I rely on top-quality equipment for my clients. Fitness Equipment and Accessories has become my go-to source for everything from kettlebells to resistance bands. Their products are durable, affordable, and perform excellently under heavy use. My clients love them, and so do I!",
      name:'Sarah M.'
    },
  
  ];

  return (
    <Carousel className="max-w-max max-h-full mx-auto   ">
      <CarouselContent>
        {content.map((item, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card className=" max-h-auto">
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  {/* <img src={item.Ima} alt={`allImage${index+1}`} className="h-full w-full object-fill " /> */}
                  <div className="card h-[450px] bg-base-100 w-96 shadow-xl mx-auto">
                    <div className="avatar mx-auto ">
                      <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                        <img src={item?.Ima} />
                      </div>
                    </div>
                    <div className="card-body">
                      <h2 className="card-title">{item?.name}</h2>
                    <p className="text-justify">{item?.feedback}</p>
                      
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
    </Carousel>
  );
};

export default Testimonial;
