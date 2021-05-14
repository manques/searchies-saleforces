import { LightningElement, track } from 'lwc';

export default class SearchiesMain extends LightningElement {
    @track isSearchData = false;
    handleEvent(event){
       this.template.querySelector('c-card-list').play(event.detail.name, event.detail.vin);
    }
}