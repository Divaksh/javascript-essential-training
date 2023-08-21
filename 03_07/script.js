/*
    Keyboard Object
*/

const keyboard = {
    type : "Mechanical",
    keys : 104,
    numLock : true,
    backlit: false,
    switch : {
        type: "cherrymx",
        color: "blue",
        rgbValue: "FFFFFF",
    },
    toggleBacklit: function (value){
        this.backlit = value;
    },
    toggleNumLock: function (value){
        this.numLock = value;
    },
    changeLedColor: function(rgbColor){
        this.switch.rgbValue = rgbColor;
    }

}