public with sharing class AccountHelper1 {
    @AuraEnabled
    public static List<Account> getAccountList(){
        try {
            return [SELECT Name, Phone FROM Account];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    }