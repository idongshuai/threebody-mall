package com.alibaba.csp.sentinel.dashboard.rule.nacos.flow;

import com.alibaba.csp.sentinel.dashboard.datasource.entity.gateway.GatewayFlowRuleEntity;
import com.alibaba.csp.sentinel.dashboard.rule.DynamicRulePublisher;
import com.alibaba.csp.sentinel.dashboard.rule.nacos.NacosConfigUtil;
import com.alibaba.nacos.api.config.ConfigService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component("gateWayFlowRulesNacosPublisher")
public class GateWayFlowRulesNacosPublisher implements DynamicRulePublisher<List<GatewayFlowRuleEntity>> {
    @Autowired
    private ConfigService configService;
    @Override
    public void publish(String app, List<GatewayFlowRuleEntity> rules) throws Exception {
        NacosConfigUtil.setRuleStringToNacos(
                this.configService,
                app,
                NacosConfigUtil.GETWAY_FLOW_DATA_ID_POSTFIX,
                rules
        );
    }
}
