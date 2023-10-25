import { Flex, flexProps } from '../Flex/Flex';

type HStackProps = Omit<flexProps, 'direction'>;

export const HStack = (props: HStackProps) => (
    <Flex direction="row" {...props} />
);
