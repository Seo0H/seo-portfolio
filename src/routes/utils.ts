import type { ComponentType } from 'react';

export const transition = (importPath: Promise<{ default: ComponentType }>, time: number = 500) =>
  Promise.all([importPath, new Promise((resolve) => setTimeout(resolve, time))]).then(
    ([module]) => module,
  );
