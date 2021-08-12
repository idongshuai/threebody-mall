package com.processon.test;

import org.junit.Test;

/**
 * TODO
 *
 * @author ds
 * @version 1.0.0
 * @date 2021/4/23
 */
public class CheckOrderTest {

    /**
     * 对比多出的订单
     */
    @Test
    public void checkOrder() {
        /*String path = "C:\\Users\\Administrator\\Desktop\\腾讯文档对账\\tdocs2-3月订单.xlsx";
        List<JSONObject> tdocsOrders = getExcelOrders(path, 0);

        path = "C:\\Users\\Administrator\\Desktop\\腾讯文档对账\\本系统2-3月订单.xlsx";
        List<JSONObject> processonOrders = getExcelOrders(path, 0);

        List<String> tdocsOrderList = new ArrayList<>();
        List<String> proOrderIdList = new ArrayList<>();

        for (JSONObject tdocsOrder : tdocsOrders) {
            String tdocsOrderId = (String) tdocsOrder.get("1");
            if (tdocsOrderId.contains(".")) {
                tdocsOrderId = tdocsOrderId.substring(0, tdocsOrderId.lastIndexOf("."));
            }
            tdocsOrderList.add(tdocsOrderId);
        }

        for (JSONObject processonOrder : processonOrders) {
            String tdocsOrderId = (String) processonOrder.get("1");
            if (tdocsOrderId.contains(".")) {
                tdocsOrderId = tdocsOrderId.substring(0, tdocsOrderId.lastIndexOf("."));
            }
            proOrderIdList.add(tdocsOrderId);
        }

        System.out.println("tdocs id size: " + tdocsOrderList.size());
        System.out.println("pro id size: " + proOrderIdList.size());

        for (String id : tdocsOrderList) {
            if (!proOrderIdList.contains(id)) {
                System.out.println("本系统不存在tdocs的订单：" + id);
            }
        }

        for (String id : proOrderIdList) {
            if (!tdocsOrderList.contains(id)) {
                System.out.println("tdocs不存在processon的订单：" + id);
            }
        }

        System.out.println("对账结束。");*/
    }

    /**
     * 订单号一样的对比价格
     */
    @Test
    public void checkPrice() {
        /*String path = "C:\\Users\\Administrator\\Desktop\\腾讯文档对账\\tdocs2-3月订单.xlsx";
        List<JSONObject> tdocsOrders = getExcelOrders(path, 1);

        path = "C:\\Users\\Administrator\\Desktop\\腾讯文档对账\\本系统2-3月订单.xlsx";
        List<JSONObject> processonOrders = getExcelOrders(path, 1);

        for (JSONObject tdocsOrder : tdocsOrders) {
            String orderId = (String) tdocsOrder.get("1");
            String price = (String) tdocsOrder.get("3");
//            System.out.println(orderId + "  " + price);
            for (JSONObject processonOrder : processonOrders) {
                String proOrderId = (String) processonOrder.get("1");
                String proPrice = (String) processonOrder.get("3");
//                    System.out.println(proOrderId + "  " + proPrice);

                if (orderId.equals(proOrderId)) {
                    if (price.equals(proPrice)) {
//                            System.out.println(orderId + "  " + price);
//                            System.out.println(proOrderId + "  " + proPrice);
                    } else {
                        System.out.println("价格不一致：" + orderId);
                    }

                }
            }
        }
        System.out.println("对账结束。");*/
    }

    /*public static List<JSONObject> getExcelOrders(String path, int sheetIndex) {
        List<JSONObject> list = new ArrayList<>();

        try {
            InputStream in = new FileInputStream(new File(path));
            Workbook wookbook = WorkbookFactory.create(in);
            //excel文件有多少sheet
            int numberOfSheets = wookbook.getNumberOfSheets();
            //得到一个工作表
            Sheet sheet = wookbook.getSheetAt(sheetIndex);
            int lastRowNum = sheet.getLastRowNum();
            for (int i = 0; i <= lastRowNum; i++) {
                Row row = sheet.getRow(i);
                if (row == null) {
                    continue;
                }
                JSONObject rowJsonObj = new JSONObject();
                //最大列
                short maxColumn = row.getLastCellNum();
                row.getFirstCellNum();
                for (int j = row.getFirstCellNum(); j <= maxColumn; j++) {
                    Cell cell = row.getCell(j);
                    //获取当前单元格的值
                    String cellValue = getCellValue(cell);
                    rowJsonObj.put("" + j, cellValue);
                }

                list.add(rowJsonObj);
            }
        } catch (IOException e) {
            e.printStackTrace();
        } catch (InvalidFormatException e) {
            e.printStackTrace();
        }

        return list;
    }


    public static String getCellValue(Cell cell) {
        if (cell == null) {
            return "";
        }

        switch (cell.getCellType()) {
            case Cell.CELL_TYPE_STRING:
                return cell.getStringCellValue();
            case Cell.CELL_TYPE_BOOLEAN:
                return String.valueOf(cell.getBooleanCellValue());
            case Cell.CELL_TYPE_FORMULA:
//                System.out.println(cell.getCellFormula());
                //获取公式类型的值
                FormulaEvaluator evaluator = cell.getSheet().getWorkbook().getCreationHelper().createFormulaEvaluator();
                evaluator.evaluateFormulaCell(cell);
                CellValue cellValue = evaluator.evaluate(cell);
                Double cellData = cellValue.getNumberValue();
                return String.valueOf(cellData);
            case Cell.CELL_TYPE_NUMERIC:
                return String.valueOf(cell.getNumericCellValue());
            default:
                cell.setCellType(Cell.CELL_TYPE_STRING);
                return cell.getStringCellValue();
        }
    }*/
}
