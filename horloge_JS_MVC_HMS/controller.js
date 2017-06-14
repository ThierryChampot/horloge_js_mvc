// controleur.js
function Controller(model, view){
    this.model = model;
	this.view  = view;
    this.view.on('addHour', this.handleAddHour.bind(this));
    this.view.on('removeHour', this.handleRemoveHour.bind(this));
    this.view.on('addMinute', this.handleAddMinute.bind(this));
    this.view.on('removeMinute', this.handleRemoveMinute.bind(this));
    this.view.on('addSecond', this.handleAddSecond.bind(this));
    this.view.on('removeSecond', this.handleRemoveSecond.bind(this));
    this.view.on('reset', this.handleReset.bind(this));
}

// observer
Controller.prototype.handleAddHour = function(){
    this.model.addHour();
};

Controller.prototype.handleRemoveHour = function(){
    this.model.removeHour();
};

Controller.prototype.handleAddMinute = function(){
    this.model.addMinute();
};

Controller.prototype.handleRemoveMinute = function(){
    this.model.removeMinute();
};

Controller.prototype.handleAddSecond = function(){
    this.model.addSecond();
};

Controller.prototype.handleRemoveSecond = function(){
    this.model.removeSecond();
};
Controller.prototype.handleReset = function(){
  this.model.init();
};
