cc.Class({
    extends: cc.Component,

    properties: {
        x:0,
        y:0,
        _number:-1,
        number:{
            set(number){
                if(number === this._number)return;
                this._number = number;
                if(number >= 2){
                    this.numberLabel.string = number+'';
                    let colorHex = Math.floor(Math.random()*16777215)+1;
                    let color = cc.hexToColor('#'+colorHex.toString(16));
                    this.node.color = color;
                }else{
                    this.numberLabel.string = '';
                }
            },
            get(){
                return this._number;
            }
        },
        numberLabel:cc.Label,
    },

    // use this for initialization
    onLoad: function () {

    },

    init(x,y,n){
        this.x = x;
        this.y = y;
        this.number = n;
    },

    randomNumber(){
        this.number = 2;
    }    
});
