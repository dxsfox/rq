import React from 'react';

const Player = ({ position }) => {
  const style = {
    position: 'absolute',
    width: '50px',
    height: '50px',
    backgroundColor: 'blue',  // 玩家角色为蓝色
    left: position[0],
    top: position[1],
  };

  return <div style={style}></div>;
};

export default Player;