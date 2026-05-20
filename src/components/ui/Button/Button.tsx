import Link from 'next/link';

import clsx from 'clsx';

import { Icon } from '@/components/ui';

import styles from './Button.module.scss';

type Base = {
  variant?:
    | 'primary'
    | 'secondary'
    | 'neutral'
    | 'ghost'
    | 'ghost-white'
    | 'ghost-orange';
  size?: 'md' | 'sm';
  wide?: boolean;
  children: React.ReactNode;
  className?: string;
  leftText?: string | null;
  rightText?: string | null;
};

type AsButton = Base &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof Base> & {
    href?: undefined | null;
  };

type AsLink = Base &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof Base | 'href'> & {
    href: string;
  };

type Props = AsButton | AsLink;

export function Button({
  variant = 'primary',
  size = 'md',
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
    styles[size],
    wide && styles.wide,
    className,
  );

  let buttonEl: React.ReactNode;

  if (props.href === undefined || props.href === null) {
    buttonEl = (
      <button
        className={cls}
        type="button"
        {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {children}
      </button>
    );
  } else {
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
        {isExternal && (
          <Icon name="external-link" size="12" className={styles.external} />
        )}
      </Link>
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
