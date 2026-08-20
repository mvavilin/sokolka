import type { SettingsOption } from '@features/settings';
import { SettingsOptionIcon } from '@features/settings';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@shared/ui/select';

interface SettingsSelectProperties {
  value: string;
  options: readonly SettingsOption[];
  onValueChange: (value: string) => void;
  ariaLabel: string;
}

export default function SettingsSelect({
  value,
  options,
  onValueChange,
  ariaLabel,
}: SettingsSelectProperties): React.JSX.Element {
  const selectedOption = options.find((option) => option.value === value);

  return (
    <Select
      value={value}
      onValueChange={(nextValue) => {
        if (nextValue) {
          onValueChange(nextValue);
        }
      }}
    >
      <SelectTrigger className="w-auto min-w-32" aria-label={ariaLabel}>
        <SelectValue>
          {selectedOption && (
            <span className="flex items-center gap-2">
              <SettingsOptionIcon icon={selectedOption.icon} />
              <span>{selectedOption.label}</span>
            </span>
          )}
        </SelectValue>
      </SelectTrigger>

      <SelectContent>
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            <span className="flex items-center gap-2">
              <SettingsOptionIcon icon={option.icon} />
              <span>{option.label}</span>
            </span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
