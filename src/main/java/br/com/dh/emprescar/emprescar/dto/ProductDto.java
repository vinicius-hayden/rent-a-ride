package br.com.dh.emprescar.dto;

import br.com.dh.emprescar.model.Feature;
import br.com.dh.emprescar.model.Product;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

public class ProductDto implements Serializable {

    private static final long serialVersionUID = 1L;
    private Integer id;
    private String name;
    private String description;
    private Set<FeatureDto> features = new HashSet<>();
    private CategoryDto category;
    private CityDto city;

    public ProductDto() {
    }

    public ProductDto(Integer id, String name, String description, Set<FeatureDto> features, CategoryDto category, CityDto city) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.features = features;
        this.category = category;
        this.city = city;
    }

    public ProductDto (Product product) {
        this.id = product.getId();
        this.name = product.getName();
        this.description = product.getDescription();
        this.features = toFeaturesDto(product.getFeatures());
        this.category = new CategoryDto(product.getCategory());
        this.city = new CityDto(product.getCity());
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Set<FeatureDto> getFeatures() {
        return features;
    }

    public void setFeatures(Set<FeatureDto> features) {
        this.features = features;
    }

    public CategoryDto getCategory() {
        return category;
    }

    public void setCategory(CategoryDto category) {
        this.category = category;
    }

    public CityDto getCity() {
        return city;
    }

    public void setCity(CityDto city) {
        this.city = city;
    }

    private Set<FeatureDto> toFeaturesDto(Set<Feature> features) {
        Set<FeatureDto> result = new HashSet<>();
        for (Feature feature: features) {
            result.add(new FeatureDto(feature));
        }
        return result;
    }

}
