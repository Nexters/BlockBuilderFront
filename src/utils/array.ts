export function generate2DData<T>({ data, size = 4 }: { data: T[]; size?: number }): T[][] {
  const result = [];

  for (let i = 0; i < data.length; i += size) {
    result.push(data.slice(i, i + size));
  }

  return result;
}
