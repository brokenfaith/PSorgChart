package com;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

public class excellReading {

    // public Workbook workbook= null;
    // public Sheet firstSheet= null;

    private static final String INPUT_XLS = "/Users/bartowb/Documents/HackathonData.xlsx";


    public static Map<Integer, List<String>> ReadExcel() throws IOException {

        FileInputStream inputStream = new FileInputStream(new File(INPUT_XLS));

        Map<Integer, List<String>> data = new HashMap<Integer, List<String>>();

        Workbook workbook = new XSSFWorkbook(inputStream);

        Sheet firstSheet = workbook.getSheetAt(0);

        Iterator<Row> iterator = firstSheet.iterator();

        // Test test=new Test();
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

                data.put(rowCnt, obj);
                rowCnt++;

            }

        }
        return data;
    }
}