package br.com.dh.emprescar.dto;

import br.com.dh.emprescar.model.Category;

import java.io.Serializable;

public class CategoryDto implements Serializable {
    private static final long serialVersionUID = 1L;
    private Integer id;
    private String name;

    private Integer rating;
    private String description;
    private String url;

    public CategoryDto() {
    }

    public CategoryDto (Integer id, String name, Integer rating, String description, String url) {
        this.id = id;
        this.name = name;
        this.rating = rating;
        this.description = description;
        this.url = url;
    }

    public CategoryDto(Category category) {
        this.id = category.getId();
        this.name = category.getName();
        this.rating = category.getRating();
        this.description = category.getDescription();
        this.url = category.getUrl();
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

    public Integer getRating() {
        return rating;
    }

    public void setRating(Integer rating) {
        this.rating = rating;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    @Override
    public String toString() {
        return "CategoryDto{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", rating=" + rating +
                ", description='" + description + '\'' +
                ", url='" + url + '\'' +
                '}';
    }
}
