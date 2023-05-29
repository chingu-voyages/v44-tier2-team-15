import { useState, useEffect } from 'react';
import {
  CaptionStyled,
  TdStyled,
  ThStyled,
  TableStyled,
  TheadStyled,
} from './Leaderboard.styled';

const Leaderboard = () => {
  const [bots, setBots] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('configs'));
    setBots(data);
  }, []);

  return (
    <>
      {bots !== null && (
        <TableStyled>
          <CaptionStyled>Leaderboard</CaptionStyled>
          <TheadStyled>
            <tr>
              <ThStyled>Bots</ThStyled>
              <ThStyled>Wins</ThStyled>
              <ThStyled>Losses</ThStyled>
            </tr>
          </TheadStyled>
          <tbody>
            {bots.bots.map(bot => (
              <tr key={bot.id} id={bot.id}>
                <TdStyled>{bot.botName}</TdStyled>
                <TdStyled>{bot.wins}</TdStyled>
                <TdStyled>{bot.losses}</TdStyled>
              </tr>
            ))}
          </tbody>
        </TableStyled>
      )}
    </>
  );
};

export default Leaderboard;
