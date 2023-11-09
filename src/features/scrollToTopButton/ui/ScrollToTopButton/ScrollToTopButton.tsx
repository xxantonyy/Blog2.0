import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ScrollToTopButton.module.scss';
import { Icon } from '@/shared/ui/redesigned/Icon';
import CircleIcon from '@/shared/assets/icons/circle-up.svg';
import { Button } from '@/shared/ui/redesigned/Button';

interface ScrollToTopButtonProps {
    className?: string;
}

export const ScrollToTopButton = memo((props: ScrollToTopButtonProps) => {
    const { className } = props;

    const onCLick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <Button onClick={onCLick} variant="clear">
            <Icon
                Svg={CircleIcon}
                width={32}
                height={32}
                className={classNames(cls.ScrollToTopButton, {}, [className])}
            />
        </Button>

    );
});
