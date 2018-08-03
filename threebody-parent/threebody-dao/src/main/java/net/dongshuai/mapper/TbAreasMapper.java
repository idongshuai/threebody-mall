package net.dongshuai.mapper;

import java.util.List;
import net.dongshuai.pojo.TbAreas;
import net.dongshuai.pojo.TbAreasExample;
import org.apache.ibatis.annotations.Param;

public interface TbAreasMapper {
    int countByExample(TbAreasExample example);

    int deleteByExample(TbAreasExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(TbAreas record);

    int insertSelective(TbAreas record);

    List<TbAreas> selectByExample(TbAreasExample example);

    TbAreas selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") TbAreas record, @Param("example") TbAreasExample example);

    int updateByExample(@Param("record") TbAreas record, @Param("example") TbAreasExample example);

    int updateByPrimaryKeySelective(TbAreas record);

    int updateByPrimaryKey(TbAreas record);
}