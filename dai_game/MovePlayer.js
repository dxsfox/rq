const MovePlayer = (entities, { input }) => {
  const { payload } = input.find((i) => i.name === 'onKeyDown') || {};

  if (payload) {
    const player = entities.player;

    switch (payload.key) {
      case 'ArrowUp':
        player.position[1] -= 10;
        break;
      case 'ArrowDown':
        player.position[1] += 10;
        break;
      case 'ArrowLeft':
        player.position[0] -= 10;
        break;
      case 'ArrowRight':
        player.position[0] += 10;
        break;
      default:
        break;
    }
  }

  return entities;
};

export default MovePlayer;