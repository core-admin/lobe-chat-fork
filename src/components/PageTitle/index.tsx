import { memo, useEffect } from 'react';

const PageTitle = memo<{ title: string }>(({ title }) => {
  useEffect(() => {
    document.title = title ? `${title} · 人工智能聊天体验` : '人工智能聊天体验';
  }, [title]);

  return null;
});

export default PageTitle;
