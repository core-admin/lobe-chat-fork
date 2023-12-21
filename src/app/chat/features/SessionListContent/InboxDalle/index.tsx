import { useResponsive } from 'antd-style';
import Link from 'next/link';
import { memo } from 'react';

import { DEFAULT_INBOX_DALLE_AVATAR } from '@/const/meta';
import { DALLE_SESSION_ID } from '@/const/session';
import { SESSION_CHAT_URL } from '@/const/url';
import { useSessionStore } from '@/store/session';

import ListItem from '../ListItem';

const Inbox = memo(() => {
  const { mobile } = useResponsive();
  const [activeId, switchSession] = useSessionStore((s) => [s.activeId, s.switchSession]);

  return (
    <Link
      aria-label="绘图助手"
      href={SESSION_CHAT_URL(DALLE_SESSION_ID, mobile)}
      onClick={(e) => {
        e.preventDefault();
        switchSession(DALLE_SESSION_ID);
      }}
    >
      <ListItem
        active={activeId === DALLE_SESSION_ID}
        avatar={DEFAULT_INBOX_DALLE_AVATAR}
        title="绘图助手"
      />
    </Link>
  );
});

export default Inbox;
