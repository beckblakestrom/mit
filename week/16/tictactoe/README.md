I'd like to implement:
The inabilty to click a square more than once per game
The board's style would change depending on which players turn it was

I would implement them by:
If square has been clicked, remove onClick

<Square onClick= (e) => changeStyle(e) />
function changeStyle(e) {
        let board = e.target;
        board.classList.toggle("style");
    }
