import type { LucideIcon } from 'lucide-react';
import type { ICON_TYPES } from '@shared/ui/icon';

type IconType = (typeof ICON_TYPES)[keyof typeof ICON_TYPES];

export type Icon = {
  type: IconType;
  value: LucideIcon | string;
};
