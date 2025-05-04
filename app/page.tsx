import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, MapPin, Phone, Mail, Clock, Star, ArrowRight, Sparkles, Shield, ThumbsUp } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/placeholder.svg?height=32&width=32"
              alt="Royal Blue Crew Logo"
              width={32}
              height={32}
              className="rounded"
            />
            <span className="text-xl font-bold text-royal-blue">Royal Blue Crew</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#services" className="text-sm font-medium hover:underline underline-offset-4">
              Services
            </Link>
            <Link href="#about" className="text-sm font-medium hover:underline underline-offset-4">
              About
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:underline underline-offset-4">
              Testimonials
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="#contact" className="hidden md:block">
              <Button>Get a Quote</Button>
            </Link>
            <Button variant="outline" size="icon" className="md:hidden">
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-blue-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Professional Cleaning Services in <span className="text-royal-blue">Manhattan</span>
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Royal Blue Crew provides top-quality residential and commercial cleaning services in Manhattan. Our professional
                  team delivers spotless results with every visit.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="#contact">
                    <Button size="lg" className="w-full min-[400px]:w-auto">
                      Book a Cleaning
                    </Button>
                  </Link>
                  <Link href="#services">
                    <Button size="lg" variant="outline" className="w-full min-[400px]:w-auto">
                      View Services
                    </Button>
                  </Link>
                </div>
                <div className="flex items-center gap-4 pt-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      // <div key={i} className="inline-block h-8 w-8 rounded-full bg-gray-200 ring-2 ring-white" />
                      <img key={i} src={`/avatars/${i}.jpg`} className="inline-block h-8 w-8 rounded-full bg-gray-200 ring-2 ring-white"/>
                    ))}
                  </div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <div className="text-sm text-gray-500">500+ happy customers</div>
                </div>
              </div>
              <div className="mx-auto w-full max-w-[500px] aspect-square overflow-hidden rounded-xl">
                <Image
                  src="/heros/1.jpg"
                  alt="Professional cleaning team"
                  width={800}
                  height={800}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-royal-blue">
                  Our Services
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Professional Cleaning Solutions
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We offer a wide range of cleaning services to meet your needs. From regular home cleaning to deep
                  commercial sanitization.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              {[
                {
                  title: "Residential Cleaning",
                  description:
                    "Regular or one-time deep cleaning for homes and apartments. We handle everything from kitchens to bathrooms.",
                  icon: <Sparkles className="h-10 w-10 text-royal-blue" />,
                  features: ["Kitchen & Bathroom", "Dusting & Vacuuming", "Floor Cleaning", "Window Cleaning"],
                },
                {
                  title: "Commercial Cleaning",
                  description:
                    "Professional cleaning services for offices, retail spaces, and other commercial properties.",
                  icon: <Shield className="h-10 w-10 text-royal-blue" />,
                  features: ["Office Spaces", "Retail Stores", "Medical Facilities", "Educational Institutions"],
                },
                {
                  title: "Specialized Cleaning",
                  description:
                    "Deep cleaning services for specific needs including move-in/out, post-construction, and seasonal cleaning.",
                  icon: <ThumbsUp className="h-10 w-10 text-royal-blue" />,
                  features: ["Move-in/Move-out", "Post-Construction", "Carpet Cleaning", "Seasonal Deep Clean"],
                },
              ].map((service, index) => (
                <Card key={index} className="relative overflow-hidden border-blue-100">
                  <CardHeader className="pb-2">
                    <div className="mb-2">{service.icon}</div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-sm text-gray-500">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <ul className="grid gap-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <Check className="h-4 w-4 text-green-500" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Link href="#contact" className="inline-flex items-center text-royal-blue hover:underline">
                      Learn more <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="mx-auto w-full max-w-[500px] aspect-square overflow-hidden rounded-xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.207010750141!2d-74.0062958845945!3d40.71278377933104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259092d27272b%3A0x1c3c1c3c1c3c1c3c!2s100%20Main%20St%2C%20New%20York%2C%20NY%2010001%2C%20USA!5e0!3m2!1sen!2ssg!4v1678888888888!5m2!1sen!2ssg"
                  width="500"
                  height="500"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Map of 100 Main Street, Manhattan, NY"
                ></iframe>
              </div>
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-royal-blue">About Us</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Why Choose Royal Blue Crew?</h2>
                <p className="text-gray-500 md:text-xl/relaxed">
                  Royal Blue Crew was founded with a simple mission: to provide exceptional cleaning services that
                  exceed our clients' expectations. With years of experience and a dedicated team of professionals,
                  we've built a reputation for reliability, attention to detail, and customer satisfaction.
                </p>
                <div className="grid gap-4 md:grid-cols-2">
                  {[
                    { title: "Experienced Team", description: "Our cleaners have years of professional experience" },
                    { title: "Eco-Friendly Products", description: "We use environmentally safe cleaning solutions" },
                    { title: "Insured & Bonded", description: "Your property is always protected with us" },
                    { title: "Satisfaction Guaranteed", description: "We're not happy until you're happy" },
                  ].map((item, index) => (
                    <div key={index} className="flex flex-col gap-1">
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <p className="text-sm text-gray-500">{item.description}</p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
                  <Link href="#contact">
                    <Button size="lg" className="w-full min-[400px]:w-auto">
                      Contact Us Today
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-royal-blue">
                  Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">What Our Customers Say</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Don't just take our word for it. Here's what our satisfied customers have to say about our cleaning
                  services.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              {[
                {
                  name: "Sarah Johnson",
                  location: "Residential Client",
                  quote:
                    "Royal Blue Crew has been cleaning my home for over a year now, and I couldn't be happier with their service. They're thorough, reliable, and always go the extra mile.",
                },
                {
                  name: "Michael Thompson",
                  location: "Office Manager",
                  quote:
                    "We've tried several commercial cleaning services, but Royal Blue Crew is by far the best. Our office has never looked better, and their attention to detail is impressive.",
                },
                {
                  name: "Jennifer Davis",
                  location: "Property Manager",
                  quote:
                    "As a property manager, I need reliable cleaning services for move-out situations. Royal Blue Crew consistently delivers exceptional results, making my job much easier.",
                },
              ].map((testimonial, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="flex justify-center">
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-500 italic">"{testimonial.quote}"</p>
                  </CardContent>
                  <CardFooter className="flex flex-col">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-royal-blue">Contact Us</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Ready for a Cleaner Space?</h2>
                <p className="text-gray-500 md:text-xl/relaxed">
                  Contact Royal Blue Crew today to schedule your cleaning service or request a free quote. We're here to
                  answer any questions you may have.
                </p>
                <div className="grid gap-4">
                  <div className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-royal-blue" />
                    <span>(555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-royal-blue" />
                    <span>info@royalbluecrew.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-royal-blue" />
                  <span>100 Main Street, Manhattan, NY 10001</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-royal-blue" />
                    <span>Monday - Friday: 8am - 6pm | Saturday: 9am - 2pm</span>
                  </div>
                </div>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle>Request a Quote</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="grid gap-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label
                          htmlFor="first-name"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          First name
                        </label>
                        <input
                          id="first-name"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="John"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="last-name"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Last name
                        </label>
                        <input
                          id="last-name"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Doe"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="john.doe@example.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="phone"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Phone
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="service"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Service Type
                      </label>
                      <select
                        id="service"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option value="">Select a service</option>
                        <option value="residential">Residential Cleaning</option>
                        <option value="commercial">Commercial Cleaning</option>
                        <option value="deep">Deep Cleaning</option>
                        <option value="move">Move In/Out Cleaning</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Tell us about your cleaning needs..."
                      ></textarea>
                    </div>
                    <Button type="submit" className="w-full">
                      Submit Request
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Serving Manhattan and Nearby Areas
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Royal Blue Crew provides professional cleaning services throughout Manhattan and surrounding
                  neighborhoods.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
              {["Upper West Side", "Upper East Side", "Midtown", "Chelsea", "Greenwich Village", "SoHo", "Financial District", "Harlem"].map(
                (area, index) => (
                  <div key={index} className="flex items-center gap-2 rounded-lg border p-4">
                    <MapPin className="h-5 w-5 text-royal-blue" />
                    <span>{area}</span>
                  </div>
                ),
              )}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-royal-blue text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Ready for a Spotless Space?</h2>
                <p className="max-w-[900px] text-blue-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Book your cleaning service today and experience the Royal Blue Crew difference.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="#contact">
                  <Button size="lg" variant="secondary" className="w-full min-[400px]:w-auto">
                    Get a Free Quote
                  </Button>
                </Link>
                {/* <Link href="tel:5551234567">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full min-[400px]:w-auto border-white text-white hover:bg-white hover:text-royal-blue"
                  >
                    Call (555) 123-4567
                  </Button>
                </Link> */}
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Image
                  src="/placeholder.svg?height=32&width=32"
                  alt="Royal Blue Crew Logo"
                  width={32}
                  height={32}
                  className="rounded"
                />
                <span className="text-xl font-bold text-royal-blue">Royal Blue Crew</span>
              </div>
              <p className="text-sm text-gray-500">
                Professional cleaning services for residential and commercial properties. Serving Manhattan since
                2010.
              </p>
              <div className="flex gap-4">
                <Link href="#" className="text-gray-500 hover:text-royal-blue">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-gray-500 hover:text-royal-blue">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="#" className="text-gray-500 hover:text-royal-blue">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                  <span className="sr-only">Twitter</span>
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#services" className="text-sm text-gray-500 hover:text-royal-blue">
                    Residential Cleaning
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-sm text-gray-500 hover:text-royal-blue">
                    Commercial Cleaning
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-sm text-gray-500 hover:text-royal-blue">
                    Deep Cleaning
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-sm text-gray-500 hover:text-royal-blue">
                    Move In/Out Cleaning
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-sm text-gray-500 hover:text-royal-blue">
                    Post-Construction Cleaning
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#about" className="text-sm text-gray-500 hover:text-royal-blue">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#testimonials" className="text-sm text-gray-500 hover:text-royal-blue">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-500 hover:text-royal-blue">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-500 hover:text-royal-blue">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-500 hover:text-royal-blue">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Contact</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Phone className="h-5 w-5 text-royal-blue mt-0.5" />
                  <span className="text-sm text-gray-500">(555) 123-4567</span>
                </li>
                <li className="flex items-start gap-2">
                  <Mail className="h-5 w-5 text-royal-blue mt-0.5" />
                  <span className="text-sm text-gray-500">info@royalbluecrew.com</span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="h-5 w-5 text-royal-blue mt-0.5" />
                  <span className="text-sm text-gray-500">100 Main Street, Manhattan, NY 10001</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="h-5 w-5 text-royal-blue mt-0.5" />
                  <span className="text-sm text-gray-500">
                    Monday - Friday: 8am - 6pm
                    <br />
                    Saturday: 9am - 2pm
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-gray-500">© {new Date().getFullYear()} Royal Blue Crew. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link href="#" className="text-xs text-gray-500 hover:text-royal-blue">
                Privacy Policy
              </Link>
              <Link href="#" className="text-xs text-gray-500 hover:text-royal-blue">
                Terms of Service
              </Link>
              <Link href="#" className="text-xs text-gray-500 hover:text-royal-blue">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
