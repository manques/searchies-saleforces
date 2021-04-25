import { LightningElement, api, track, wire } from 'lwc';

import getAccounts1 from '@salesforce/apex/TestController.getAccounts';
import getAccounts2 from '@salesforce/apex/TestController.getAccounts';
import getAccounts3 from '@salesforce/apex/TestController.getAccounts';
import getAccounts4 from '@salesforce/apex/TestController.getAccounts';

export default class CardList extends LightningElement {
    @track list1;
    @track list2;
    @track list3;
    @track list4;

    @api play(keyName, vin){
        console.log(keyName);
        console.log(vin);
        // let name = detail.name;
        console.log('api');

        getAccounts1({keyName, vin }).then((result) => {
            console.log('---------1----------');
            this.list1= result;
            this.error = undefined;
            console.log('result1');
            console.log(JSON.stringify(this.list1));
            if(result.length) {
                console.log('result1');
                this.template.querySelector('c-table1').getTable(this.list1);
            }
        })
        .catch((error) => {
            this.error = error;
            this.list1 = undefined;
        });

        getAccounts2({keyName, vin }).then((result) => {
            console.log('---------2----------');
            this.list2= result;
            this.error = undefined;
            console.log('result2');
            console.log(JSON.stringify(this.list2));
            if(result.length) {
                console.log('result2');
                this.template.querySelector('c-table2').getTable(this.list2);
            }
        })
        .catch((error) => {
            this.error = error;
            this.list2 = undefined;
        });
        getAccounts3({keyName, vin }).then((result) => {
            console.log('---------3----------');
            this.list3= result;
            this.error = undefined;
            console.log('result3');
            console.log(JSON.stringify(this.list3));
            if(result.length) {
                console.log('result3');
                this.template.querySelector('c-table3').getTable(this.list3);
            }
        })
        .catch((error) => {
            this.error = error;
            this.list3 = undefined;
        });

        getAccounts4({keyName, vin }).then((result) => {
            console.log('---------3----------');
            this.list4= result;
            this.error = undefined;
            console.log('result4');
            console.log(JSON.stringify(this.list4));
            if(result.length) {
                console.log('result4');
                this.template.querySelector('c-table4').getTable(this.list4);
            }
        })
        .catch((error) => {
            this.error = error;
            this.list4 = undefined;
        });
    }
    // @wire(getAccounts()) accountRecords({error, data}) {
    //     if(data) {
    //         this.data = data;     
    //     } else if(error) {
    //         this.data = undefined;
    //     }
    // }

    
    
    // async connectedCallback() {
    //     const data = await fetchDataHelper({amountOfRecords: 50});
    //     this.data = data;
    // }
}