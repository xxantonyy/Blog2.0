/* eslint-disable i18next/no-literal-string */
import { Menu } from '@headlessui/react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Fragment, ReactNode } from 'react';
import { DropDownDirection } from 'shared/types/ui';
import cls from './DporDown.module.scss';
import { AppLink } from '../../../AppLink/AppLink';
import { mapDirectionClass } from '../../styles/consts';
import popupCls from '../../styles/popup.module.scss';

export interface DropDownItem {
   disabled?: boolean;
   content?: ReactNode;
   onClick?: () => void;
   href?: string;
}

export interface DropDownProps {
   className?: string;
   items: DropDownItem[];
   trigger: ReactNode;
   direction?: DropDownDirection;
}

export function MyDropdown(props: DropDownProps) {
    const {
        className, items, trigger, direction = 'bottom right',
    } = props;

    const menuClasses = [mapDirectionClass[direction]];

    return (
        <Menu
            as="div"
            className={classNames(popupCls.popup, {}, [className])}
        >
            <Menu.Button
                className={popupCls.trigger}
            >
                {trigger}

            </Menu.Button>
            <Menu.Items
                className={classNames(cls.menu, {}, menuClasses)}
            >
                {items.map((item) => {
                    const content = ({ active } : {active: boolean}) => (
                        <button
                            type="button"
                            onClick={item.onClick}
                            className={classNames(
                                cls.item,
                                { [popupCls.active]: active },
                                [],
                            )}
                        >
                            {item.content}
                        </button>
                    );

                    if (item.href) {
                        return (
                            <Menu.Item
                                key={item.href}
                                as={AppLink}
                                to={item.href}
                                disabled={item.disabled}
                            >
                                {content}
                            </Menu.Item>
                        );
                    }

                    return (
                        <Menu.Item
                            key={item.href}
                            as={Fragment}
                            disabled={item.disabled}
                        >
                            {content}
                        </Menu.Item>
                    );
                })}
            </Menu.Items>
        </Menu>
    );
}
