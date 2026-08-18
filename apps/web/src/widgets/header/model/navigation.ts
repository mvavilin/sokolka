import type { LucideIcon } from 'lucide-react';
import { BookMarked, Images, Info, Landmark, Settings } from 'lucide-react';

interface NavigationItem {
  href: string;
  translationKey: string;
  icon: LucideIcon;
}

export const navigation: readonly NavigationItem[] = [
  {
    href: '/history',
    translationKey: 'pages.history.title',
    icon: BookMarked,
  },
  {
    href: '/attractions',
    translationKey: 'pages.attractions.title',
    icon: Landmark,
  },
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
  {
    href: '/settings',
    translationKey: 'pages.settings.title',
    icon: Settings,
  },
];
