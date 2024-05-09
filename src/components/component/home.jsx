
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function Home() {
  return (<div className="bg-white text-gray-900">
    <header
      className="flex items-center h-16 px-4 border-b shrink-0 md:px-6 !important">
      <nav
        className="flex-col hidden w-full gap-6 text-lg font-medium md:flex md:flex-row md:items-center justify-between md:gap-5 md:text-sm lg:gap-6 !important">
        <Link
          className="flex items-center gap-2 text-lg font-semibold md:text-base !important"
          href="#">
          <MountainIcon className="w-6 h-6 !important" />
          <span className="sr-only !important">Bite by Mood</span>
        </Link>
        <div className="flex gap-4">
        <Link className="font-bold !important" href="#home">
          Home
        </Link>
        <Link className="font-bold !important" href="#howitworks">
          How it Works
        </Link>
        <Link className="font-bold !important" href="#featured">
          Featured Cuisines
        </Link>
        <Link className="font-bold !important" href="#testimonials">
          Testimonials
          </Link>
          </div>
      </nav>

    </header>
    <main>
      <section
        id = 'hero'
        className="w-full py-12 md:py-24 lg:py-32  bg-gradient-to-r from-[#FFF5E6] to-[#FFF1D9] !important">
        <div className="container px-4 md:px-6 !important">
          <div className="flex flex-col justify-center space-y-4 !important">
            <div className="space-y-2 !important">
              <h1
                className="text-5xl font-bold tracking-tighter sm:text-6xl xl:text-7xl/none !important">
                Bite by Mood
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl !important">
                Find the perfect meal for your mood with our personalized food recommendations.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row !important">
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-[#FF6B6B] px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-[#FF6B6B]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#FF6B6B] disabled:pointer-events-none disabled:opacity-50 !important"
                href="/describe">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section id='howitworks' className="w-full py-12 md:py-24 lg:py-32 !important">
        <div className="container px-4 md:px-6 !important">
          <div className="space-y-4 text-center !important">
            <div className="space-y-2 !important">
              <h2
                className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl !important">How it Works</h2>
              <p
                className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed !important mx-auto">
                Our app makes it easy to find the perfect meal for your mood.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 !important">
              <div className="space-y-2 !important">
                <SmileIcon className="mx-auto h-12 w-12 text-[#FF6B6B] !important" />
                <h3 className="text-xl font-bold !important">Tell us your mood</h3>
                <p className="text-gray-500 !important">
                  Select your current mood and we'll suggest the perfect meal.
                </p>
              </div>
              <div className="space-y-2 !important">
                <SatelliteDishIcon className="mx-auto h-12 w-12 text-[#FF6B6B] !important" />
                <h3 className="text-xl font-bold !important">Get personalized recommendations</h3>
                <p className="text-gray-500 !important">
                  Our algorithm will suggest dishes that match your mood and preferences.
                </p>
              </div>
              <div className="space-y-2 !important">
                <SendIcon className="mx-auto h-12 w-12 text-[#FF6B6B] !important" />
                <h3 className="text-xl font-bold !important">Order with a tap</h3>
                <p className="text-gray-500 !important">
                  Once you've found the perfect meal, order it with a few taps.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='featured' className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 !important">
        <div className="container px-4 md:px-6 !important">
          <div className="space-y-4 text-center !important">
            <div className="space-y-2 !important">
              <h2
                className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl !important">
                Featured Cuisines
              </h2>
              <p
                className="max-w-[700px] mx-auto text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed !important">
                Explore a variety of delicious cuisines on our app.
              </p>
            </div>
            <div
              className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 !important">
              <div className="space-y-2 !important">
                <img
                  alt="Italian"
                  className="mx-auto aspect-square overflow-hidden rounded-xl object-cover !important"
                  height="150"
                  src="https://c.ndtvimg.com/2021-04/umk8i7ko_pasta_625x300_01_April_21.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=886"
                  width="150" />
                <h3 className="text-lg font-bold !important">Italian</h3>
              </div>
              <div className="space-y-2 !important">
                <img
                  alt="Mexican"
                  className="mx-auto aspect-square overflow-hidden rounded-xl object-cover !important"
                  height="150"
                  src="https://curlytales.com/wp-content/uploads/2019/10/Best-Mexican-restaurants-in-the-world.jpg"
                  width="150" />
                <h3 className="text-lg font-bold !important">Mexican</h3>
              </div>
              <div className="space-y-2 !important">
                <img
                  alt="Japanese"
                  className="mx-auto aspect-square overflow-hidden rounded-xl object-cover !important"
                  height="150"
                  src="https://img.freepik.com/premium-photo/set-traditional-japanese-food-drinks-soup-ramen-boiled-rice-sushi-rolls-green-tea-teapot-black-stone-background-dishes-japanese-cuisine-from-space-text_92134-2785.jpg"
                  width="150" />
                <h3 className="text-lg font-bold !important">Japanese</h3>
              </div>
              <div className="space-y-2 !important">
                <img
                  alt="Indian"
                  className="mx-auto aspect-square overflow-hidden rounded-xl object-cover !important"
                  height="150"
                  src="data:image/jpeg;base64,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"
                  width="150" />
                <h3 className="text-lg font-bold !important">Indian</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='testimonials' className="w-full py-12 md:py-24 lg:py-32 !important">
        <div className="container px-4 md:px-6 !important">
          <div className="space-y-4 text-center !important">
            <div className="space-y-2 !important">
              <h2
                className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl !important">
                What Our Customers Say
              </h2>
              <p
                className="max-w-[700px] mx-auto text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed !important">
                Hear from real people who love using our app.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 !important">
              <div className="space-y-4 rounded-lg bg-white p-6 shadow-md !important">
                <blockquote className="text-lg font-semibold leading-snug !important">
                  “Bite by Mood has completely changed the way I discover new restaurants. It's so easy to find the
                  perfect meal for my mood.”
                </blockquote>
                <div>
                  <div className="font-semibold !important">Sarah Johnson</div>
                  <div className="text-sm text-gray-500 !important">Marketing Manager</div>
                </div>
              </div>
              <div className="space-y-4 rounded-lg bg-white p-6 shadow-md !important">
                <blockquote className="text-lg font-semibold leading-snug !important">
                  “I used to spend so much time scrolling through food delivery apps, but Bite by Mood makes it a
                  breeze to find exactly what I'm craving.”
                </blockquote>
                <div>
                  <div className="font-semibold !important">Michael Lee</div>
                  <div className="text-sm text-gray-500 !important">Software Engineer</div>
                </div>
              </div>
              <div className="space-y-4 rounded-lg bg-white p-6 shadow-md !important">
                <blockquote className="text-lg font-semibold leading-snug !important">
                  “Bite by Mood has become an essential part of my daily routine. I love how it helps me discover new
                  cuisines and restaurants.”
                </blockquote>
                <div>
                  <div className="font-semibold !important">Emily Chen</div>
                  <div className="text-sm text-gray-500 !important">Graphic Designer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </section>

    </main>
    <footer
      className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t !important">
      <p className="text-xs text-gray-500 !important">© 2024 Bite by Mood. All rights reserved.</p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6 !important">
        <Link
          className="text-xs hover:underline underline-offset-4 !important"
          href="#">
          Terms of Service
        </Link>
        <Link
          className="text-xs hover:underline underline-offset-4 !important"
          href="#">
          Privacy
        </Link>
        <Link
          className="text-xs hover:underline underline-offset-4 !important"
          href="#">
          Contact Us
        </Link>
      </nav>
    </footer>
  </div>);
}

function MountainIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>)
  );
}


function SatelliteDishIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M4 10a7.31 7.31 0 0 0 10 10Z" />
      <path d="m9 15 3-3" />
      <path d="M17 13a6 6 0 0 0-6-6" />
      <path d="M21 13A10 10 0 0 0 11 3" />
    </svg>)
  );
}


function SearchIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>)
  );
}


function SendIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>)
  );
}


function SmileIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <line x1="9" x2="9.01" y1="9" y2="9" />
      <line x1="15" x2="15.01" y1="9" y2="9" />
    </svg>)
  );
}
