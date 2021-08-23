package com.processon.action.service;

import com.processon.action.entity.WpsTag;
import com.processon.common.util.PageInfo;
import org.springframework.data.mongodb.core.query.Query;

import java.util.List;
import java.util.Set;

/**
 * 流程标签服务类
 * @author wx
 *
 */
public interface TagService {
	
	/**
	 * 通过ID查询Tag
	 * @param id
	 * @return
	 */
	public WpsTag getById(String id);
	
	/**
	 * 通过tag名查找tag
	 * @param tagName
	 * @return
	 */
	public WpsTag getTag(String tagName);
	/**
	 * 保存一组tag
	 * @param tagName
	 * @param tags
	 * @return
	 */
	public WpsTag saveTag(String tagName, List<String> tags);
	/**
	 * 保存一组tag
	 * @param tags
	 */
	public void saveTag(List<String> tags);
	/**
	 * 保存一组tag
	 * @param tags
	 * @param userId
	 * @param isPublciClone
	 */
	public void saveTag(List<String> tags, String userId, boolean isPublciClone);
	/**
	 * 保存一个tag
	 * @param tag
	 */
	public void saveTag(WpsTag tag);
	
	/**
	 * 根据Query获得List<Tag>
	 * @param Query
	 */
	public List<WpsTag> getTagsByQuery(Query query);
	
	/**
	 * 根据Query获得tag数量
	 * @param Query
	 */
	public Long getTagsCount(Query query);
	
	/**
	 * 获取热门标签
	 * @param limit 最大查询条数
	 * @return
	 */
	public List<WpsTag> getHotTags(int limit, Set<String> tags);
	/**
	 * 根据关注的标签获取相关的标签
	 * @param limit
	 * @param tags
	 * @return
	 */
	public List<WpsTag> getRelatedTags(int limit, Set<String> tags);
	/**
	 * 分页查询标签
	 * @param pageNum
	 * @param row
	 * @param query
	 * @return
	 */
	public PageInfo<WpsTag> getTagsPagination(String pageNum, String row, Query query);
	/**
	 * 搜索标签
	 * @param q
	 * @param limit
	 * @return
	 */
	public List<WpsTag> getTagsSearch(String q, int limit);
	
	/**
	 * 修改内容中所使用的标签
	 * @param oldTag
	 * @param newTag
	 */
	public void updateTagTitle(String oldTag, String newTag);
	
	/**
	 * 根据标题删除标签
	 * @param tagName
	 */
	public void removeTagByName(String tagName);

	public void updateThemeTagTitle(String merge, String target);
}
