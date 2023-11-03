import {
    SVGProps, VFC, memo, useCallback, useState,
} from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { NotificationList } from '@/entities/Notification';
import { Button } from '@/shared/ui/redesigned/Button';
import cls from './NotificationButton.module.scss';
import { Drawer } from '@/shared/ui/deprecated/Drawer';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Popover as HPopover } from '@/shared/ui/deprecated/Popups/components/Popover/Popover';

interface NotificationButtonProps {
    className?: string;
    svg: VFC<SVGProps<SVGSVGElement>>;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
    const { className, svg } = props;

    const [isOpen, setIsOpen] = useState(false);

    const OpenDrawer = useCallback(() => {
        setIsOpen(true);
    }, []);

    const CloseDrawer = useCallback(() => {
        setIsOpen(false);
    }, []);

    const trigger = (
        <Button onClick={OpenDrawer} variant="clear">
            <Icon Svg={svg} />
        </Button>
    );

    return (
        <div>
            <BrowserView>
                <HPopover trigger={trigger}>
                    <NotificationList className={cls.notifications} />
                </HPopover>
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
