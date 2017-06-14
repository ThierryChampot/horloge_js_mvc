// Model.js
function Model(){
	// appel du constructeur du parent
	// pour créer une liste vide d'abonnés
	EventEmitter.call(this);
	this.init();
    setInterval(function()
    {
        this.refresh();
    }.bind(this),1000);
}

// Model extends Observable
Model.prototype = Object.create(EventEmitter.prototype);
Model.prototype.constructor = Model;

Model.prototype.init = function(){
    this.offset = 0;
    this.refresh();
};

Model.prototype.refresh = function() {
    this.date = new Date();

    this.date.setSeconds(this.date.getSeconds() + this.offset);

    this.previousHour = this.hour;
    this.previousMinute = this.minute;
    this.previousSecond = this.second;

    this.hour = this.date.getHours();
    this.minute = this.date.getMinutes();
    this.second = this.date.getSeconds();

    if(this.hour !== this.previousHour) {this.emit('hourChanged');}
    if(this.minute !== this.previousMinute){this.emit('minuteChanged');}
    if(this.second !== this.previousSecond){this.emit('secondChanged');}
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

Model.prototype.changeOffset = function(value){
    this.offset += value;
    this.refresh();
};
