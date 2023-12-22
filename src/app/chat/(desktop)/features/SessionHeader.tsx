/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable unused-imports/no-unused-imports */
import { ActionIcon, Logo } from '@lobehub/ui';
import { createStyles } from 'antd-style';
import { MessageSquarePlus } from 'lucide-react';
import Link from 'next/link';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Flexbox } from 'react-layout-kit';

import { DESKTOP_HEADER_ICON_SIZE } from '@/const/layoutTokens';
import { useSessionStore } from '@/store/session';

import SessionSearchBar from '../../features/SessionSearchBar';
import CustomLogoSvg from './CustomLogoSvg';

export const useStyles = createStyles(({ css, token }) => ({
  logo: css`
    fill: ${token.colorText};
  `,
  top: css`
    position: sticky;
    top: 0;
  `,
}));

const Header = memo(() => {
  const { styles } = useStyles();
  const { t } = useTranslation('chat');
  const [createSession] = useSessionStore((s) => [s.createSession]);

  return (
    <Flexbox className={styles.top} gap={16} padding={16}>
      <Flexbox align="center" distribution={'space-between'} horizontal>
        {/* <Logo className={styles.logo} size={36} type={'text'} /> */}

        <Link href={'/'} style={{ color: 'inherit', height: '36px' }}>
          <CustomLogoSvg className={styles.logo} height={36} width={36 * 4.5} />
        </Link>

        <ActionIcon
          icon={MessageSquarePlus}
          onClick={() => createSession()}
          size={DESKTOP_HEADER_ICON_SIZE}
          style={{ flex: 'none' }}
          title={t('newAgent')}
        />
      </Flexbox>
      <SessionSearchBar />
    </Flexbox>
  );
});

export default Header;
