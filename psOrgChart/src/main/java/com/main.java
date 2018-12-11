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

    public static void main(String[] args){
        try {
            ReadExcel();
        } catch (IOException e) {
            e.printStackTrace();
        }
    };

    public static String FILE_NAME = "/Users/bartowb/Documents/HackathonData.xlsx";



    public static Map<Integer, List<String>> ReadExcel() throws IOException {

        List<String> contact = new ArrayList<String>();

        Map<Integer, List<String>> data = new HashMap<Integer, List<String>>();

        int rowCnt = 0;

        try {
            //read from the input file
            FileInputStream excelFile = new FileInputStream(new File(FILE_NAME));

            //create workbook
            Workbook workbook = new XSSFWorkbook(excelFile);
            //get the first sheet of the workbook
            Sheet datatypeSheet = workbook.getSheetAt(0);
            //iterator over the workbook sheets
            Iterator<Row> iterator = datatypeSheet.iterator();

            //while there is a sheet to iterate over
            while (iterator.hasNext()) {

                //Current row aka Contact
                Row currentRow = iterator.next();
                //individual cell for each row
                Iterator<Cell> cellIterator = currentRow.iterator();



                //iterate over the cells within the row
                while (cellIterator.hasNext()) {

                    Cell currentCell = cellIterator.next();



                    if (currentCell.getCellTypeEnum() == CellType.STRING) {

                        String cellobj = currentCell.getStringCellValue();

                        if ("".equals(currentCell.getStringCellValue())) {
                            contact.add("Blank");
                        } else if (cellobj.equals(null)) {
                            contact.add("");
                        } else {
                            contact.add(currentCell.getStringCellValue());
                        }
                    } else if (currentCell.getCellTypeEnum() == CellType.NUMERIC) {

                        Double cellobj = currentCell.getNumericCellValue();

                        if ("".equals(currentCell.getNumericCellValue())) {
                            contact.add("Blank");
                        } else if (cellobj.equals(null)) {
                            contact.add("");
                        } else {
                            contact.add(currentCell.toString());
                        }
                    }


//                    //output for testing
//                    if (currentCell.getCellTypeEnum() == CellType.STRING) {
//                        System.out.print(currentCell.getStringCellValue() + "--");
//                    } else if (currentCell.getCellTypeEnum() == CellType.NUMERIC) {
//                        System.out.print(currentCell.getNumericCellValue() + "--");
//                    }

                }
//                System.out.println();

                data.put(rowCnt, contact);
                rowCnt++;

            }


        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return data;
    }


}
