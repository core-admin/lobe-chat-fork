import { DraggablePanelBody, Logo } from '@lobehub/ui';
import { createStyles, useTheme } from 'antd-style';
import Link from 'next/link';
import { memo } from 'react';
import { Flexbox } from 'react-layout-kit';

import CustomLogoSvg from '@/app/chat/(desktop)/features/CustomLogoSvg';
import FolderPanel from '@/features/FolderPanel';

import UpgradeAlert from '../UpgradeAlert';
import List from './List';

const useStyles = createStyles(({ stylish, token, css }) => ({
  body: stylish.noScrollbar,
  divider: css`
    width: 23px;
    height: 23px;
  `,
  logo: css`
    /* fill: ${token.colorText}; */
    svg {
      display: none;
    }

    > div {
      /* margin-left: 12px; */
    }
  `,
  top: css`
    position: sticky;
    top: 0;
  `,
}));

const SideBar = memo(() => {
  const theme = useTheme();
  const { styles } = useStyles();

  return (
    <FolderPanel>
      <DraggablePanelBody className={styles.body} style={{ padding: 0 }}>
        <Link href={'/'} style={{ color: 'inherit' }}>
          <Flexbox align="center" className={styles.top} horizontal padding={16}>
            <CustomLogoSvg className={styles.logo} height={36} width={36 * 4.5} />
            <svg
              className={styles.divider}
              fill="none"
              shapeRendering="geometricPrecision"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ color: theme.colorText }}
              viewBox="0 0 24 24"
            >
              <path d="M16.88 3.549L7.12 20.451"></path>
            </svg>
            <Logo className={styles.logo} extra={'Settings'} size={36} type={'text'} />
          </Flexbox>
        </Link>

        <Flexbox gap={2} style={{ paddingInline: 8 }}>
          <UpgradeAlert />
          <List />
        </Flexbox>
      </DraggablePanelBody>
    </FolderPanel>
  );
});

export default SideBar;
