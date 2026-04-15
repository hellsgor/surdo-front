import type { Footer as FooterData } from '@/types/widgets/Footer';
import { Button } from '@/components/ui';
import { Container } from '../Container/Container';
import { formatCopyRight } from './formatCopyRight';
import styles from './Footer.module.scss';

type Props = {
  footer: FooterData;
};

export function Footer({ footer }: Props) {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.wrapper}>
          {footer.copyRight && <p>{formatCopyRight(footer.copyRight)}</p>}
          <Button
            href={footer.privacy.href}
            variant="ghost-white"
            leftText={footer.privacy.leftText}
            rightText={footer.privacy.rightText}
            className={styles.privacy}
          >
            {footer.privacy.label}
          </Button>
          {footer.createdByWhom.label && (
            <Button
              href={footer.createdByWhom.href}
              variant="ghost-white"
              leftText={footer.createdByWhom.leftText}
              rightText={footer.createdByWhom.rightText}
              className={styles.createdBy}
            >
              {footer.createdByWhom.label}
            </Button>
          )}
        </div>
      </Container>
    </footer>
  );
}
