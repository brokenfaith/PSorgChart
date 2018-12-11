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
    
    private static List<Integer> getFilterOutput(Map<Integer, List<String>> data, String filter) {
        List<Integer> result = new ArrayList<Integer>();
       // System.out.println(filter);
        for (int line : data.keySet()) {
            if(data.get(line).get(3) == filter) {
                result.add(line);
            }
        }
        
        return result;
    }

    public static void main(String[] args) {
        try {
            /*Modified main into 2 outputs */
            Map<Integer, List<String>> data = excellReading.ReadExcel();
            Map<Integer, List<Integer>> organized_data = new HashMap<Integer, List<Integer>>();
            int indexCount = 0;
            //int index = 0;
            int rootIndex = 0;
            
            com.psOrgChartFrame frame = new com.psOrgChartFrame();
            //Root Var == Hardepp 'Blank'
            List<Integer> rootResult = new ArrayList<Integer>();
            
            for(List<String> valueList : data.values()) {
                if(valueList.get(2) == "Blank") {
                   
                    rootResult = getFilterOutput(data, valueList.get(0)); 
                    organized_data.put(indexCount,rootResult);
                    rootIndex = indexCount;
                }
                else
                {
                    List<Integer> result = getFilterOutput(data, valueList.get(0));    
                    //System.out.println(result);
                    organized_data.put(indexCount,result);
                }
                
                indexCount++;
            }
            
            System.out.println(organized_data.get(rootIndex));
                   
        } catch (IOException e) {
            e.printStackTrace();
        }
        
    };

}



