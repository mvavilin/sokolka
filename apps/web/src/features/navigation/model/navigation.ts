import type { LucideIcon } from 'lucide-react';

import { BookMarked, Images, Info, Settings } from 'lucide-react';
// import { Landmark } from 'lucide-react';

export interface NavigationItem {
  href: string;
  translationKey: string;
  icon: LucideIcon;
}

export const desktopNavigation: readonly NavigationItem[] = [
  {
    href: '/history-and-culture',
    translationKey: 'pages.historyAndCulture.title',
    icon: BookMarked,
  },
  // {
  //   href: '/history',
  //   translationKey: 'pages.history.title',
  //   icon: BookMarked,
  // },
  // {
  //   href: '/attractions',
  //   translationKey: 'pages.attractions.title',
  //   icon: Landmark,
  // },
  {
    href: '/gallery',
    translationKey: 'pages.gallery.title',
    icon: Images,
  },
  {
    href: '/about',
    translationKey: 'pages.about.title',
    icon: Info,
  },
];

export const mobileNavigation: readonly NavigationItem[] = [
  ...desktopNavigation,
  {
    href: '/settings',
    translationKey: 'pages.settings.title',
    icon: Settings,
  },
];
