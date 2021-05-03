import { LightningElement, api, track } from 'lwc';

export default class Table extends LightningElement {
    @api list;

    // @api getTable(list, columns) {
    //     this.list = list;
    //     this.columns = columns;
    //     console.log(this.list);
    //     console.log(this.columns)
    // }
}