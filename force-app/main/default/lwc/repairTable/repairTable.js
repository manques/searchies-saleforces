import { LightningElement, api, track } from 'lwc';

export default class RepairTable extends LightningElement {
    @api list;
    @track repairColumns = [
        {label: 'Repair Number', fieldName: 'Name', type: 'Auto Number'},
        {label: 'Service Contract', fieldName: 'Service_Contract__c', type: 'Lookup'},
        {label: 'Customer', fieldName: 'Customer__c', type: 'Lookup'},
        {label: 'Coverage', fieldName: 'Coverage__c', type: 'Lookup'},
        {label: 'Description', fieldName: 'Description__c', type: 'Text Area'},
        {label: 'Status', fieldName: 'Status__c', type: 'Picklist'},
    ];

}