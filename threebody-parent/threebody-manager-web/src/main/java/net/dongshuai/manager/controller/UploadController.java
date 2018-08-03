package net.dongshuai.manager.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import entity.Result;
import utils.FastDFSClient;

/**
 * 上传
 * @author 董帅
 */
@RestController
public class UploadController {
    
    @Value("${FILE_SERVER_URL}")
    private String FILE_SERVER_URL;

    @RequestMapping("/upload")
    public Result upload(MultipartFile file) {
        
        String originalFilename = file.getOriginalFilename();
        String extName = originalFilename.substring(originalFilename.lastIndexOf(".") + 1);
        
        try {
            FastDFSClient client = new FastDFSClient("classpath:config/fdfs_client.conf");
            String fileId = client.uploadFile(file.getBytes(), extName);
            
            //图片完整地址
            String url = FILE_SERVER_URL + fileId;
                
            return new Result(true, url);
        } catch (Exception e) {
            e.printStackTrace();
            return new Result(false, "上传失败!");
        }
        
    }
}
