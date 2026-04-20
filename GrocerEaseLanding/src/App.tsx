import { useEffect } from 'react'
import { APP_ORIGIN, mailtoContact, urls } from './config'
import { ButtonLink } from './components/ButtonLink'

const nav = [
  { href: '#problem', label: 'Why GrocerEase' },
  { href: '#shoppers', label: 'Shoppers' },
  { href: '#owners', label: 'Store owners' },
  { href: '#features', label: 'Product' },
  { href: '#team', label: 'Team' },
] as const

const neighborhoods = [
  'Squirrel Hill',
  'Strip District',
  'Shadyside',
  'Oakland',
  'Lawrenceville',
  'South Side',
  'East Liberty',
  'Bloomfield',
  'Downtown',
  'Sewickley',
  'McKees Rocks',
  'Millvale',
  'Edgeworth',
]

const team = [
  {
    name: 'Eric Du',
    role: 'Co-founder & Engineering',
    image: '/team/ericD.jpg',
    bio: 'Leads architecture across the Next.js app, Auth.js, and Supabase-backed data models—focused on reliable Vercel deploys and tooling store owners can use without a training seminar.',
  },
  {
    name: 'Evelyn Lo',
    role: 'Co-founder & Product',
    image: '/team/evelynLo.jpeg',
    bio: 'Turns grocer and shopper research into flows for map discovery, deals, and alerts—keeping the roadmap grounded in Pittsburgh neighborhoods.',
  },
  {
    name: 'Evelyn Lui',
    role: 'Co-founder & Design',
    image: '/team/evelynLu.JPG',
    bio: 'Owns visual and interaction design so discovery feels fast on mobile, accessible, and trustworthy for first-time neighborhood shoppers.',
  },
  {
    name: 'Gabriel Sha',
    role: 'Co-founder & Engineering',
    image: '/team/gabrielS.JPG',
    bio: 'Ships core marketplace features—search, filters, and owner tooling—with an eye on performance and clarity for small-business users.',
  },
  {
    name: 'Ryan Wang',
    role: 'Co-founder & Operations',
    image: '/team/ryanW.jpeg',
    bio: 'Coordinates pilots with Pittsburgh merchants, onboarding, and feedback loops so every release reflects what stores and shoppers actually need.',
  },
  {
    name: 'Andrew Cheng',
    role: 'Co-founder & Strategy',
    image: '/team/andrewPlaceholder.jpg',
    bio: 'Works on partnerships, go-to-market, and the story we tell investors and the community about why local grocers win with GrocerEase.',
  },
] as const

