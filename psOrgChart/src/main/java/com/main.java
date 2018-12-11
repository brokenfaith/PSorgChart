package com;

import org.apache.poi.hssf.usermodel.HSSFCell;
import org.apache.poi.hssf.usermodel.HSSFRow;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.poifs.filesystem.POIFSFileSystem;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.omg.CORBA.portable.ApplicationException;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.lang.reflect.Array;
import java.util.*;

public class main {
    
    //private static final String INPUT_XLS = "HackathonData.xlsx";
    private static final String INPUT_XLS = "/Users/bartowb/Documents/HackathonData.xlsx";
    

    public static void main(String[] args) {
        excellReading.LoadDataSet(INPUT_XLS);
        
        com.psOrgChartFrame frame = new com.psOrgChartFrame(excellReading.GetSortedData(), excellReading.GetRawData());
        
    };

}



