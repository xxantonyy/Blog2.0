/* eslint-disable i18next/no-literal-string */
import { useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import CopyIcon from '@/shared/assets/icons/copy-20-20.svg';
import cls from './Code.module.scss';
import { Button } from '../../redesigned/Button/Button';

interface CodeProps {
    className?: string;
    text: string;
}
/**
 * Устарел, используем новые компаненты
 * * @deprecated
 */

export const Code = (props: CodeProps) => {
    const { className, text } = props;

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text]);

    return (
        <pre className={classNames(cls.Code, {}, [className])}>
            <Button
                onClick={onCopy}
                type="button"
                className={cls.copyBtn}
                variant="clear"
            >
                <CopyIcon className={cls.copyIcon} />
            </Button>
            {' '}
            <code>{text}</code>
        </pre>
    );
};
