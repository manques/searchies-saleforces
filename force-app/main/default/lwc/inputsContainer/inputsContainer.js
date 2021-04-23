import { LightningElement } from 'lwc';

export default class InputsContainer extends LightningElement {
    name = '';
    vin = '';

    handleChange(event){
        const field = event.target.name;
        const value = event.target.value;
        if(field === 'name') {
            this.name = value;
        } else if(field === 'vin'){
            this.vin = value;
        }
    }
   

    handleClick(event) {
        this.clickedButtonLabel = event.target.label;

        const detail = {
            name: this.name,
            vin: this.vin
        };

        const inputEvent = new CustomEvent('search', { detail: detail });
        this.dispatchEvent(inputEvent);
    }
}