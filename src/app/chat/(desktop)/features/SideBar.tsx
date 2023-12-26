import { DraggablePanel, DraggablePanelContainer } from '@lobehub/ui';
import { createStyles } from 'antd-style';
// import dynamic from 'next/dynamic';
import { memo } from 'react';

import SafeSpacing from '@/components/SafeSpacing';
import { CHAT_SIDEBAR_WIDTH } from '@/const/layoutTokens';
import { useGlobalStore } from '@/store/global';

// import { useSessionStore } from '@/store/session';
// import { sessionSelectors } from '@/store/session/selectors';
import TopicListContent from '../../features/TopicListContent';

// TODO: 变更-默认助手不显示角色设定
// const SystemRole = dynamic(() => import('../../features/SystemRole'));

const useStyles = createStyles(({ css, token }) => ({
  content: css`
    display: flex;
    flex-direction: column;
  `,
  drawer: css`
    background: ${token.colorBgLayout};
  `,
  header: css`
    border-bottom: 1px solid ${token.colorBorder};
  `,
}));

const Desktop = memo(() => {
  const { styles } = useStyles();
  const [showAgentSettings, toggleConfig] = useGlobalStore((s) => [
    s.preference.showChatSideBar,
    s.toggleChatSideBar,
  ]);

  // const isInbox = useSessionStore(sessionSelectors.isInboxSession);
  // const isInboxDalle = useSessionStore(sessionSelectors.isInboxDalleSession);

  return (
    <DraggablePanel
      className={styles.drawer}
      classNames={{
        content: styles.content,
      }}
      expand={showAgentSettings}
      minWidth={CHAT_SIDEBAR_WIDTH}
      mode={'fixed'}
      onExpandChange={toggleConfig}
      placement={'right'}
    >
      <DraggablePanelContainer
        style={{
          flex: 'none',
          height: '100%',
          maxHeight: '100vh',
          minWidth: CHAT_SIDEBAR_WIDTH,
          overflow: 'auto',
        }}
      >
        <SafeSpacing />
        {/* {(!isInbox || !isInboxDalle) && <SystemRole />} */}
        <TopicListContent />
      </DraggablePanelContainer>
    </DraggablePanel>
  );
});

export default Desktop;
