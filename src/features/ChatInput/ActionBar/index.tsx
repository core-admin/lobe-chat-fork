import { ChatInputActionBar } from '@lobehub/ui';
import { ReactNode, memo, useMemo } from 'react';

import { useSessionStore } from '@/store/session';
import { sessionSelectors } from '@/store/session/selectors';

import { ActionKeys, actionMap, getLeftActionList, getRightActionList } from './config';

const RenderActionList = ({ dataSource }: { dataSource: ActionKeys[] }) => (
  <>
    {dataSource.map((key) => {
      const Render = actionMap[key];
      return <Render key={key} />;
    })}
  </>
);

export interface ActionBarProps {
  leftAreaEndRender?: ReactNode;
  leftAreaStartRender?: ReactNode;
  mobile?: boolean;
  padding?: number | string;
  rightAreaEndRender?: ReactNode;
  rightAreaStartRender?: ReactNode;
}

const ActionBar = memo<ActionBarProps>(
  ({
    padding = '0 16px',
    mobile,
    rightAreaStartRender,
    rightAreaEndRender,
    leftAreaStartRender,
    leftAreaEndRender,
  }) => {
    const [isInbox, isInboxDalle] = useSessionStore((s) => [
      sessionSelectors.isInboxSession(s),
      sessionSelectors.isInboxDalleSession(s),
    ]);

    // TODO: 变更-默认助手不显示模型切换
    const leftActionList = useMemo(() => {
      const list = getLeftActionList(mobile);
      return isInbox || isInboxDalle ? list.filter((key) => key !== 'model') : list;
    }, [mobile, isInbox, isInboxDalle]);

    const rightActionList = useMemo(() => {
      const list = getRightActionList(mobile);
      return isInbox || isInboxDalle ? list.filter((key) => key !== 'model') : list;
    }, [mobile]);

    return (
      <ChatInputActionBar
        leftAddons={
          <>
            {leftAreaStartRender}
            <RenderActionList dataSource={leftActionList} />
            {leftAreaEndRender}
          </>
        }
        padding={padding}
        rightAddons={
          <>
            {rightAreaStartRender}
            <RenderActionList dataSource={rightActionList} />
            {rightAreaEndRender}
          </>
        }
      />
    );
  },
);

export default ActionBar;
