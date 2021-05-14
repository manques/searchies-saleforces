import { LightningElement, api, track } from 'lwc';
import getRepair from '@salesforce/apex/SearchWrapper.getRepir';

export default class Table extends LightningElement {
    @api list;
    @track selectedCoverage;
    @track repair;
    @track length;
    @track isRepair;

    getSelectedName(event) {
        const selectedRows = event.detail.selectedRows;
        console.log(JSON.stringify(selectedRows));
        this.length = event.detail.selectedRows.length;
        console.log(this.length);
        this.isRepair = this.isRepairValue();
        console.log(this.isRepair);
        if(this.length > 0){
            this.selectedCoverage = selectedRows[this.length - 1].Id;
            console.log(selectedRows[this.length - 1].Name);
            console.log(this.selectedCoverage);
            this.handleApi(this.selectedCoverage);
        }
    }

    handleApi(id){
        console.log(id);
        getRepair({id})
        .then(result => {
            console.log(result);
            console.log(JSON.stringify(result));
            this.repair = result.map(element => {
                const newElement = {
                    Id: element.Id,
                    Name: element.Name,
                    Service_Contract__c: element.Service_Contract__r.Name,
                    Customer__c: element.Customer__r.Name,
                    Coverage__c: element.Coverage__r.Name,
                    Description__c: element.Description__c,
                    Status__c: element.Status__c
                };
                return newElement;
            });
            console.log(this.repair);
            console.log(JSON.stringify(this.repair));
        })
        .catch(error => {
            console.log(error);
            console.log(JSON.stringify(error));
        });
    }
    isRepairValue(){
        return this.length > 0;
    }
}