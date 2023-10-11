import {
    SVGProps, VFC, memo, useCallback, useState,
} from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { NotificationList } from '@/entities/Notification';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { Drawer } from '@/shared/ui/Drawer/Drawer';
import { Icon } from '@/shared/ui/Icon/icon';
import { MyPopover } from '@/shared/ui/Popups';
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

    const [isOpen, setIsOpen] = useState(false);

    const OpenDrawer = useCallback(() => {
        setIsOpen(true);
    }, []);

    const CloseDrawer = useCallback(() => {
        setIsOpen(false);
    }, []);

    const trigger = (
        <Button onClick={OpenDrawer} theme={ButtonTheme.CLEAR}>
            <Icon inverted Svg={svg} />
        </Button>
    );

    return (
        <div>
            <BrowserView>
                {' '}
                <MyPopover trigger={trigger}>
                    <NotificationList className={cls.notifications} />
                </MyPopover>

            </BrowserView>
            <MobileView>
                {trigger}
                <Drawer isOpen={isOpen} onClose={CloseDrawer}>
                    <NotificationList />
                </Drawer>
            </MobileView>
        </div>

    );
});
