import { LightningElement, track } from 'lwc';

export default class Serachies extends LightningElement {
    @track isSearchData = false;

    handleEvent(event){
       console.log(JSON.stringify(event));

       ((event.detail.name.length > 0) && (event.detail.vin.length > 0)) ?
       this.isSearchData = true :
       this.isSearchData = false;
        console.log(this.isSearchData);
       if(this.isSearchData){
        this.template.querySelector('c-card-list').play(event.detail.name, event.detail.vin);
       }
    }
}