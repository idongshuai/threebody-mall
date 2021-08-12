package com.processon.test;

import io.prometheus.client.CollectorRegistry;
import io.prometheus.client.Gauge;
import io.prometheus.client.exporter.PushGateway;
import org.junit.Test;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

/**
 * pushgateway
 *
 * @author ds
 * @version 1.0.0
 * @date 2021/6/8
 */
public class PushgatewayTest {

    @Test
    public void testPush() {
        try{
            String url = "42.193.183.45:8085";
            CollectorRegistry registry = new CollectorRegistry();
            Gauge guage = Gauge.build("my_custom_metric", "This is my custom metric.").create();
            guage.set(23.12);
            guage.register(registry);
            PushGateway pg = new PushGateway(url);
            Map<String, String> groupingKey = new HashMap<String, String>();
            groupingKey.put("instance", "tdocs_instance");
            pg.pushAdd(registry, "processon_tdocs", groupingKey);
        } catch (Exception e){
            e.printStackTrace();
        }
    }


    @Test
    public void testPush2() {
        try{
            String url = "42.193.183.45:8085";
            CollectorRegistry registry = new CollectorRegistry();
            Gauge guage = Gauge.build("my_custom_metric", "This is my custom metric.").labelNames("app", "date").create();
            String date = new SimpleDateFormat("yyyy-mm-dd HH:mm:ss").format(new Date());
            guage.labels("my-pushgateway-test-0", date).set(25);
            guage.labels("my-pushgateway-test-1", date).dec();
            guage.labels("my-pushgateway-test-2", date).dec(2);
            guage.labels("my-pushgateway-test-3", date).inc();
            guage.labels("my-pushgateway-test-4", date).inc(5);
            guage.register(registry);
            PushGateway pg = new PushGateway(url);
            Map<String, String> groupingKey = new HashMap<String, String>();
            groupingKey.put("instance", "tdocs_instance");
            pg.pushAdd(registry, "processon_tdocs", groupingKey);
        } catch (Exception e){
            e.printStackTrace();
        }
    }

}