export default function App() {
  const siteUrl = import.meta.env.VITE_SITE_URL as string | undefined
  const originForMeta = siteUrl?.replace(/\/$/, '') || (typeof window !== 'undefined' ? window.location.origin : '')

  useEffect(() => {
    document.title = 'GrocerEase — Pittsburgh neighborhood groceries, before you go'
  }, [])

  const contactMail = mailtoContact()

  return (
    <div className="min-h-screen">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:shadow"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-40 border-b border-stone-200/80 bg-stone-50/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3 sm:px-6">
          <a href="#top" className="group flex shrink-0 items-baseline gap-2">
            <span className="text-lg font-bold tracking-tight text-brand-900">
              GrocerEase
            </span>
            <span className="hidden text-xs font-medium uppercase tracking-wide text-stone-500 sm:inline">
              Pittsburgh
            </span>
          </a>
          <nav
            className="flex min-w-0 flex-1 items-center gap-x-4 overflow-x-auto whitespace-nowrap py-1 text-xs font-medium text-stone-700 sm:text-sm lg:flex-wrap lg:justify-end lg:gap-x-4 lg:whitespace-normal"
            aria-label="Primary"
          >
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hover:text-brand-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-700"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex shrink-0 items-center gap-2">
            <ButtonLink href={urls.shopperSignup()} variant="secondary" className="!px-3 !py-2 text-xs sm:text-sm">
              Sign up
            </ButtonLink>
            <ButtonLink href={urls.home()} className="!px-3 !py-2 text-xs sm:text-sm">
              Open app
            </ButtonLink>
          </div>
        </div>
      </header>

      <main id="main">
        <section
          id="top"
          className="relative overflow-hidden border-b border-stone-200 bg-brand-950 text-stone-50"
        >
          <img
            src="/images/hero-pittsburgh.jpg"
            alt="Pittsburgh skyline at dusk over the rivers"
            className="absolute inset-0 h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-950/95 via-brand-900/90 to-brand-800/85" />
          <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
            <p className="mb-3 inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent-500 ring-1 ring-white/20">
              Built for Pittsburgh’s neighborhood grocers
            </p>
            <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              Discover what nearby grocery stores have in stock—before you leave home.
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-stone-200 sm:text-xl">
              GrocerEase is the responsive web app where shoppers explore deals, “fresh today”
              updates, and specialty filters across the city—while owners publish weekly specials
              and quick posts from one secure dashboard.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <ButtonLink href={urls.shopperSignup()} className="bg-accent-500 text-brand-950 hover:bg-accent-400 focus-visible:outline-accent-500">
                Start shopping 
              </ButtonLink>
              <ButtonLink href={urls.ownerSignup()} variant="secondary" className="bg-white/10 text-white ring-white/30 hover:bg-white/20">
                List your store
              </ButtonLink>
              <ButtonLink href={urls.deals()} variant="ghost" className="text-white hover:text-accent-400">
                Browse deals without signing up →
              </ButtonLink>
            </div>
          </div>
        </section>

        <section
          id="problem"
          aria-labelledby="problem-heading"
          className="border-b border-stone-200 bg-white"
        >
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 id="problem-heading" className="text-3xl font-bold tracking-tight text-brand-950">
                  Trips add up—especially when shelves surprise you
                </h2>
                <p className="mt-4 text-lg text-stone-600">
                  Pittsburgh’s neighborhood grocers carry the produce, spices, and prepared foods
                  that big chains overlook—but busy families and students still make extra runs when
                  they are unsure what is in stock or on sale.
                </p>
                <p className="mt-4 text-stone-600">
                  GrocerEase meets both sides where they are: shoppers get a map-first discovery
                  experience with deals and freshness signals; owners get lightweight tools to post
                  updates without running a second website.
                </p>
              </div>
              <figure className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-stone-200">
                <img
                  src="/images/produce-market.jpg"
                  alt="Fresh produce and groceries at a local market"
                  className="h-full w-full object-cover"
                  width={1200}
                  height={800}
                  loading="lazy"
                />
                <figcaption className="border-t border-stone-100 bg-stone-50 px-4 py-3 text-sm text-stone-600">
                  We highlight what makes each Pittsburgh grocer unique—before you head out the door.
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section
          id="shoppers"
          aria-labelledby="shoppers-heading"
          className="border-b border-stone-200 bg-stone-50"
        >
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
            <h2 id="shoppers-heading" className="text-3xl font-bold tracking-tight text-brand-950">
              For shoppers
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-stone-600">
              Browse the city without creating an account. When you want alerts and
              saved preferences, create a shopper account in seconds.
            </p>
            <ol className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                {
                  step: '1',
                  title: 'Explore the map or deals feed',
                  body: `Open the live app at ${APP_ORIGIN}, jump to the map or deals page, and scan what is happening near you.`,
                },
                {
                  step: '2',
                  title: 'Dial in your neighborhood',
                  body: 'Use geolocation or pick a Pittsburgh neighborhood manually when you are planning ahead.',
                },
                {
                  step: '3',
                  title: 'Go deeper with an account',
                  body: 'Sign up to subscribe to stores or items, manage alerts, and keep track of favorites.',
                },
              ].map((item) => (
                <li
                  key={item.step}
                  className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm"
                >
                  <span className="text-sm font-bold text-brand-700">Step {item.step}</span>
                  <h3 className="mt-2 text-lg font-semibold text-stone-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-stone-600">{item.body}</p>
                </li>
              ))}
            </ol>
            <div className="mt-10 flex flex-wrap gap-3">
              <ButtonLink href={urls.home()}>Open the home discovery feed</ButtonLink>
              <ButtonLink href={urls.map()} variant="secondary">
                Explore the map
              </ButtonLink>
              <ButtonLink href={urls.signIn()} variant="ghost" className="!px-0">
                Already have an account? Sign in
              </ButtonLink>
            </div>
          </div>
        </section>

        <section
          id="owners"
          aria-labelledby="owners-heading"
          className="border-b border-stone-200 bg-white"
        >
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <figure className="order-2 overflow-hidden rounded-2xl shadow-lg ring-1 ring-stone-200 lg:order-1">
                <img
                  src="/images/store-owner.jpg"
                  alt="Store owner arranging products on shelves"
                  className="h-full w-full object-cover"
                  width={1200}
                  height={800}
                  loading="lazy"
                />
              </figure>
              <div className="order-1 lg:order-2">
                <h2 id="owners-heading" className="text-3xl font-bold tracking-tight text-brand-950">
                  For store owners
                </h2>
                <p className="mt-4 text-stone-600">
                  Claim your business account, polish your store profile, and publish weekly deals
                  plus short “fresh today” posts. Reuse past specials when you are in a rush—your
                  dashboard keeps everything organized under{' '}
                  <code className="rounded bg-stone-100 px-1 text-sm">/dashboard</code>.
                </p>
                <ul className="mt-6 space-y-3 text-stone-700">
                  <li className="flex gap-2">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brand-600" aria-hidden />
                    Secure owner login with Auth.js credentials backed by PostgreSQL (Supabase).
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brand-600" aria-hidden />
                    Manage deals with expiry dates so shoppers always see what is current.
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brand-600" aria-hidden />
                    Post timely updates that appear alongside discovery and map experiences.
                  </li>
                </ul>
                <div className="mt-8 flex flex-wrap gap-3">
                  <ButtonLink href={urls.ownerSignup()}>Create an owner account</ButtonLink>
                  <ButtonLink href={urls.signIn()} variant="secondary">
                    Sign in
                  </ButtonLink>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="pittsburgh"
          aria-labelledby="pittsburgh-heading"
          className="border-b border-stone-200 bg-brand-900 text-stone-50"
        >
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 id="pittsburgh-heading" className="text-3xl font-bold tracking-tight">
                  Pittsburgh isn’t an afterthought—it is the point
                </h2>
                <p className="mt-4 text-lg text-brand-100">
                  From the Strip District’s international aisles to Squirrel Hill’s family-run markets,
                  our neighbors rely on small grocers every week. GrocerEase is geocentric to the
                  city: map centers, fixtures, and ZIP → neighborhood logic keep the experience rooted
                  in the places Pittsburghers actually live and work.
                </p>
                <blockquote className="mt-6 border-l-4 border-accent-500 pl-4 text-lg font-medium text-white">
                  “We built GrocerEase because our team loves this city’s food culture—and we want
                  local merchants to have the same digital presence national chains take for granted.”
                </blockquote>
              </div>
              <div>
                <img
                  src="/images/neighborhood-map.jpg"
                  alt="Abstract map pattern suggesting city navigation"
                  className="mb-6 w-full rounded-2xl object-cover shadow-lg ring-1 ring-white/10"
                  width={1200}
                  height={800}
                  loading="lazy"
                />
                <h3 className="text-sm font-semibold uppercase tracking-wide text-accent-400">
                  Neighborhoods we highlight
                </h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {neighborhoods.map((n) => (
                    <li
                      key={n}
                      className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white ring-1 ring-white/15"
                    >
                      {n}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section
          id="features"
          aria-labelledby="features-heading"
          className="border-b border-stone-200 bg-stone-50"
        >
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
            <h2 id="features-heading" className="text-3xl font-bold tracking-tight text-brand-950">
              Everything we highlight in one pass
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-stone-600">
              These capabilities ship in the GrocerEase web app today—no separate download required.
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {[
                {
                  title: 'Discovery + map',
                  body: 'Find stores near you, filter by specialty (organic, halal, EBT-friendly, and more), and search for specific items.',
                },
                {
                  title: 'Deals with expiry',
                  body: 'Owners schedule weekly specials; shoppers browse a deals feed that respects dates so offers never feel stale.',
                },
                {
                  title: 'Fresh today posts',
                  body: 'Short updates call out arrivals, bakery pulls, and seasonal produce the moment they hit the floor.',
                },
                {
                  title: 'Alerts for stores & items',
                  body: 'Signed-in shoppers subscribe to the stores or products they care about and manage everything in /my-alerts.',
                },
              ].map((f) => (
                <article
                  key={f.title}
                  className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-brand-900">{f.title}</h3>
                  <p className="mt-2 text-sm text-stone-600">{f.body}</p>
                </article>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              <ButtonLink href={urls.deals()}>See the deals feed</ButtonLink>
              <ButtonLink href={urls.map()} variant="secondary">
                Launch the map
              </ButtonLink>
              <ButtonLink href={urls.myAlerts()} variant="ghost" className="!px-0">
                Manage alerts (sign in required)
              </ButtonLink>
            </div>
          </div>
        </section>

        <section id="team" aria-labelledby="team-heading" className="border-b border-stone-200 bg-stone-50">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
            <h2 id="team-heading" className="text-3xl font-bold tracking-tight text-brand-950">
              Team
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-stone-600">
              Six founders building GrocerEase between CMU coursework and pilots with Pittsburgh
              merchants—presented for investors and neighbors alike.
            </p>
            <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2">
              {team.map((member) => (
                <article
                  key={member.name}
                  className="flex min-h-0 flex-row items-stretch overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm"
                >
                  <div className="relative w-[min(32%,10.5rem)] shrink-0 sm:w-[min(30%,12rem)]">
                    <img
                      src={member.image}
                      alt={`Portrait of ${member.name}`}
                      className="h-full min-h-[6.5rem] w-full object-cover object-top sm:min-h-[7.5rem]"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col justify-center gap-1 px-4 py-4 sm:px-6 sm:py-5">
                    <h3 className="text-lg font-semibold text-brand-950 sm:text-xl">
                      {member.name}
                    </h3>
                    <p className="text-sm font-medium text-brand-700">{member.role}</p>
                    <p className="mt-2 text-sm leading-relaxed text-stone-600">{member.bio}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-stone-200 bg-brand-950 text-stone-200">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <div className="flex flex-col gap-8 lg:flex-row lg:justify-between">
            <div>
              <p className="text-lg font-bold text-white">GrocerEase</p>
              <p className="mt-2 max-w-md text-sm text-stone-300">
                Pittsburgh-first grocery discovery. Built with Next.js, Auth.js, Prisma, Supabase,
                and Leaflet—deployed continuously on Vercel.
              </p>
              {originForMeta ? (
                <p className="mt-3 text-xs text-stone-500">
                  Marketing site:{' '}
                  <span className="text-stone-400">{originForMeta}</span>
                </p>
              ) : null}
            </div>
            <div className="grid grid-cols-2 gap-8 text-sm sm:grid-cols-3">
              <div>
                <h3 className="font-semibold text-white">Explore</h3>
                <ul className="mt-3 space-y-2">
                  <li>
                    <a className="hover:text-white" href={urls.home()}>
                      Home feed
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-white" href={urls.map()}>
                      Map
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-white" href={urls.deals()}>
                      Deals
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-white">Accounts</h3>
                <ul className="mt-3 space-y-2">
                  <li>
                    <a className="hover:text-white" href={urls.shopperSignup()}>
                      Shopper sign up
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-white" href={urls.signIn()}>
                      Sign in
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-white" href={urls.ownerSignup()}>
                      Owner sign up
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-white">Project</h3>
                <ul className="mt-3 space-y-2">
                  <li>
                    <a
                      className="hover:text-white"
                      href={urls.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Source on GitHub
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:text-white"
                      href={urls.githubIssues}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Feedback & issues
                    </a>
                  </li>
                  {contactMail ? (
                    <li>
                      <a className="hover:text-white" href={contactMail}>
                        Email the team
                      </a>
                    </li>
                  ) : null}
                </ul>
              </div>
            </div>
          </div>
          <p className="mt-10 border-t border-white/10 pt-6 text-xs text-stone-500">
            © {new Date().getFullYear()} GrocerEase. Made with care in Pittsburgh.
          </p>
        </div>
      </footer>
    </div>
  )
}
