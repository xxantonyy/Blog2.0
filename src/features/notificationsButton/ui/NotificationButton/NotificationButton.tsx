import { memo, useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { NotificationList } from '@/entities/Notification';
import { Button as ButtonDepricated, ButtonTheme } from '@/shared/ui/deprecated/Button';
import cls from './NotificationButton.module.scss';
import { Drawer } from '@/shared/ui/deprecated/Drawer';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Icon as IconDepricated } from '@/shared/ui/deprecated/Icon';
import { Popover as HPopoverDeprecated } from '@/shared/ui/deprecated/Popups/components/Popover/Popover';
import { Popover as HPopover } from '@/shared/ui/redesigned/Popups/components/Popover/Popover';
import { ToggleFeatures } from '@/shared/lib/future';
import NotificationIcon from '@/shared/assets/icons/notification.svg';
import NotificationIconDepricated from '@/shared/assets/icons/notification-20-20.svg';

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
    const { className } = props;

    const [isOpen, setIsOpen] = useState(false);

    const OpenDrawer = useCallback(() => {
        setIsOpen(true);
    }, []);

    const CloseDrawer = useCallback(() => {
        setIsOpen(false);
    }, []);

    const trigger = (
        <ToggleFeatures
            feature="isAppRedisigned"
            on={(
                <Icon Svg={NotificationIcon} onClick={OpenDrawer} clickable />
            )} off={(
                <ButtonDepricated onClick={OpenDrawer} theme={ButtonTheme.CLEAR}>
                    <IconDepricated Svg={NotificationIconDepricated} inverted />
                </ButtonDepricated>
            )}
        />

    );

    return (
        <div>
            <BrowserView>
                <ToggleFeatures
                    feature="isAppRedisigned"
                    on={(
                        <HPopover trigger={trigger} direction="bottom left">
                            <NotificationList className={cls.notifications} />
                        </HPopover>
                    )} off={(
                        <HPopoverDeprecated trigger={trigger}>
                            <NotificationList className={cls.notifications} />
                        </HPopoverDeprecated>
                    )}
                />

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
