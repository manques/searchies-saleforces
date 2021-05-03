import { LightningElement, track } from 'lwc';

export default class InputsContainer extends LightningElement {
    @track name = '';
    @track vin = '';

    handleChange(event){
        console.log(event);
        const field = event.target.name;
        const value = event.target.value;
        if(field === 'name') {
            this.name = value;
        } else if(field === 'vin'){
            this.vin = value;
        }
    }
   

    handleClick() {

        const detail = {
            name: this.name,
            vin: this.vin
        };

        const inputEvent = new CustomEvent('search', { detail: detail });
        this.dispatchEvent(inputEvent);
    }
}