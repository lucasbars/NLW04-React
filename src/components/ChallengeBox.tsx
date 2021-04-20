import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {
  const contextData= useContext(ChallengesContext);
  console.log(contextData);

  const HasActiveChallenge = true;

  return (
    <div className={styles.challengeBoxContainer}>
      {HasActiveChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe 400xp</header>

          <main>
            <img src="icons/body.svg" />
            <strong>Novo Desafio</strong>
            <p>Levante e faça uma caminhada de 2 minutos</p>
          </main>

          <footer>
            <button type="button" className={styles.challengeFailedButton}>Falhei</button>
            <button type="button" className={styles.challengeSucceededButton}>Completei</button>
          </footer>

        </div>

      ) : (
        <div className={styles.challengeBoxNotActive}>
          <strong>Finalize um ciclo para receber um desafio</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level UP" />
          Avance de level completando desafio
        </p>
        </div>
      )}
    </div>
  );
}