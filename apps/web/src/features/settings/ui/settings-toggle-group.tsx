import { ToggleGroup, ToggleGroupItem } from '@shared/ui/toggle-group';

interface SettingsToggleGroupProperties {
  value: string;
  title: string;
  options: readonly {
    value: string;
    label: string;
  }[];
  onValueChange: (value: string) => void;
}

const SettingsToggleGroup = ({
  value,
  title,
  options,
  onValueChange,
}: SettingsToggleGroupProperties): React.JSX.Element => (
  <div className="flex items-center gap-4">
    <span className="min-w-52 text-sm font-medium">{title}</span>

    <ToggleGroup
      value={[value]}
      onValueChange={(values) => {
        const nextValue = values[0];

        if (nextValue) onValueChange(nextValue);
      }}
    >
      {options.map((option) => (
        <ToggleGroupItem key={option.value} value={option.value} aria-label={option.label}>
          {option.label}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  </div>
);

export default SettingsToggleGroup;
