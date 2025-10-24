export function handleAttack(players, count, setCount, setPlayerPv) {
    let winner = null;
  
    setPlayerPv((prevPlayers) => {
      const newPlayers = [...prevPlayers];
      const targetIndex = (count + 1) % 2;
  
      if (newPlayers[targetIndex].pv > 0) {
        newPlayers[targetIndex] = {
          ...newPlayers[targetIndex],
          pv: Math.max(newPlayers[targetIndex].pv - 1, 0),
        };
      }
  
      winner = checkWinner(newPlayers);
      return newPlayers;
    });
  
    setCount((count + 1) % 2);
    return winner;
  }
  
  export function checkWinner(players) {
    const winner = players.find(player => player.pv > 0);
    return players.some(player => player.pv <= 0) ? winner.nom : null;
  }
  