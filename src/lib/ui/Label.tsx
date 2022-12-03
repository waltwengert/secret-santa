interface LabelProps {
    children: any
}

export const BaseLabel = ({ children }: LabelProps) => {
    return <p>{children}</p>;
};
