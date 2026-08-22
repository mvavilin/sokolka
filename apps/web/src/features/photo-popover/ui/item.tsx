interface Properties {
  label: string;
  value: string;
}

export default function PhotoPopoverItem({ label, value }: Properties): React.JSX.Element {
  return (
    <p className="text-xs">
      <span className="text-muted-foreground">{label}:</span> {value}
    </p>
  );
}
