import telegramIcon from '@shared/assets/icons/telegram.svg';
import vkIcon from '@shared/assets/icons/vk.svg';

interface Contact {
  label: string;
  href: string;
  icon: string;
}

export const contacts: readonly Contact[] = [
  {
    label: 'Telegram',
    href: 'https://t.me/sator2003',
    icon: telegramIcon,
  },
  {
    label: 'VK',
    href: 'https://vk.com/sator2003',
    icon: vkIcon,
  },
];
