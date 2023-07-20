import style from './TheHeader.module.scss';

type TheHeaderProps = {}

function TheHeader({}: TheHeaderProps) {
  return (
    <div className={style['TheHeader']} data-testid="TheHeader">
      TheHeader
    </div>
  );
}

export default TheHeader;
