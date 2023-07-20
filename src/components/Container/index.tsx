import style from './Container.module.scss';

interface ContainerProps {
  children: React.ReactNode;
}
function Container({ children }: ContainerProps) {
  return (
    <div className={style['container']} data-testid="Container">
      {children}
    </div>
  );
}

export default Container;
