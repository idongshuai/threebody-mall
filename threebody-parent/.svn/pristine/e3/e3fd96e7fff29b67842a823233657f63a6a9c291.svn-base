package net.dongshuai.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

import net.dongshuai.pojo.TbSpecification;
import net.dongshuai.pojo.TbSpecificationExample;

public interface TbSpecificationMapper {
    int countByExample(TbSpecificationExample example);

    int deleteByExample(TbSpecificationExample example);

    int deleteByPrimaryKey(Long id);

    int insert(TbSpecification record);

    int insertSelective(TbSpecification record);

    List<TbSpecification> selectByExample(TbSpecificationExample example);

    TbSpecification selectByPrimaryKey(Long id);

    int updateByExampleSelective(@Param("record") TbSpecification record, @Param("example") TbSpecificationExample example);

    int updateByExample(@Param("record") TbSpecification record, @Param("example") TbSpecificationExample example);

    int updateByPrimaryKeySelective(TbSpecification record);

    int updateByPrimaryKey(TbSpecification record);
    
    /**
     * 查询规格列表
     * @return
     */
    List<Map> selectOptionList();
}