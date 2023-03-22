import React, { FC } from 'react';
import { View, StyleSheet } from 'react-native';
import { SETTINGS_DEFAULT } from '../../constant/settingsDefault';
import { NRoot } from '../root.interface';
import { NGame } from './game.interface';
import GameButton from './GameButton';

interface IGameControlProps {
  currentDirection: NGame.TDirection;
  changeDirection?: (key: NGame.TDirection) => void;
  gameOver?: (activeStep: NRoot.TSteps) => void;
}

const GameControl: FC<IGameControlProps> = ({
  currentDirection,
  changeDirection = () => {},
  gameOver = () => {},
}) => {
  const isStart = currentDirection != 'stop';
  return (
    <View style={styles.gameContainer}>
      <View style={styles.finishGameButton}>
        <GameButton title={`finish`} onPress={() => gameOver('gameOver')} invertColors />
      </View>

      <View style={styles.gameNav}>
        <View>
          <GameButton title="up" onPress={() => changeDirection('up')} />
        </View>

        <View style={styles.row}>
          <GameButton title="left" onPress={() => changeDirection('left')} />

          <GameButton
            title={isStart ? 'stop' : 'start'}
            onPress={() => changeDirection(isStart ? 'stop' : 'start')}
          />
          <GameButton title="right" onPress={() => changeDirection('right')} />
        </View>

        <View>
          <GameButton title="down" onPress={() => changeDirection('down')} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  gameContainer: {
    width: SETTINGS_DEFAULT.app.content.width,
    height: SETTINGS_DEFAULT.layout.heightSection.control,
  },
  gameNav: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  finishGameButton: {
    borderBottomColor: SETTINGS_DEFAULT.colors.main,
    borderBottomWidth: SETTINGS_DEFAULT.layout.board.borderWidth,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default GameControl;
