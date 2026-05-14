import { Button, RichText } from '@/components/ui';
import { Section } from '@/components/ui/Section/Section';
import type { About } from '@/types/widgets/About';
import { pretty } from '@/utils/typography';

import styles from './About.module.scss';
import { Advantage } from './Advatage/Advantage';

type Props = { data: About };

export function About({
  data: { title, topText, bottomText, button, advantages },
}: Props) {
  return (
    <Section sectionName="about">
      <div className={styles.wrapper}>
        <div className={styles.column}>
          <h2 className={styles.heading}>{pretty(title)}</h2>
          <div className={styles.content}>
            {topText && (
              <RichText className={styles.topText}>{topText}</RichText>
            )}
            <ul role="list" className={styles.advantages}>
              {advantages.map((item) => (
                <li className={styles.advantage} key={item.id}>
                  <Advantage {...item} />
                </li>
              ))}
            </ul>
            {bottomText && (
              <RichText className={styles.bottomText}>{bottomText}</RichText>
            )}
          </div>
          <Button
            href={button.href}
            leftText={button.leftText}
            rightText={button.rightText}
            variant="secondary"
            className={styles.button}
          >
            {button.label}
          </Button>
        </div>
      </div>
    </Section>
  );
}
