import { LightningElement, api, track } from 'lwc';

const columns = [
    // { label: 'Id', fieldName: 'id' },
    { label: 'Account Name', fieldName: 'Name', type: 'Name' },
    // { label: 'Phone', fieldName: 'phone', type: 'phone' },
    { label: 'Type', fieldName: 'Type', type: 'Picklist' },
    { label: 'Industry', fieldName: 'Industry', type: 'Picklist' },
];
export default class Table3 extends LightningElement {
    @track list;
    @track columns = columns;

    @api getTable(list) {
        this.list = list;
        console.log(this.list);
        console.log(this.columns)
    }
}