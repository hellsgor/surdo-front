import clsx from 'clsx';
import type { Root, RootContent } from 'hast';
import Markdown from 'react-markdown';

import { nobr } from '@/utils/typography';

import styles from './RichText.module.scss';

type Props = {
  children: string;
  className?: string;
};

function applyNobr(node: Root | RootContent) {
  if (node.type === 'text') {
    node.value = nobr(node.value);
    return;
  }
  if ('children' in node) {
    node.children.forEach(applyNobr);
  }
}

// nobr должен идти по уже распарсенному дереву, а не по сырой markdown-строке:
// иначе он превращает пробел после "- "/"1. "/"##" в nbsp и ломает списки и заголовки
function rehypeNobr() {
  return (tree: Root) => {
    applyNobr(tree);
  };
}

export function RichText({ children, className }: Props) {
  return (
    <div className={clsx(styles.richText, className)}>
      <Markdown rehypePlugins={[rehypeNobr]}>{children}</Markdown>
    </div>
  );
}
