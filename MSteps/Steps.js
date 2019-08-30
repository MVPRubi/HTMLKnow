import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';

class Steps extends React.Component {

  static propTypes = {
    current: PropTypes.number,
    className: PropTypes.string,
    steps: PropTypes.arrayOf(),
    allowOver: PropTypes.bool,
    prefixCls: PropTypes.string,
  };

  static defaultProps = {
    allowOver: false,
    prefixCls: 'lulu',
  };

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const { prefixCls, className, allowOver } = this.props;
    const cls = ClassNames(className, {
      [`${prefixCls}-steps`]: true,
      [`${prefixCls}-steps-allow-over`]: allowOver,
    });

    return (
      <div className={cls} >
        <div className="step error">
          <div className="trail"></div>
          <div className="icon">!</div>
          <div className="desc">完善信息</div>
        </div>
        <div className="step finish">
          <div className="trail"></div>
          <div className="icon"></div>
          <div className="desc">营口沿海银行</div>
        </div>
        <div className="step process">
          <div className="trail"></div>
          <div className="icon">3</div>
          <div className="desc">海口联合农商银行</div>
        </div>
        <div className="step wait">
          <div className="trail"></div>
          <div className="icon">4</div>
          <div className="desc">众邦银行</div>
        </div>
        <div className="step wait">
          <div className="trail"></div>
          <div className="icon">5</div>
          <div className="desc">自贡银行</div>
        </div>
        <div className="step wait">
          <div className="trail"></div>
          <div className="icon">6</div>
          <div className="desc">天津滨海银行</div>
        </div>
      </div>);
  }
}

export default Steps;
