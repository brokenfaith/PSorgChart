package com;


/**
 * Data object. This object represents the Data being pulled in from a single excel sheet
 * @author bartowb
 */
public class Data {


    private String associateId;

    private String name;

    private String reportsTo;

    private String reportsToAssociateId;

    private String org;

    private String depart;

    private String jobTitle;

    private String field1;

    private String field1Header;

    private String field2;

    private String field2Header;

    private String field3;

    private String field3Header;

    private String field4;

    private String field4Header;

    private String field5;

    private String field5Header;

    /**
     * Default Constructor
     */
    public Data(){

    }

    public Data(String associateId, String name, String reportsTo, String reportsToAssociateId, String org, String depart, String jobTitle, String field1,
                String field1Header, String field2, String field2Header, String field3, String field3Header, String field4, String field4Header, String field5, String field5Header){

        this.associateId = associateId;
        this.name = name;
        this.reportsTo = reportsTo;
        this.reportsToAssociateId = reportsToAssociateId;
        this.org = org;
        this.depart = depart;
        this.jobTitle = jobTitle;
        this.field1 = field1;
        this.field1Header = field1Header;
        this.field2 = field2;
        this.field2Header = field2Header;
        this.field3 = field3;
        this.field3Header = field3Header;
        this.field4 = field4;
        this.field4Header = field4Header;
        this.field5 = field5;
        this.field5Header = field5Header;


    }


    public String getAssociateId() {
        return associateId;
    }

    public void setAssociateId(String associateId) {
        associateId = associateId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getReportsTo() {
        return reportsTo;
    }

    public void setReportsTo(String reportsTo) {
        this.reportsTo = reportsTo;
    }

    public String getReportsToAssociateId() {
        return reportsToAssociateId;
    }

    public void setReportsToAssociateId(String reportsToAssociateId) {
        this.reportsToAssociateId = reportsToAssociateId;
    }

    public String getOrg() {
        return org;
    }

    public void setOrg(String org) {
        this.org = org;
    }

    public String getDepart() {
        return depart;
    }

    public void setDepart(String depart) {
        depart = depart;
    }

    public String getJobTitle() {
        return jobTitle;
    }

    public void setJobTitle(String jobTitle) {
        this.jobTitle = jobTitle;
    }

    public String getField1() {
        return field1;
    }

    public void setField1(String field1) {
        this.field1 = field1;
    }

    public String getField1Header() {
        return field1Header;
    }

    public void setField1Header(String field1Header) {
        this.field1Header = field1Header;
    }

    public String getField2() {
        return field2;
    }

    public void setField2(String field2) {
        this.field2 = field2;
    }

    public String getField2Header() {
        return field2Header;
    }

    public void setField2Header(String field2Header) {
        this.field2Header = field2Header;
    }

    public String getField3() {
        return field3;
    }

    public void setField3(String field3) {
        this.field3 = field3;
    }

    public String getField3Header() {
        return field3Header;
    }

    public void setField3Header(String field3Header) {
        this.field3Header = field3Header;
    }

    public String getField4() {
        return field4;
    }

    public void setField4(String field4) {
        this.field4 = field4;
    }

    public String getField4Header() {
        return field4Header;
    }

    public void setField4Header(String field4Header) {
        this.field4Header = field4Header;
    }

    public String getField5() {
        return field5;
    }

    public void setField5(String field5) {
        this.field5 = field5;
    }

    public String getField5Header() {
        return field5Header;
    }

    public void setField5Header(String field5Header) {
        this.field5Header = field5Header;
    }



}
