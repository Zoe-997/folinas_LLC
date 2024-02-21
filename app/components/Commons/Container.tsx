interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return <div className="container mx-auto leading-7">{children}</div>;
};

export default Container;
