import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import StarSvg from '../../assets/icons/star.svg';
import { Icon } from '../Icon/icon';
import cls from './StarRating.module.scss';

interface StarRatingProps {
    className?: string;
    onSelect?: (StarsCount: number) => void;
    size?: number;
    selectedStars?: number;
}

const stars = [1, 2, 3, 4, 5];

export const StarRating = memo((props: StarRatingProps) => {
    const {
        className, onSelect, selectedStars = 0, size = 30,
    } = props;
    const { t } = useTranslation();

    const [currentStarCount, setCurrentStarCount] = useState(selectedStars);
    const [isSelected, setIsSelected] = useState(Boolean(selectedStars));

    const onHover = (starsCount: number) => () => {
        if (!isSelected) {
            setCurrentStarCount(starsCount);
        }
    };

    const onLeave = () => {
        if (!isSelected) {
            setCurrentStarCount(0);
        }
    };

    const onClick = (starsCount: number) => () => {
        if (!isSelected) {
            onSelect?.(starsCount);
            setIsSelected(true);
            setCurrentStarCount(starsCount);
        }
    };

    return (
        <div className={classNames(cls.StarRating, {}, [className])}>
            {stars.map((starNumber, index) => (
                <Icon
                    Svg={StarSvg}
                    key={starNumber}
                    data-testid={`StarRating.${index + 1}`}
                    className={classNames(
                        cls.starIcon,
                        { [cls.isSelected]: isSelected },
                        [
                            currentStarCount >= starNumber
                                ? cls.hovered
                                : cls.normal,
                        ],
                    )}
                    width={size}
                    height={size}
                    onMouseLeave={onLeave}
                    onMouseEnter={onHover(starNumber)}
                    onClick={onClick(starNumber)}
                    data-selected={currentStarCount >= starNumber}
                />
            ))}
        </div>
    );
});
