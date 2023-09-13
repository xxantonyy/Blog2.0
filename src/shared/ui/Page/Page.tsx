import { classNames } from 'shared/lib/classNames/classNames';
import {
    memo, MutableRefObject, ReactNode, useRef,
} from 'react';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll.ts/useInfiniteScroll';
import cls from './Page.module.scss';

interface PageProps {
    className?: string;
    children: ReactNode;
    onScrollEnd?: () => void;
}

export const Page = memo((props: PageProps) => {
    const { className, children, onScrollEnd } = props;
    const wrapperReff = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerReff = useRef() as MutableRefObject<HTMLDivElement>;

    useInfiniteScroll({
        triggerRef: triggerReff,
        wrapperRef: wrapperReff,
        callback: onScrollEnd,
    });

    return (
        <section
            ref={wrapperReff}
            className={classNames(cls.Page, {}, [className])}
        >

            {children}
            <div style={{ color: 'transparent', overflow: 'hidden' }} ref={triggerReff}>/</div>
        </section>
    );
});
