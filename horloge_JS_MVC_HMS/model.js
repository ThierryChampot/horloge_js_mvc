// Model.js
function Model(){
	// appel du constructeur du parent
	// pour créer une liste vide d'abonnés
	EventEmitter.call(this);
	this.init();
    setInterval(function()
    {
        this.addSecond();
    }.bind(this),1000);
}

// Model extends Observable
Model.prototype = Object.create(EventEmitter.prototype);
Model.prototype.constructor = Model;

Model.prototype.init = function(){
    this.date = new Date();
    this.hour = this.date.getHours();
    this.minute = this.date.getMinutes();
    this.second = this.date.getSeconds();
    this.emit('hourChanged');
    this.emit('minuteChanged');
    this.emit('secondChanged');
};

Model.prototype.addHour = function(){
    this.hour = this.hour + 1;

    if (this.hour === 24){
        this.hour = 0;
    }
    this.emit('hourChanged');
};

Model.prototype.removeHour = function(){
    this.hour = this.hour - 1;

    if (this.hour === -1){
        this.hour = 23;
    }
    this.emit('hourChanged');
};

Model.prototype.addMinute = function(){
    this.minute = this.minute + 1;

    if ( this.minute === 60 ) {
        this.minute = 0;
        this.addHour();
    }
    this.emit('minuteChanged');
};

Model.prototype.removeMinute = function(){
    this.minute = this.minute - 1;

    if (this.minute === -1) {
        this.removeHour();
        this.minute = 59;
    }
    this.emit('minuteChanged');
};

Model.prototype.addSecond = function(){
    this.second = this.second + 1;

    if (this.second === 60) {
        this.addMinute();
        this.second = 0;
    }
    this.emit('secondChanged');
};

Model.prototype.removeSecond = function() {
    this.second = this.second - 1;

    if(this.second === -1){
        this.removeMinute();
        this.second = 59;
    }
    this.emit('secondChanged');
};

Model.prototype.getHour = function(){
    return this.hour;
};

Model.prototype.getMinute = function(){
    return this.minute;
};

Model.prototype.getSecond = function(){
    return this.second;
};
