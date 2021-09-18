package net.dongshuai.utils.springboot;

import org.springframework.core.io.Resource;
import org.springframework.core.io.support.PathMatchingResourcePatternResolver;
import org.springframework.core.io.support.ResourcePatternResolver;

import java.io.IOException;

/**
 * Springboot获取resources下的资源
 *
 * @author ds
 * @version 1.0.0
 * @date 2021/9/18
 */
public class ResourcesUtil {

    /**
     * [Springboot应用]
     * 根据正则路径获取resources下的资源
     * 例：data/*.*
     *
     * @param locationPattern
     * @return org.springframework.core.io.Resource[]
     * @date 2021/4/26
     */
    public static Resource[] getMultiResourcesPath(String locationPattern) {
        ResourcePatternResolver resolver = new PathMatchingResourcePatternResolver();
        try {
            return resolver.getResources(locationPattern);
        } catch (IOException e) {
            e.printStackTrace();
        }
        return null;
    }


    /**
     * [Springboot应用]
     * 根据路径获取resources下的资源
     * 例：data/flow.json
     *
     * @param location
     * @return org.springframework.core.io.Resource
     * @date 2021/4/26
     */
    public static Resource getResourcePath(String location) {
        try {
            ResourcePatternResolver resolver = new PathMatchingResourcePatternResolver();
            Resource resource = resolver.getResource(location);
            return resolver.getResource(location);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

}
