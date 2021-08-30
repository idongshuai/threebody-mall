package net.dongshuai.pojogroup;

import java.io.Serializable;
import java.util.List;

import net.dongshuai.pojo.TbSpecification;
import net.dongshuai.pojo.TbSpecificationOption;

/**
 * 规格和规格选项,组合实体类
 * @author 董帅
 */
public class SpecificationGroup implements Serializable {
private static final long serialVersionUID = 1L;
    private TbSpecification specification;
    private List<TbSpecificationOption> specificationOptionList;
    public TbSpecification getSpecification() {
        return specification;
    }
    public void setSpecification(TbSpecification specification) {
        this.specification = specification;
    }
    public List<TbSpecificationOption> getSpecificationOptionList() {
        return specificationOptionList;
    }
    public void setSpecificationOptionList(List<TbSpecificationOption> specificationOptionList) {
        this.specificationOptionList = specificationOptionList;
    }
    
    
}
