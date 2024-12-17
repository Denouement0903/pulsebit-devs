import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from 'next/image'

export default function CardLayout() {
  const cards = [
    {
      title: "Feature 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.",
      imageUrl: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Feature 2",
      description: "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.",
      imageUrl: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Feature 3",
      description: "Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam.",
      imageUrl: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold text-center mb-12">Our Features</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <div className="relative w-full h-48 mb-4">
                  <Image
                    src={card.imageUrl}
                    alt={`Image for ${card.title}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                </div>
                <CardTitle>{card.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{card.description}</CardDescription>
              </CardContent>
              <CardFooter className="mt-auto">
                <Button className="w-full">Learn More</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}

