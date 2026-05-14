import clsx from 'clsx';

import styles from './Container.module.scss';

type Props = {
  children: React.ReactNode;
  className?: string;
};

export function Container({ children, className }: Props) {
  return <div className={clsx(styles.container, className)}>{children}</div>;
}
