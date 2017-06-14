// vue.js
function View(model){
	EventEmitter.call(this);
	this.model = model;
	this.init();
}

// View
View.prototype = Object.create(EventEmitter.prototype);
View.prototype.constructor = View;

View.prototype.init = function(){
	// création page 
	var div = document.body.appendChild(document.createElement('div'));
    div.setAttribute('id','container');

        var screen = div.appendChild(document.createElement('div'));
        screen.setAttribute('id','screen');
        screen.appendChild(document.createElement('h1')).textContent="Click buttons to change time !";

        var time = screen.appendChild(document.createElement('div'));
            time.setAttribute('id','time');
            this.affichage_hour = time.appendChild(document.createElement('span'));
            time.appendChild(document.createElement('span')).textContent=" : ";
            this.affichage_minute = time.appendChild(document.createElement('span'));
            time.appendChild(document.createElement('span')).textContent=" : ";
            this.affichage_second = time.appendChild(document.createElement('span'));
            time.appendChild(document.createElement('br'));

        var buttons = div.appendChild(document.createElement('div'));
        buttons.setAttribute('id','buttons');
            var btn_add_hour = buttons.appendChild(document.createElement('button'));
            btn_add_hour.textContent = 'H+';
            btn_add_hour.addEventListener('click', this.emit.bind(this,'addHour'));

            var btn_remove_hour = buttons.appendChild(document.createElement('button'));
            btn_remove_hour.textContent = 'H-';
            btn_remove_hour.addEventListener('click', this.emit.bind(this, 'removeHour'));

            var btn_add_minute = buttons.appendChild(document.createElement('button'));
            btn_add_minute.textContent = 'M+';
            btn_add_minute.addEventListener('click', this.emit.bind(this,'addMinute'));

            var btn_remove_minute = buttons.appendChild(document.createElement('button'));
            btn_remove_minute.textContent = 'M-';
            btn_remove_minute.addEventListener('click', this.emit.bind(this, 'removeMinute'));

            var btn_add_second = buttons.appendChild(document.createElement('button'));
            btn_add_second.textContent = 'S+';
            btn_add_second.addEventListener('click', this.emit.bind(this,'addSecond'));

            var btn_remove_second = buttons.appendChild(document.createElement('button'));
            btn_remove_second.textContent = 'S-';
            btn_remove_second.addEventListener('click', this.emit.bind(this,'removeSecond'));

            var btn_reset = buttons.appendChild(document.createElement('button'));
            btn_reset.textContent = 'reset';
            btn_reset.addEventListener('click',function(){
                this.emit('reset');
            }.bind(this));

    // abonnement
    this.model.on('hourChanged', this.displayHour.bind(this));
    this.model.on('minuteChanged', this.displayMinute.bind(this));
    this.model.on('secondChanged', this.displaySecond.bind(this));

    //pre-load
    this.displayHour();
    this.displayMinute();
    this.displaySecond();
};

// observer
View.prototype.displayHour = function(){
    this.hour = this.model.getHour().toString();
	this.affichage_hour.textContent = this.hour.length === 1 ? '0' + this.hour : this.hour;
};

View.prototype.displayMinute = function(){
    this.minute = this.model.getMinute().toString();
    this.affichage_minute.textContent = this.minute.length === 1 ? '0' + this.minute : this.minute;
};

View.prototype.displaySecond = function(){
    this.second = this.model.getSecond().toString();
    this.affichage_second.textContent = this.second.length === 1 ? '0' + this.second : this.second;
};
