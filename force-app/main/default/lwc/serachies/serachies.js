import { LightningElement, track } from 'lwc';

export default class Serachies extends LightningElement {
    @track isSearchData = false;
    handleEvent(event){
       console.log(JSON.stringify(event));
       this.template.querySelector('c-card-list').play(event.detail.name, event.detail.vin);
    }
}