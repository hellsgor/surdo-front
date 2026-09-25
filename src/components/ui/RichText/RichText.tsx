import clsx from 'clsx';
import Markdown from 'react-markdown';

import { nobr } from '@/utils/typography';

import styles from './RichText.module.scss';

type Props = {
  children: string;
  className?: string;
};

export function RichText({ children, className }: Props) {
  return (
    <div className={clsx(styles.richText, className)}>
      <Markdown>{nobr(children)}</Markdown>
    </div>
  );
}
