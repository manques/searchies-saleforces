import { LightningElement, api, track, wire } from 'lwc';

import getAccounts1 from '@salesforce/apex/TestController.getAccounts';
// import getAccounts2 from '@salesforce/apex/TestController.getAccounts';
// import getAccounts3 from '@salesforce/apex/TestController.getAccounts';
// import getAccounts4 from '@salesforce/apex/TestController.getAccounts';

const columnstAccount = [
    // { label: 'Id', fieldName: 'id' },
    { label: 'Account Name', fieldName: 'Name', type: 'Name' },
    // { label: 'Phone', fieldName: 'phone', type: 'phone' },
    { label: 'Type', fieldName: 'Type', type: 'Picklist' },
    { label: 'Industry', fieldName: 'Industry', type: 'Picklist' },
];
// const columnstAccount2 = [
//     // { label: 'Id', fieldName: 'id' },
//     { label: 'Account Name', fieldName: 'Name', type: 'Name' },
//     // { label: 'Phone', fieldName: 'phone', type: 'phone' },
//     { label: 'Type', fieldName: 'Type', type: 'Picklist' },
//     { label: 'Industry', fieldName: 'Industry', type: 'Picklist' },
// ];

export default class CardList extends LightningElement {
    @track listTables = [
       
    ];
    @track list;

    columnstAccount = columnstAccount;
    columnstAccount2 = columnstAccount;
    @track isData = false;

    @api play(keyName, vin){
        console.log(keyName);
        console.log(vin);
        // let name = detail.name;
        console.log('api');
        if(keyName && vin) {
            this.apiHandler(keyName, vin);
        } else {
            console.log('------ vin || name empty ----');
        }
        
    }



    apiHandler(keyName, vin) {
        getAccounts1({keyName, vin }).then((result) => {
            this.responseHandler(result);
        })
        .catch((error) => {
            this.errorHandler(error);
        });
    }

    responseHandler(result){
        console.log('---------1----------');
        this.list= result;
        this.error = undefined;
        console.log('result1');
        console.log(JSON.stringify(this.list));
        if(result.length > 0) {
            console.log('result2');
            this.listTables.push({
                id:'1',
                data: result,
                columns: columnstAccount 
            }
            );
            this.listTables.push({
                id:'2',
                data: result,
                columns: columnstAccount 
            }
            );
            // this.template.querySelector('c-table').getTable(this.list, this.columnstAccount);
        }
    }

    errorHandler(error) {
        console.log('----error -----');
        console.log(error);
        this.error = error;
        this.list = undefined;
    }
}