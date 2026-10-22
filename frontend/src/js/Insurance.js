// Data for the "Insurance Products" cards (order = left→right, top→bottom, same as the design).
//   image : illustration in  public/images/insurance/   (transparent PNG, about 200 x 170 px)
//   icon  : emoji shown until the illustration is added
//   href  : where the card's arrow goes (for now: later section / page of your choice)
export const insuranceProducts = [
  { title: 'Health',   image: '../src/assets/OurServies/Insurance.png',   icon: '🩺', href: '#products' },
  { title: 'Travel',   image: '/images/insurance/product-travel.png',   icon: '🧳', href: '#products' },
  { title: 'Home',     image: '/images/insurance/product-home.png',     icon: '🏠', href: '#products' },
  { title: 'Mobility', image: '/images/insurance/product-mobility.png', icon: '🚗', href: '#products' },
  { title: 'Term',     image: '/images/insurance/product-term.png',     icon: '🛡️', href: '#products' },
  { title: 'Business', image: '/images/insurance/product-business.png', icon: '🏢', href: '#products' },
];