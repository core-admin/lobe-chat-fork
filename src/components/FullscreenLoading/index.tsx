/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable unused-imports/no-unused-imports */
import { Icon, Logo } from '@lobehub/ui';
import { createStyles } from 'antd-style';
import { Loader2 } from 'lucide-react';
import { memo } from 'react';
import { Center, Flexbox } from 'react-layout-kit';

const useStyles = createStyles(({ css }) => {
  return {
    logo: css`
      svg {
        display: none;
      }

      > div {
        margin-left: 12px;
      }
    `,
  };
});

const FullscreenLoading = memo<{ title?: string }>(({ title }) => {
  const { styles } = useStyles();

  return (
    <Flexbox height={'100%'} width={'100%'}>
      <Center flex={1} gap={12} width={'100%'}>
        <Logo className={styles.logo} extra={'人工智能聊天体验'} size={48} type={'combine'} />
        <Center gap={16} horizontal>
          <Icon icon={Loader2} spin />
          {title}
        </Center>
      </Center>
    </Flexbox>
  );
});

export default FullscreenLoading;
