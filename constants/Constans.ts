export type NavLink = {
  id: number;
  label: string;
  href: string; 
};

export const navLinks: NavLink[] = [
  { id: 1, label: 'Home', href: 'home' },
  { id: 2, label: 'Hot Bids', href: 'Hot-bids' },
  { id: 3, label: 'Collection', href: 'Collection' },
  { id: 4, label: 'Trending', href: 'Trending' },
];

