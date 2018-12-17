package com;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.PrintStream;
import java.util.*;

import com.Data;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.json.JSONObject;


public class excellReading {


    //private static final String INPUT_XLS = "HackathonData.xlsx";
    private static Map<Integer, List<String>> data_set;
    private static Map<Integer, List<Integer>> organized_set = new HashMap<Integer, List<Integer>>();
    
    public static Map<Integer, List<String>> GetRawData() {
        return data_set;
    }
    
    public static Map<Integer, List<Integer>> GetSortedData() {
        return organized_set;
    }
    
    public static void LoadDataSet(String filename) {
        try
        {
            ReadExcel(filename);
            AssociateMapToSet();
        } catch (IOException e) {
            e.printStackTrace();
        }
        
    }
    
    public static void AssociateMapToSet() {
            
            int indexCount = 0;
            //int index = 0;
            int rootIndex = 0;
            //Root Var == Hardepp 'Blank'
            List<Integer> rootResult = new ArrayList<Integer>();
            
            for(List<String> valueList : data_set.values()) {
                if(valueList.get(2) == "Blank") {
                   
                    rootResult = getFilterOutput(data_set, valueList.get(0)); 
                    organized_set.put(indexCount,rootResult);
                    rootIndex = indexCount;
                }
                else
                {
                    List<Integer> result = getFilterOutput(data_set, valueList.get(0));    
                    organized_set.put(indexCount,result);
                }
                
                indexCount++;
            }
    }


    public static JSONObject ReadExcel(String filename) throws IOException {

        FileInputStream inputStream = new FileInputStream(new File(filename));

        //Create Workbook instance holding reference to file
        Workbook workbook = new XSSFWorkbook(inputStream);

        //Get first sheet from workbook
        Sheet sheet = workbook.getSheetAt(0);

        //Our POJO for storing the excel data
        Data excelData = new Data();

        //Row iterator
        Iterator<Row> iterator = sheet.iterator();

//        //Hash map to store excel data
        Map<Integer, List<String>> Data = new HashMap<Integer, List<String>>();

//        // Test test=new Test();
        int rowCnt = 0;


        while (iterator.hasNext()) {
            Row nextRow = iterator.next();

            Iterator<Cell> cellIterator = nextRow.cellIterator();
            List<String> obj = new ArrayList<String>();
            while (cellIterator.hasNext()) {
                Cell cell = cellIterator.next();


                if (cell.getCellTypeEnum() == CellType.STRING) {

                    String cellobj = cell.getStringCellValue();

                    if ("".equals(cell.getStringCellValue())) {
                        obj.add("Blank");
                    } else if (cellobj.equals(null)) {
                        obj.add("");
                    } else {
                        obj.add(cell.getStringCellValue());
                    }
                } else if (cell.getCellTypeEnum() == CellType.NUMERIC) {

                    Double cellobj = cell.getNumericCellValue();

                    if ("".equals(cell.getNumericCellValue())) {
                        obj.add("Blank");
                    } else if (cellobj.equals(null)) {
                        obj.add("");
                    } else {
                        obj.add(cell.toString());
                    }
                }
            }
            Data.put(rowCnt, obj);
            rowCnt++;
        }

        PrintStream o = new PrintStream(new File("A.txt"));

        PrintStream console = System.out;

        System.setOut(o);

        data_set = Data;
        JSONObject json = new JSONObject(Data);
        System.out.println(json);
        return json;
    }
    
    private static List<Integer> getFilterOutput(Map<Integer, List<String>> data, String filter) {
        List<Integer> result = new ArrayList<Integer>();

        for (int line : data.keySet()) {
            if(data.get(line).get(3) == filter) {
                result.add(line);
            }
        }
        
        return result;
    }
}