import Image from 'next/image'
import { Button } from "@/components/ui/button"
import CardLayout from './components/CardLayout/CardLayout'

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Column */}
          <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl">
              Ready to bring your next Ecommerce site to life?
            </h1>
            <p className="text-xl text-muted-foreground">
            Tired of old outdated poorly maintained websites? Look no further, our AI powered websites are the solutions to you problems.
            </p>
            <div className="space-x-4">
              <Button size="lg">Get Started</Button>
              <Button size="lg" variant="outline">Learn More</Button>
            </div>
          </div>

          {/* Right Column */}
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/file.svg?height=400&width=600"
              alt="Product showcase"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
        <CardLayout />
      </main>
    </div>
  )
}

