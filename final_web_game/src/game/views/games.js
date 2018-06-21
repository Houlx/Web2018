import React from 'react';
import './style.css';
import snakeGame from './SnakeGame'

export default () => {
    return (
        <div>
            <div className="game_name">Snake Game</div>
            <snakeGame/>
        </div>
    );
}