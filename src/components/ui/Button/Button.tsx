import Link from 'next/link';

import { SquareTopDown } from '@solar-icons/react/ssr';
import clsx from 'clsx';

import styles from './Button.module.scss';

type Base = {
  variant?:
    | 'primary'
    | 'secondary'
    | 'neutral'
    | 'ghost'
    | 'ghost-white'
    | 'ghost-orange';
  wide?: boolean;
  children: React.ReactNode;
  className?: string;
  leftText?: string | null;
  rightText?: string | null;
};

type AsButton = Base &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof Base> & {
    href?: undefined;
  };

type AsLink = Base &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof Base | 'href'> & {
    href: string;
  };

type Props = AsButton | AsLink;

export function Button({
  variant = 'primary',
  wide,
  children,
  className,
  leftText,
  rightText,
  ...props
}: Props) {
  const cls = clsx(
    styles.button,
    styles[variant],
    wide && styles.wide,
    className,
  );

  let buttonEl: React.ReactNode;

  if (props.href !== undefined) {
    const { href, ...rest } = props as AsLink;
    const isAnchor = href.startsWith('#');
    const isExternal =
      href.startsWith('http://') || href.startsWith('https://');
    buttonEl = isAnchor ? (
      <a href={href} className={cls} {...rest}>
        {children}
      </a>
    ) : (
      <Link
        href={href}
        className={cls}
        {...(isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
        {...rest}
      >
        {children}
        {isExternal && <SquareTopDown size="1em" weight="Linear" />}
      </Link>
    );
  } else {
    buttonEl = (
      <button
        className={cls}
        type="button"
        {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {children}
      </button>
    );
  }

  if (leftText || rightText) {
    return (
      <span className={styles.wrapper}>
        {leftText && <span className={styles.sideText}>{leftText}</span>}
        {buttonEl}
        {rightText && <span className={styles.sideText}>{rightText}</span>}
      </span>
    );
  }

  return buttonEl;
}
