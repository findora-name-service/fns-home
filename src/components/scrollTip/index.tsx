import classnames from 'classnames';

import './index.less';

export interface IscrollTip {
  isTabnum:Number
}

const scrollTip: React.FC<IscrollTip> = ({isTabnum}) => {

  return (
    <section className="scrollTip_box">
      <p className={classnames(`pagenum${isTabnum}`)}>{`0${isTabnum}`}</p>
      <ul className={classnames(`isTabnum${isTabnum}`)}>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li> 
        <li></li> 
      </ul>
      <p className={classnames(`allpagenum${isTabnum}`)}>06</p>
    </section>
   
  );
};

// scrollTip.defaultProps = {
//   isTabnum:1,
// };

export default scrollTip;
