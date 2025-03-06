export const isArrayNotEmpty = <T>(
  array: T[] | undefined | null
): array is T[] => {
  return array != null && array.length > 0;
};
