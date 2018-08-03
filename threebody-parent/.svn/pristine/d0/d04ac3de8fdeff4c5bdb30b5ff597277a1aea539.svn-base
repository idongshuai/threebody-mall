package net.dongshuai.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

import net.dongshuai.pojo.TbBrand;
import net.dongshuai.pojo.TbBrandExample;

public interface TbBrandMapper {
    int countByExample(TbBrandExample example);

    int deleteByExample(TbBrandExample example);

    int deleteByPrimaryKey(Long id);

    int insert(TbBrand record);

    int insertSelective(TbBrand record);

    List<TbBrand> selectByExample(TbBrandExample example);

    TbBrand selectByPrimaryKey(Long id);

    int updateByExampleSelective(@Param("record") TbBrand record, @Param("example") TbBrandExample example);

    int updateByExample(@Param("record") TbBrand record, @Param("example") TbBrandExample example);

    int updateByPrimaryKeySelective(TbBrand record);

    int updateByPrimaryKey(TbBrand record);
    
    /**
     * 查询品牌列表,返回map的集合
     * @return
     */
    List<Map> selectOptionList();
}