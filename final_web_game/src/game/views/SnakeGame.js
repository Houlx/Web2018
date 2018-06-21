import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux'
import {addScore} from '../actions';
import './game_style.css';

const direction = {'down': 1, 'up': 2, 'left': 3, 'right': 4};
const red = <div className="red"/>;
const black = <div className="black"/>;

class snakeGame extends Component {
    constructor(props) {
        super(props);
        let snake = [{'x': 1, 'y': 1}];
        let next_red = {'x': 5, 'y': 1};
        this.state = {
            'score': 0,
            'snake': snake,
            'red_node': next_red,
            'direction': direction.down,
            size: {"col": 20, "row": 20},
            'interval': 0,
            'run': true
        };
        this.pause = this.pause.bind(this);
        this.init = this.init.bind(this);
        this.start = this.start.bind(this);
    }

    init() {
        let snake = [{'x': 1, 'y': 1}];
        let next_red = {'x': 5, 'y': 1};
        let init_state = {
            'score': 0,
            'snake': snake,
            'red_node': next_red,
            'direction': direction.down,
            size: {"col": 20, "row": 20}
        };
        this.setState(init_state);
    }

    render() {
        let table = this.refresh();
        let pauseBtn = <button onClick={this.pause}>Pause</button>;
        if (!this.state.run) {
            pauseBtn = <button onClick={this.start}>Start</button>;
        }

        return (
            <div className="game">
                <div className="game_background">
                    <table border="1">
                        {table}
                    </table>
                </div>
                <div className="game_info">
                    <h3>Score:{this.state.score}</h3>
                    <h4>Control: W:↑ S:→ A:← D:↓</h4>
                    {pauseBtn}
                    <button onClick={this.init}>Restart</button>
                </div>
            </div>
        );
    }

    componentDidMount() {
        document.onkeydown = function (e) {
            this.pause();
            let key = window.event ? e.keyCode : e.which;
            if (key === 87) {
                this.move(direction.up);
                this.setState({'direction': direction.up});
            } else if (key === 83) {
                this.move(direction.down);
                this.setState({'direction': direction.down});
            } else if (key === 65) {
                this.move(direction.left);
                this.setState({'direction': direction.left});
            } else if (key === 68) {
                this.move(direction.right);
                this.setState({'direction': direction.right});
            }
            this.start();
        }.bind(this);
        this.start();
    }

    start() {
        let interval = setInterval(function () {
            this.move(this.state.direction);
        }.bind(this), 1000);
        this.setState({'interval': interval, 'run': true});
    }

    pause() {
        window.clearInterval(this.state.interval);
        this.setState({'run': false});
    }

    move(d) {
        let snake = this.state.snake;
        let first = {'x': snake[0].x, 'y': snake[0].y};
        let getred = false;
        let lastnode = {};
        let overflag = false;

        if (d === direction.right) {
            first.y++;
        } else if (d === direction.left) {
            first.y--;
        } else if (d === direction.down) {
            first.x++;
        } else if (d === direction.up) {
            first.x--;
        }

        if (snake.length > 1 && first.x === snake[1].x && first.y === snake[1].y) {
            return;
        }

        if (first.x === this.state.red_node.x && first.y === this.state.red_node.y) {
            getred = true;
            this.setState({'score': this.state.score++});
            let lastNodeIndex = snake.length--;
            lastnode.x = snake[lastNodeIndex].x;
            lastnode.y = snake[lastNodeIndex].y;
        }

        for (let s in snake) {
            let next_first = {'x': snake[s].x, 'y': snake[s].y};
            snake[s].x = first.x;
            snake[s].y = first.y;
            first = next_first;
        }

        if (getred) {
            getred = false;
            snake[snake.length] = {'x': lastnode.x, 'y': lastnode.y};
            this.nextRed();
        }
        this.setState(snake);
        this.gameOverCheck();
    }

    gameOverCheck() {
        if (this.state.snake[0].x >= this.state.size.col ||
            this.state.snake[0].x < 0 ||
            this.state.snake[0].y >= this.state.size.row ||
            this.state.snake[0].y < 0) {
            this.props.onAdd(this.state.score);
            this.init();
        }

        for (let s = 1; s < this.state.snake.length && this.state.snake.length > 1; s++) {
            if (this.state.snake[s].x === this.state.snake[0].x && this.state.snake[s].y === this.state.snake[0].y) {
                this.props.onAdd(this.state.score);
                this.init();
            }
        }
    }

    nextRed() {
        let nodes = [];
        for (let c = 0; c < this.state.size.col; c++) {
            for (let r = 0; r < this.state.size.row; r++) {
                if (this.get_status(c, r) === 0) {
                    let n = {'x': c, 'y': r};
                    nodes.push(n);
                }
            }
        }
        let nextIndex = Math.round(Math.random() * nodes.length - 1);
        this.setState({'red_node': nodes[nextIndex]});
    }

    refresh() {
        let background = [];
        for (let c = 0; c < this.state.size.col; c++) {
            background[c] = [];
            for (let r = 0; r < this.state.size.row; r++) {
                background[c][r] = this.get_status(c, r);
            }
        }
        return background.map(function (value, index, array) {
            let tds = value.map(function (v, i, a) {
                if (v === 0) {
                    return <td/>;
                } else if (v === 1) {
                    return <td>{black}</td>
                } else if (v === 2) {
                    return <td>{red}</td>
                }
            });
            return <tr>{tds}</tr>
        });
    }

    get_status(c, r) {
        for (let s in this.state.snake) {
            if (this.state.snake[s].x === c && this.state.snake[s].y === r) {
                return 1;
            }
        }
        if (this.state.red_node.x === c && this.state.red_node.y === r) {
            return 2;
        }
        return 0;
    }
}

// snakeGame.propTypes = {
//     onAdd: PropTypes.func.isRequired
// };

const mapDispatchToProps = (dispatch) => {
    return {
        onAdd: (score) => {
            dispatch(addScore(score));
        }
    }
};

export default connect(null, mapDispatchToProps)(snakeGame);