// АВТОГЕНЕРИРОВАНО — не редактировать вручную
// Источник: src/assets/icons/
// Обновление: yarn icons
// Иконок: 7

export type IconName =
  | 'arrow-right'
  | 'arrow-up-right'
  | 'burger'
  | 'chevron-down'
  | 'chevron-right'
  | 'close'
  | 'external-link';

export function IconsSprite() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}
      aria-hidden="true"
    >
      <symbol id="arrow-right" viewBox="0 0 24 24">
        <g fill="none" stroke="currentColor" strokeWidth="1.5">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
          />
        </g>
      </symbol>
      <symbol id="arrow-up-right" viewBox="0 0 24 24">
        <g fill="none" stroke="currentColor" strokeWidth="1.5">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
          />
        </g>
      </symbol>
      <symbol id="burger" viewBox="0 0 24 24">
        <g fill="none" stroke="currentColor" strokeWidth="1.5">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </g>
      </symbol>
      <symbol id="chevron-down" viewBox="0 0 24 24">
        <g fill="none" stroke="currentColor" strokeWidth="1.5">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </g>
      </symbol>
      <symbol id="chevron-right" viewBox="0 0 24 24">
        <g fill="none" stroke="currentColor" strokeWidth="1.5">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </g>
      </symbol>
      <symbol id="close" viewBox="0 0 24 24">
        <g fill="none" stroke="currentColor" strokeWidth="1.5">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </g>
      </symbol>
      <symbol id="external-link" viewBox="0 0 24 24">
        <g fill="none" stroke="currentColor" strokeWidth="1.5">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
          />
        </g>
      </symbol>
    </svg>
  );
}

type Props = {
  name: IconName;
  size?: number | string;
  className?: string;
};

export function Icon({ name, size = 24, className }: Props) {
  return (
    <svg width={size} height={size} className={className} aria-hidden="true">
      <use href={`#${name}`} />
    </svg>
  );
}
