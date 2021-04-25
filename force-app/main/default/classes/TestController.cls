public with sharing class TestController {
    public TestController() {

    }

    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts(string keyName, string vin) {
        string keyName1 = '%'+keyName+'%';
        // String keyName = '%U%';
        system.debug('name');
        system.debug(keyName);
        system.debug('name1');
        system.debug(keyName1);
        system.debug('vin');
        system.debug(vin);
        // System.out.println(key);
        return[ select id, name, type, industry from Account WHERE name LIKE: '%'+keyName+'%' and type LIKE: '%'+vin+'%' limit 10];
    }
}
   