import { LightningElement, api, track } from 'lwc';


import getDetails from '@salesforce/apex/SearchWrapper.getDetails';



const coverageColumns = [
    { label: 'Name', fieldName: 'Name', type: 'Text' },
    { label: 'Description', fieldName: 'Description__c', type: 'Long Text Area' },
    { label: 'Service Contract', fieldName: 'Service_Contract__c', type: 'Picklist' },
];
export default class CardList extends LightningElement {
    @track account;
    @track contract;
    @track coverage =  {
        data: null,
        columns: coverageColumns
    };


    @api play(name, vin){
        if(name && vin) {
            console.log(JSON.stringify(this.listTables));
            this.apiHandler(name, vin, getDetails, 0);
            // this.apiHandler(name, vin, getAccounts2, 1);
            // this.apiHandler(name, vin, getAccounts3, 2);
            // this.apiHandler(name, vin, getAccounts4, 3);
        }    
    }



    apiHandler(name, vin, getMethod, index) {
        getMethod({name, vin})
        .then((result) => {
            console.log('-------------   result   ------------------');
            console.log(result);
            this.account = JSON.parse(JSON.stringify(result[0].account)) ;
            this.contract = JSON.parse(JSON.stringify(result[0].contract));
            
            const formatCoverage = result[0].coverage.map(element => {
                const newElement = {
                    Id: element.Id,
                    Name: element.Name,
                    Description__c: element.Description__c,
                    Service_Contract__c: element.Service_Contract__r.Name
                };
                return newElement;
            });

            this.coverage.data = JSON.parse(JSON.stringify(formatCoverage));
            console.log(JSON.stringify(this.account));
            console.log('name:');
            console.log(this.account.Name);
            console.log(JSON.stringify(this.contract));
            console.log(JSON.stringify(this.coverage));

            this.responseHandler(result, index);
        })
        .catch((error) => {
            console.log('-------------   error   ------------------');
            console.log(JSON.stringify(error));
            this.errorHandler(error);
        });
    }
    

    responseHandler(result, index){
        if(result.length > 0) {
            this.listTables[index].data = result;
        }
    }

    errorHandler(error) {
        this.error = error;
        this.list = undefined;
    }

}