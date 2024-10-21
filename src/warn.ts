const printed = new Set<string>();

export function warnOnce(code: string, message: string): void {
  if (printed.has(code)) {
    return;
  }

  console.warn(`[tdlib-native ${code}] ${message}`);
  printed.add(code);
}
