import { Flex, flexProps } from '../Flex/Flex';

type VStackProps = Omit<flexProps, 'direction'>;

export const VStack = (props: VStackProps) => {
    const { align = 'start' } = props;
    return <Flex direction="column" {...props} align={align} />;
};
