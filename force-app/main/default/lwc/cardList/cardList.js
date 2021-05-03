import { LightningElement, api, track } from 'lwc';

import getAccounts1 from '@salesforce/apex/TestController.getAccounts1';
import getAccounts2 from '@salesforce/apex/TestController.getAccounts2';
import getAccounts3 from '@salesforce/apex/TestController.getAccounts3';
import getAccounts4 from '@salesforce/apex/TestController.getAccounts4';

const columns1 = [
    { label: 'Account Name', fieldName: 'Name', type: 'Name' },
    { label: 'Type', fieldName: 'Type', type: 'Picklist' },
    { label: 'Industry', fieldName: 'Industry', type: 'Picklist' },
];
const columns2 = [
    { label: 'Account Name', fieldName: 'Name', type: 'Name' },
    { label: 'Type', fieldName: 'Type', type: 'Picklist' },
    { label: 'Industry', fieldName: 'Industry', type: 'Picklist' },
];
const columns3 = [
    { label: 'Account Name', fieldName: 'Name', type: 'Name' },
    { label: 'Type', fieldName: 'Type', type: 'Picklist' },
    { label: 'Industry', fieldName: 'Industry', type: 'Picklist' },
];

const columns4 = [
    { label: 'Account Name', fieldName: 'Name', type: 'Name' },
    { label: 'Type', fieldName: 'Type', type: 'Picklist' },
    { label: 'Industry', fieldName: 'Industry', type: 'Picklist' },
];

export default class CardList extends LightningElement {
    @track listTables = [
        {
            id:'1',
            data: null,
            columns: columns1
        },
        {
            id:'2',
            data: null,
            columns: columns2
        },
        {
            id:'3',
            data: null,
            columns: columns3
        },
        {
            id:'4',
            data: null,
            columns: columns4
        }
    ];


    @api play(keyName, vin){
        if(keyName && vin) {
            console.log(JSON.stringify(this.listTables));
            this.apiHandler(keyName, vin, getAccounts1, 0);
            this.apiHandler(keyName, vin, getAccounts2, 1);
            this.apiHandler(keyName, vin, getAccounts3, 2);
            this.apiHandler(keyName, vin, getAccounts4, 3);
        }    
    }



    apiHandler(keyName, vin, getMethod, index) {
        getMethod({keyName, vin})
        .then((result) => {
            this.responseHandler(result, index);
        })
        .catch((error) => {
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