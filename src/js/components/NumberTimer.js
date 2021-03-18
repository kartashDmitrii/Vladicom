export  default class NumberTimer {
    constructor(object) {
        this.elem = object.elem;
        this.delay = typeof object.delay === "undefined" ?
                        1000 :
                        object.delay;
        this.max = typeof object.max === "undefined" ?
                    parseInt(this.elem.innerText) :
                    object.max;
        this.min = typeof object.min === "undefined" ?
                    0 :
                    object.max;
        this.type = typeof object.type === "undefined" ?
                        'default' :
                        object.type;
        switch (this.type) {
            case "ease-out":
                this.bezier = [0,0,0.58,1];
                break;
            case "default":
                this.bezier = [0];
                break;
        }
        this.iteration = 0;
        this.step = Math.round(this.delay / (this.max - this.min));
        let currBezier = Math.floor(this.iteration / ((this.max - this.min) / this.bezier.length ));
        let interval = setInterval( () => {
            this.step = Math.round(this.delay / (this.max - this.min));
            currBezier = Math.floor(this.iteration / ((this.max - this.min) / this.bezier.length ));
            if (this.iteration < this.max - 1){
                this.iteration++;
                this.elem.innerText = this.iteration;
            } else {
                this.iteration++;
                this.elem.innerText = this.iteration;
                clearInterval(interval)
            }
        }, this.step * (this.bezier[currBezier] + 1) )
    }
}