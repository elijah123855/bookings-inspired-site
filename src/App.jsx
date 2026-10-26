import { useMemo, useState } from 'react'

const destinations = [
  { name: 'Dubai', subtitle: 'Desert luxury', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=80' },
  { name: 'Paris', subtitle: 'City romance', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=900&q=80' },
  { name: 'Tokyo', subtitle: 'Night life', image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=900&q=80' },
  { name: 'Bali', subtitle: 'Relax & unwind', image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=900&q=80' }
]

const hotels = [
  {
    id: 1,
    name: 'Azure Cove Resort',
    location: 'Dubai Marina, UAE',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    rating: 4.8,
    reviews: 420,
    price: 219,
    originalPrice: 289,
    tag: 'Top pick',
    breakfast: true,
    freeCancel: true,
    type: 'Luxury',
    description: 'Oceanfront rooms with skyline views and complimentary breakfast.'
  },
  {
    id: 2,
    name: 'Montclair Hotel',
    location: 'Paris, France',
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=80',
    rating: 4.7,
    reviews: 392,
    price: 186,
    originalPrice: 245,
    tag: 'Popular',
    breakfast: true,
    freeCancel: true,
    type: 'Boutique',
    description: 'A charming boutique stay near the Seine with café style dining.'
  },
  {
    id: 3,
    name: 'Sora Garden Hotel',
    location: 'Tokyo, Japan',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
    rating: 4.9,
    reviews: 624,
    price: 261,
    originalPrice: 318,
    tag: 'Guest favorite',
    breakfast: false,
    freeCancel: true,
    type: 'Wellness',
    description: 'Zen-inspired hotel with a spa, rooftop lounge, and serene interiors.'
  },
  {
    id: 4,
    name: 'Palm Horizon Villa',
    location: 'Bali, Indonesia',
    image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
    rating: 4.6,
    reviews: 210,
    price: 144,
    originalPrice: 198,
    tag: 'Great value',
    breakfast: true,
    freeCancel: false,
    type: 'Resort',
    description: 'Private pool villas set in lush tropical gardens for a secluded stay.'
  },
  {
    id: 5,
    name: 'Harbor Lights Suites',
    location: 'Lisbon, Portugal',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80',
    rating: 4.5,
    reviews: 188,
    price: 132,
    originalPrice: 171,
    tag: 'Budget pick',
    breakfast: true,
    freeCancel: true,
    type: 'City stay',
    description: 'Stylish rooms in the historic district close to tram lines and cafés.'
  },
  {
    id: 6,
    name: 'Skyline Heights',
    location: 'New York, USA',
    image: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1200&q=80',
    rating: 4.8,
    reviews: 510,
    price: 248,
    originalPrice: 299,
    tag: 'Weekend winner',
    breakfast: false,
    freeCancel: true,
    type: 'City hotel',
    description: 'Downtown stay with panoramic views, gym, and premium lounge access.'
  }
]

const perks = [
  { icon: '✓', title: 'Flexible booking', text: 'Change or cancel most stays without stress.' },
  { icon: '★', title: 'Booked by millions', text: 'Trusted by travelers worldwide for iconic stays.' },
  { icon: '🏆', title: 'Top-rated stays', text: 'Curated homes and hotels with standout guest reviews.' },
  { icon: '💬', title: '24/7 support', text: 'Round-the-clock travel help, from checkout to check-in.' }
]

const activities = [
  { title: 'Beach escapes', tag: '4 stays' },
  { title: 'Mountain cabins', tag: '7 stays' },
  { title: 'Foodie cities', tag: '12 stays' },
  { title: 'Family resorts', tag: '8 stays' }
]

const sortOptions = ['Recommended', 'Price: low to high', 'Price: high to low', 'Guest rating']

function App() {
  const [destination, setDestination] = useState('Dubai')
  const [activeFilter, setActiveFilter] = useState('All stays')
  const [sortBy, setSortBy] = useState('Recommended')

  const visibleHotels = useMemo(() => {
    let filtered = [...hotels]

    if (destination && destination !== 'Anywhere') {
      filtered = filtered.filter((hotel) =>
        hotel.location.toLowerCase().includes(destination.toLowerCase()) ||
        hotel.name.toLowerCase().includes(destination.toLowerCase())
      )
    }

    if (activeFilter !== 'All stays') {
      filtered = filtered.filter((hotel) => hotel.type === activeFilter || hotel.tag === activeFilter)
    }

    if (sortBy === 'Price: low to high') {
      filtered.sort((a, b) => a.price - b.price)
    } else if (sortBy === 'Price: high to low') {
      filtered.sort((a, b) => b.price - a.price)
    } else if (sortBy === 'Guest rating') {
      filtered.sort((a, b) => b.rating - a.rating)
    }

    return filtered
  }, [destination, activeFilter, sortBy])

  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand-wrap">
          <div className="brand-mark">S</div>
          <div className="brand-name">StayEase</div>
        </div>

        <nav className="main-nav">
          <a href="#">Stays</a>
          <a href="#">Flights</a>
          <a href="#">Cars</a>
          <a href="#">Attractions</a>
        </nav>

        <div className="nav-actions">
          <button className="ghost-btn">List your property</button>
          <button className="nav-pill">Sign in</button>
        </div>
      </header>

      <main className="content-wrap">
        <section className="hero-panel">
          <div className="hero-copy">
            <div className="eyebrow">Plan your next escape</div>
            <h1>Find the place where your next story begins.</h1>
            <p>
              Discover extraordinary stays, from city apartments to seaside villas, all in one place.
            </p>
          </div>

          <div className="search-card">
            <div className="search-row">
              <div className="field large">
                <span className="label">Where to?</span>
                <input
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  placeholder="Dubai, Paris, Tokyo..."
                />
              </div>
              <div className="field">
                <span className="label">Check in</span>
                <button type="button">May 15</button>
              </div>
              <div className="field">
                <span className="label">Check out</span>
                <button type="button">May 18</button>
              </div>
              <div className="field">
                <span className="label">Guests</span>
                <button type="button">2 adults</button>
              </div>
              <button className="search-btn">Search</button>
            </div>

            <div className="quick-chips">
              <button className="chip active">Weekend</button>
              <button className="chip">Beach</button>
              <button className="chip">City break</button>
              <button className="chip">Family</button>
              <button className="chip">Luxury</button>
            </div>
          </div>
        </section>

        <section className="destinations-block">
          <div className="section-heading">
            <div>
              <span className="eyebrow dark">Popular destinations</span>
              <h2>Top places for your next trip</h2>
            </div>
            <a href="#">View all</a>
          </div>

          <div className="destination-grid">
            {destinations.map((item) => (
              <button key={item.name} className="destination-card" onClick={() => setDestination(item.name)}>
                <img src={item.image} alt={item.name} />
                <div className="destination-overlay">
                  <strong>{item.name}</strong>
                  <span>{item.subtitle}</span>
                </div>
              </button>
            ))}
          </div>
        </section>

        <section className="stay-picker">
          <div className="section-heading inline">
            <div>
              <span className="eyebrow dark">Stay picks</span>
              <h2>Properties loved by travelers</h2>
            </div>

            <div className="filters-row">
              {['All stays', 'Luxury', 'Boutique', 'Resort', 'City hotel', 'Wellness'].map((option) => (
                <button
                  key={option}
                  className={`filter-btn ${activeFilter === option ? 'selected' : ''}`}
                  onClick={() => setActiveFilter(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="sort-row">
            <span>{visibleHotels.length} properties</span>
            <label>
              Sort by
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                {sortOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </label>
          </div>

          <div className="hotel-grid">
            {visibleHotels.map((hotel) => (
              <article key={hotel.id} className="hotel-card">
                <div className="hotel-image-wrap">
                  <img src={hotel.image} alt={hotel.name} />
                  <span className="hotel-tag">{hotel.tag}</span>
                </div>

                <div className="hotel-body">
                  <div className="hotel-topline">
                    <span>{hotel.type}</span>
                    <div className="rating-box">
                      <span>★</span>
                      <strong>{hotel.rating}</strong>
                    </div>
                  </div>

                  <h3>{hotel.name}</h3>
                  <p className="location">{hotel.location}</p>
                  <p className="hotel-description">{hotel.description}</p>

                  <div className="meta-row">
                    {hotel.breakfast && <span>Breakfast</span>}
                    {hotel.freeCancel && <span>Free cancellation</span>}
                  </div>

                  <div className="hotel-footer">
                    <div>
                      <span className="price">${hotel.price}</span>
                      <span className="night">/night</span>
                    </div>
                    <span className="old-price">${hotel.originalPrice}</span>
                    <button>View deal</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="feature-strip">
          <div className="section-heading compact">
            <div>
              <span className="eyebrow dark">Why travelers love us</span>
              <h2>Everything you need to book with confidence</h2>
            </div>
          </div>

          <div className="perk-grid">
            {perks.map((item) => (
              <div key={item.title} className="perk-card">
                <span className="perk-icon">{item.icon}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="inspiration-block">
          <div className="section-heading">
            <div>
              <span className="eyebrow dark">Travel inspiration</span>
              <h2>Explore styles for every kind of getaway</h2>
            </div>
            <a href="#">See more</a>
          </div>

          <div className="activities-grid">
            {activities.map((item) => (
              <div key={item.title} className="activity-card">
                <div className="activity-visual" />
                <div className="activity-copy">
                  <h3>{item.title}</h3>
                  <span>{item.tag}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-brand">
          <div className="brand-mark">S</div>
          <div>
            <strong>StayEase</strong>
            <span>Travel booking, simplified.</span>
          </div>
        </div>

        <div className="footer-links">
          <span>Support</span>
          <span>Property management</span>
          <span>Privacy</span>
          <span>Terms</span>
        </div>
      </footer>
    </div>
  )
}

export default App
