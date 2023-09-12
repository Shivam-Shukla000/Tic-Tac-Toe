(function() {
    let gameData = {
        player1: "X",
        plater2: "O",
        turn: "X",
        gameStatus: true,
        init: function() {
            this.cacheDom();
            this.bindEvent();
            this.reset()
        },
        cacheDom: function() {
            this.$el = document;
            this.box = this.$el.querySelectorAll('.square')
            this.btn = this.$el.querySelector('.reset')
            this.board = this.$el.querySelector('.announcement')
        },
        bindEvent: function() { 
            this.box.forEach(element => {
                element.addEventListener('click', this.render.bind(this))
            });
            this.btn.addEventListener('click', this.reset.bind(this))
        },
        render: function(e) {
            if ((e.target.textContent !== "") ||
                 this.gameStatus === false) {return}
            else {   
                e.target.textContent = `${this.turn}`
                this.board.innerHTML = `<h1>${this.turn}'s Turn</h1>`
                this.checkWinner()
                this.switchTurn()
                }   
        },
        reset: function () {
            this.box.forEach(element => {
                element.textContent = ''
            });
            this.board.innerHTML = '';
            this.gameStatus = true
            this.board.innerHTML = `<h1>${this.turn}'s Turn</h1>`
        },
        switchTurn: function() {
            if (this.turn === this.plater2) {
                this.turn = this.player1
            }
            else {
                this.turn = this.plater2
                
            }
            
        },
        checkWinner: function() {
            if ((this.getvalue(0) === this.getvalue(1)) && (this.getvalue(1) === this.getvalue(2)) || 
                (this.getvalue(3) === this.getvalue(4)) && (this.getvalue(4) === this.getvalue(5)) ||
                (this.getvalue(6) === this.getvalue(7)) && (this.getvalue(7) === this.getvalue(8)) ||
                (this.getvalue(0) === this.getvalue(3)) && (this.getvalue(3) === this.getvalue(6)) ||
                (this.getvalue(1) === this.getvalue(4)) && (this.getvalue(4) === this.getvalue(7)) ||
                (this.getvalue(2) === this.getvalue(5)) && (this.getvalue(5) === this.getvalue(8)) ||
                (this.getvalue(0) === this.getvalue(4)) && (this.getvalue(4) === this.getvalue(8)) ||
                (this.getvalue(2) === this.getvalue(4)) && (this.getvalue(4) === this.getvalue(6))){
                    this.board.innerHTML = `<h1>${this.turn} WON</h1>`
                    console.log("Won")
                    this.gameStatus = false
                }
            else return
            
        },
        getvalue: function(index) {
            if (this.$el.querySelectorAll('.square')[index].textContent === "") {
                return Math.random()
            }
            else {
                return this.$el.querySelectorAll('.square')[index].textContent
                }
        }
    }
    gameData.init()
})()
