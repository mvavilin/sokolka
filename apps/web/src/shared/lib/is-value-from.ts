export const isValueFrom = <T extends Record<string, string>>(
  values: T,
  value: string,
): value is T[keyof T] => Object.values(values).includes(value as T[keyof T]);
