public with sharing class TestController {
    public TestController() {
    }

    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts1(string keyName, string vin) {
        system.debug(keyName);
        system.debug(vin);
        return[ SELECT id, name, type, industry from Account WHERE name LIKE: '%'+keyName+'%' and type LIKE: '%'+vin+'%' LIMIT 10];
    }

    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts2(string keyName, string vin) {
        return[ SELECT id, name, type, industry from Account WHERE name LIKE: '%'+keyName+'%' and type LIKE: '%'+vin+'%' LIMIT 10];
    }
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts3(string keyName, string vin) {
        return[ SELECT id, name, type, industry from Account WHERE name LIKE: '%'+keyName+'%' and type LIKE: '%'+vin+'%' LIMIT 10];
    }

    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts4(string keyName, string vin) {
        return[ SELECT id, name, type, industry from Account WHERE name LIKE: '%'+keyName+'%' and type LIKE: '%'+vin+'%' LIMIT 10];
    }
}
   