/* eslint-disable global-require */
import React from 'react';
import {
  useSpring, animated, config,
} from 'react-spring';
import s from './HeaderBar.scss';

const HeaderBar: React.FunctionComponent = () => {

  const heightProps = useSpring({
    config: config.slow,
    delay: 0,
    from: { height: '0px' },
    to: { height: '150px' },
  });

  return (
    <animated.section className={s.HeaderBar} style={heightProps}>
      <animated.div className={s.HeaderBar__Wrapper}>
        <h1>My Holiday Destination Explorer</h1>
        <p>Click location list to navigate through the world locations</p>
      </animated.div>
    </animated.section>
  );
};
export default HeaderBar;
