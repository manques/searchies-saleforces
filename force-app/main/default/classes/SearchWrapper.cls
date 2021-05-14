public with sharing class SearchWrapper {
    public static List<myWrapper> myAccountList = new List<myWrapper>();
    public SearchWrapper() {
        
    }

    @AuraEnabled(cacheable=true)
    public static List<myWrapper> getDetails(string name, string vin) {
        myAccountList = new List<myWrapper>();
        system.debug(name);
        system.debug(vin);
        Account acc = getAccount(name, vin);
        system.debug(acc);
        system.debug(acc.VIN__c);

        ServiceContract__c  sc = getServiceContract(acc.VIN__c);
        system.debug(sc);
        system.debug(sc.Id);

        List<Coverage__c> cov = getCoverage(sc.Id);
        system.debug(cov);

        myAccountList = new List<myWrapper>();
        myAccountList.add(new myWrapper(acc, sc, cov));
        system.debug(myAccountList);
        return myAccountList;
    }


    @AuraEnabled(cacheable=true)
    public static Account getAccount(string name, string vin) {
        system.debug(name);
        system.debug(vin);
        return[ SELECT Id, Name, Email__c, BillingAddress, Phone, VIN__c, Model__c, Make__c, Year__c from Account 
                WHERE name = :name  and VIN__c = :vin LIMIT 1];
    }

    @AuraEnabled(cacheable=true)
    public static ServiceContract__c getServiceContract(string vin) {
        return [SELECT Id, Name, Dealer_Address__c, Customer__r.Name, Current_Ododmeter__c, Customer__r.Phone, Customer__r.VIN__c, 
                Customer__r.Model__c, Customer__r.Make__c, Customer__r.Year__c
                FROM ServiceContract__c
                WHERE Customer__r.VIN__c = :vin LIMIT 1];
    }
    @AuraEnabled(cacheable=true)
    public static List<Coverage__c> getCoverage(string id) {
        system.debug(id);
        return [SELECT Id, Name, Description__c, Service_Contract__r.Name FROM Coverage__c WHERE Service_Contract__r.Id = :id];
    }
    // 

    public class myWrapper {
        @AuraEnabled
        public Account account;
        @AuraEnabled
        public ServiceContract__c contract;
        @AuraEnabled
        public List<Coverage__c> coverage;
// 
        public myWrapper(Account ac, ServiceContract__c  sc, List<Coverage__c> cov) {
            account = ac;
            contract = sc;
            coverage = cov;
        }
    }
}
