import { SVGProps, VFC, memo } from 'react';
import { NotificationList } from 'entities/Notification';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/icon';
import { MyPopover } from 'shared/ui/Popups';
import cls from './NotificationButton.module.scss';

interface NotificationButtonProps {
   className?: string;
   svg: VFC<SVGProps<SVGSVGElement>>;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
    const {
        className,
        svg,
    } = props;

    return (
        <MyPopover trigger={(
            <Button theme={ButtonTheme.CLEAR}>
                <Icon inverted Svg={svg} />
            </Button>
        )}
        >
            <NotificationList className={cls.notifications} />
        </MyPopover>
    );
});
