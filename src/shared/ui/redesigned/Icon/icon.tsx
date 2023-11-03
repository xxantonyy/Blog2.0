import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

type SvgProps = Omit<React.SVGProps<SVGSVGElement>, 'onClick'>

interface iconPropsBase extends SvgProps {
    className?: string;
    Svg: React.FC<React.SVGProps<SVGSVGElement>>;
}

interface NonClicableiconProps extends iconPropsBase {
    clicable?: false;
}

interface ClicableBaseProps extends iconPropsBase {
    clicable?: true;
    onClick: () => void;
}

type IconProps = NonClicableiconProps | ClicableBaseProps;

export const Icon = memo((props: IconProps) => {
    const {
        className, Svg, width = 32, height = 32, ...otherProps
    } = props;

    const icon = (
        <Svg
            width={width}
            height={height}
            className={classNames(cls.Icon, {}, [className])}
            {...otherProps}
            onClick={undefined}
        />
    );

    if (props.clicable) {
        return (
            <button
                style={{ width, height }}
                onClick={props.onClick}
                type="button"
                className={cls.button}
            >
                {icon}
            </button>
        );
    }

    return icon;
});
