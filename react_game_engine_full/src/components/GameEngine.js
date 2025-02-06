import React from 'react';
import { GameEngine } from 'react-game-engine';
import Player from './Player';
import Enemy from './Enemy';
import MovePlayer from './MovePlayer';

const GameEngineComponent = () => {
  const entities = {
    player: { position: [50, 50], renderer: <Player /> },
    enemy1: { position: [200, 200], renderer: <Enemy /> }
  };

  return (
    <GameEngine
      style={{ width: '800px', height: '600px', backgroundColor: 'black' }}
      systems={[MovePlayer]}
      entities={entities}
    >
      <h1 style={{ color: 'white', textAlign: 'center' }}>React Game Engine</h1>
    </GameEngine>
  );
};

export default GameEngineComponent;