import { LightningElement, api, track } from 'lwc';
import fetchDataHelper from './fetchDataHelper';
const columns = [
    { label: 'Label', fieldName: 'name' },
    { label: 'Website', fieldName: 'website', type: 'url' },
    { label: 'Phone', fieldName: 'phone', type: 'phone' },
    { label: 'Balance', fieldName: 'amount', type: 'currency' },
    { label: 'CloseAt', fieldName: 'closeAt', type: 'date' },
];

export default class CardList extends LightningElement {
    @api detail;
    data = [];
    columns = columns;
    
    async connectedCallback() {
        const data = await fetchDataHelper({amountOfRecords: 50});
        this.data = data;
    }
}