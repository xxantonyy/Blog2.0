import { Mods, classNames } from '@/shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

interface iconProps extends React.SVGProps<SVGSVGElement>{
   className?: string;
   Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
   inverted?: boolean;
}

export const Icon = (props: iconProps) => {
    const {
        className,
        Svg,
        inverted,
        ...otherProps
    } = props;

    const mods: Mods = {
        [cls.inverted]: inverted,
    };
    return (
        <Svg
            className={classNames(cls.Icon, mods, [className])}
            {...otherProps}
        />
    );
};
