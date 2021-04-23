import { LightningElement, track } from 'lwc';

export default class Serachies extends LightningElement {
    @track detail = {
        name: '',
        vin: ''
    };

    handleEvent(event){
       this.detail.name = event.detail.name;
       this.detail.vin = event.detail.vin;

       console.log(JSON.stringify(this.detail));
    }
}