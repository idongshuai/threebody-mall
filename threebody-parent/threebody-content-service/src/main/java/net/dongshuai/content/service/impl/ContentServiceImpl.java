package net.dongshuai.content.service.impl;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;

import com.alibaba.dubbo.config.annotation.Service;
import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import com.sun.tools.internal.xjc.model.SymbolSpace;

import net.dongshuai.mapper.TbContentMapper;
import net.dongshuai.pojo.TbContent;
import net.dongshuai.pojo.TbContentExample;
import net.dongshuai.pojo.TbContentExample.Criteria;
import net.dongshuai.content.service.ContentService;

import entity.PageResult;

/**
 * 服务实现层
 * @author Administrator
 *
 */
@Service
public class ContentServiceImpl implements ContentService {

	@Autowired
	private TbContentMapper contentMapper;
	
	@Autowired
    private RedisTemplate redisTemplate;
	
	/**
	 * 查询全部
	 */
	@Override
	public List<TbContent> findAll() {
		return contentMapper.selectByExample(null);
	}

	/**
	 * 按分页查询
	 */
	@Override
	public PageResult findPage(int pageNum, int pageSize) {
		PageHelper.startPage(pageNum, pageSize);		
		Page<TbContent> page=   (Page<TbContent>) contentMapper.selectByExample(null);
		return new PageResult(page.getTotal(), page.getResult());
	}

	/**
	 * 增加
	 */
	@Override
	public void add(TbContent content) {
		contentMapper.insert(content);
		//清除缓存
		redisTemplate.boundHashOps("content").delete(content.getCategoryId());
	}

	
	/**
	 * 修改
	 */
	@Override
	public void update(TbContent content){
	    //查询原来的分组id
	    Long categoryId = contentMapper.selectByPrimaryKey(content.getId()).getCategoryId();
	    //清除原分组缓存
	    redisTemplate.boundHashOps("content").delete(categoryId);
	    
	    
		contentMapper.updateByPrimaryKey(content);
		//清除现分组缓存
		if (categoryId.longValue() != content.getCategoryId().longValue()) {
		    redisTemplate.boundHashOps("content").delete(content.getCategoryId());
		}
	}	
	
	/**
	 * 根据ID获取实体
	 * @param id
	 * @return
	 */
	@Override
	public TbContent findOne(Long id){
		return contentMapper.selectByPrimaryKey(id);
	}

	/**
	 * 批量删除
	 */
	@Override
	public void delete(Long[] ids) {
		for(Long id:ids){
		    //清除缓存 (先清除缓存, 再删除, 否则无法获取categoryId)
		    Long categoryId = contentMapper.selectByPrimaryKey(id).getCategoryId();
		    redisTemplate.boundHashOps("content").delete(categoryId);
		    
			contentMapper.deleteByPrimaryKey(id);
		}		
	}
	
	
		@Override
	public PageResult findPage(TbContent content, int pageNum, int pageSize) {
		PageHelper.startPage(pageNum, pageSize);
		
		TbContentExample example=new TbContentExample();
		Criteria criteria = example.createCriteria();
		
		if(content!=null){			
						if(content.getTitle()!=null && content.getTitle().length()>0){
				criteria.andTitleLike("%"+content.getTitle()+"%");
			}
			if(content.getUrl()!=null && content.getUrl().length()>0){
				criteria.andUrlLike("%"+content.getUrl()+"%");
			}
			if(content.getPic()!=null && content.getPic().length()>0){
				criteria.andPicLike("%"+content.getPic()+"%");
			}
			if(content.getStatus()!=null && content.getStatus().length()>0){
				criteria.andStatusLike("%"+content.getStatus()+"%");
			}
	
		}
		
		Page<TbContent> page= (Page<TbContent>)contentMapper.selectByExample(example);		
		return new PageResult(page.getTotal(), page.getResult());
	}
		
		

		/**
		 * 根据广告分类id查询广告列表
		 */
        @Override
        public List<TbContent> findByCategoryId(Long categoryId) {
            
            List<TbContent> list = (List<TbContent>) redisTemplate.boundHashOps("content").get(categoryId);
            
            if (list == null) {
                
                TbContentExample example = new TbContentExample();
                Criteria criteria = example.createCriteria();
                //指定条件:分类id
                criteria.andCategoryIdEqualTo(categoryId);
                //指定条件:有效
                criteria.andStatusEqualTo("1");
                //指定条件: 排序
                example.setOrderByClause("sort_order");
                
                list = contentMapper.selectByExample(example);
                
                //存入缓存
                redisTemplate.boundHashOps("content").put(categoryId, list);
            }
            
            
            return list;
        }
	
}
