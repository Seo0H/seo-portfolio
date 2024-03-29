import { parseSelector } from 'hast-util-parse-selector';
import { selectAll } from 'hast-util-select';
import { visit } from 'unist-util-visit';

import type { ElementContent, Nodes } from 'hast';

export interface Options {
  /**
   * support selector syntax
   * url : https://github.com/syntax-tree/hast-util-select?tab=readme-ov-file#support
   * {@link selectAll}
   */
  selector: string;
  wrapper?: string;
}

function transform(tree: Nodes, { selector, wrapper }: Options) {
  if (typeof wrapper !== 'string') {
    throw new TypeError('Expected a `string` as wrapper');
  }

  if (typeof selector !== 'string') {
    throw new TypeError('Expected a `string` as selector');
  }

  for (const match of selectAll(selector, tree))
    visit(tree, match, (node, idx, parent) => {
      if (idx === undefined || parent === undefined) return;

      const wrap = parseSelector(wrapper);
      let upperSibling: ElementContent | undefined = undefined;
      let upperSiblingIdx = -1;

      for (let i = idx; i >= 0; i--) {
        const target = parent.children[i];
        if ('tagName' in target === false) continue;
        const isHeadingType = target.tagName[0] === 'h';

        if (isHeadingType) {
          upperSibling = target as ElementContent;
          upperSiblingIdx = i;
          break;
        }
      }

      if (!upperSibling) return;

      wrap.children = [upperSibling, node];

      parent.children = [
        ...parent.children.slice(0, upperSiblingIdx),
        wrap,
        ...parent.children.slice(idx + 1),
      ];
    });
}

export default (allOptions: Options[]) => {
  return (tree: Nodes) => {
    if (allOptions == null) {
      throw new TypeError('Expected a `string` or an `array` as options');
    }

    if (Array.isArray(allOptions)) {
      allOptions.forEach((options) => {
        transform(tree, options);
      });
    } else {
      transform(tree, allOptions);
    }
  };
};
