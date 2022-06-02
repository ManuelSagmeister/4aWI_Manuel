export default class battery{
    constructor(battery1, battery2) {
        this.battery1 = battery1;
        this.battery2 = battery2;
    }

    getStatus(){
        let average = (this.battery1+this.battery2)/2;
        this.hasPower(average);
        return average;
    }

    hasPower(average){
        if (average >=50){
            console.log(true);
        }
        else {
            console.log(false);
        }
        console.log(average + "%");
    }

    turnOn(){
        this.battery1 -=5;
        this.battery2 -=5;
        this.getStatus();
    }
}