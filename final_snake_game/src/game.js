import React, {Component} from 'react';
import './game.css';
import PropTypes from 'prop-types';
import {addScore} from "./actions";
import {connect} from 'react-redux';
// import node_red from './node_red.svg';
// import node_black from './node_black.svg';

let direction = {"down": 1, "up": 2, "left": 3, "right": 4};
let red = <div className="red"/>;
let black = <div className="black"/>;

class Game extends Component {
    /* 贪吃蛇游戏*/
    constructor(props) {
        super(props);
        let snake = [{"x": 1, "y": 1}];
        let next_red = {"x": 1, "y": 3};
        this.state = {
            "score": 0,
            "snake": snake,
            "red_node_position": next_red,
            "direction": direction.right,
            size: {"col": 15, "row": 20},
            "i": 0,
            "is_running": true
        };
        /*
             score:分数
             snake:蛇的位置信息
             red_node_position:红色点位置
             direction: 前进方向
             size: 背景格子大小
         */

        this.pause = this.pause.bind(this);
        this.init = this.init.bind(this);
        this.start = this.start.bind(this);
    }

    init() {
        let snake = [{"x": 1, "y": 1}];
        let next_red = {"x": 1, "y": 3};
        let init_state = {
            "score": 0,
            "snake": snake,
            "red_node_position": next_red,
            "direction": direction.right,
            size: {"col": 15, "row": 20}
        };
        this.setState(init_state);
    }


    render(props) {
        let trs = this.refresh();
        let pause_start_btn = <button onClick={this.pause}>暂停</button>;
        if (!this.state.is_running) {
            pause_start_btn = <button onClick={this.start}>开始</button>;
        }

        return (
            <div className="game">
                <div className="game_name">贪吃蛇</div>
                {/*<div className="game_menu"><a href="#">游戏</a><a href="#">帮助</a></div>*/}
                <div className="game_div">

                    <div className="game_background">
                        <table border="1">

                            {trs}

                        </table>
                    </div>

                    <div className="game_info">
                        <h4>得分: {this.state.score} </h4>
                        <h4>控制 W:上 S:下 A:左 D:右</h4>
                        {pause_start_btn}
                        <button onClick={this.init}>重新开始</button>
                    </div>
                </div>
            </div>
        );
    }


    componentDidMount() {
        document.onkeydown = function (e) {
            this.pause();
            let keyNum = window.event ? e.keyCode : e.which;
            if (keyNum === 87) {
                this.move(direction.up);
                this.setState({"direction": direction.up});
            }
            else if (keyNum === 83) {
                this.move(direction.down);
                this.setState({"direction": direction.down});
            }
            else if (keyNum === 65) {
                this.move(direction.left);
                this.setState({"direction": direction.left});
            }
            else if (keyNum === 68) {
                this.move(direction.right);
                this.setState({"direction": direction.right});
            }
            this.start();
        }.bind(this);

        this.start();
    }

    start() {
        let i = setInterval(function () {
            this.move(this.state.direction);
        }.bind(this), 600);

        this.setState({"i": i, "is_running": true});
    }

    pause() {
        let i = this.state.i;
        window.clearInterval(i);
        this.setState({"is_running": false});
    }

    move(d) {
        let snake = this.state.snake;
        let s;
        let first = {"x": snake[0].x, "y": snake[0].y};
        let get_red = false;
        let last_node = {};
        let game_fover_flag = false;

        if (d === direction.right) {
            first.y += 1;
        }
        else if (d === direction.left) {
            first.y -= 1;
        }
        else if (d === direction.down) {
            first.x += 1;
        }
        else if (d === direction.up) {
            first.x -= 1;
        }

        if (snake.length > 1 && first.x === snake[1].x && first.y === snake[1].y) {//前进方向不能逆行
            return;
        }

        if (first.x === this.state.red_node_position.x && first.y === this.state.red_node_position.y) {//碰到红点
            get_red = true;
            this.setState({"score": this.state.score + 1});
            let last_node_index = snake.length - 1;
            last_node.x = snake[last_node_index].x;
            last_node.y = snake[last_node_index].y;
        }

        for (s in snake) {
            let next_first = {"x": snake[s].x, "y": snake[s].y};

            snake[s].x = first.x;
            snake[s].y = first.y;

            first = next_first;
        }

        if (get_red) {//追加一个元素
            get_red = false;
            let i = snake.length;
            snake[i] = {"x": last_node.x, "y": last_node.y};
            this.next_red();
        }
        this.setState(snake);
        this.game_over_check();
    }

    game_over_check() {
        //游戏结束监测
        //1.超出边界
        if (this.state.snake[0].x >= this.state.size.col || this.state.snake[0].x < 0 || this.state.snake[0].y < 0 || this.state.snake[0].y >= this.state.size.row) {
            this.props.onAdd(this.state.score);
            this.init();
            this.pause();
            return;
        }
        //2.和自己冲突
        for (let s = 1; s < this.state.snake.length && this.state.snake.length > 1; s++) {
            if (this.state.snake[s].x === this.state.snake[0].x && this.state.snake[s].y === this.state.snake[0].y) {
                this.props.onAdd(this.state.score);
                this.init();
                this.pause();
                return;
            }
        }
    }

    next_red() {
        //生成下一个红点
        let nodes = [];
        for (let c = 0; c < this.state.size.col; c++) {
            for (let r = 0; r < this.state.size.row; r++) {
                if (this.get_status(c, r) === 0) {
                    let n = {"x": c, "y": r};
                    nodes.push(n);
                }
            }
        }

        let next_index = Math.round(Math.random() * nodes.length - 1);
        this.setState({"red_node_position": nodes[next_index]})
    }

    /* 刷新界面 */
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
                    return <td/>
                }
                else if (v === 1) {
                    return <td>{black}</td>
                }
                else if (v === 2) {
                    return <td>{red}</td>
                }
            });
            return <tr>{tds}</tr>;
        });
    }

    get_status(c, r) {
        let s;
        for (s in this.state.snake) {
            if (this.state.snake[s].x === c && this.state.snake[s].y === r) {
                return 1;
            }
        }
        if (this.state.red_node_position.x === c && this.state.red_node_position.y === r) {
            return 2;
        }
        return 0;
    }
}

Game.propTypes = {
    onAdd: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAdd: (score) => {
            dispatch(addScore(score));
        }
    }
};

export default connect(null, mapDispatchToProps)(Game);
