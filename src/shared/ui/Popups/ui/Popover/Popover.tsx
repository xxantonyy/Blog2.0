import { Popover } from '@headlessui/react';
import { DropDownDirection } from 'shared/types/ui';
import { ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Popover.module.scss';
import popupCls from '../../styles/popup.module.scss';
import { mapDirectionClass } from '../../styles/consts';

interface PopoverProps {
   className?: string;
   trigger?: ReactNode;
   direction?: DropDownDirection;
   children?: ReactNode
}

export function MyPopover(props: PopoverProps) {
    const {
        className,
        direction = 'bottom left',
        trigger,
        children,
    } = props;
    const menuClasses = [mapDirectionClass[direction]];

    return (
        <Popover className={classNames(popupCls.popup, {}, [className, cls.Popover])}>
            <Popover.Button className={popupCls.trigger}>
                {
                    trigger
                }
            </Popover.Button>

            <Popover.Panel
                className={classNames(cls.panel, {}, menuClasses)}
            >

                {children}
            </Popover.Panel>
        </Popover>
    );
}
