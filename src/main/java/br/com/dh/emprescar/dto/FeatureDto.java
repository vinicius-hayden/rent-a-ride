package br.com.dh.emprescar.dto;

import br.com.dh.emprescar.model.Feature;

import java.io.Serializable;

public class FeatureDto implements Serializable {

    private static final long serialVersionUID = 1L;

    private Integer id;
    private String name;
    private String icon;

    public FeatureDto() {
    }

    public FeatureDto(Integer id, String name, String icon) {
        this.id = id;
        this.name = name;
        this.icon = icon;
    }

    public FeatureDto(Feature feature) {
        this.id = feature.getId();
        this.icon = feature.getIcon();
        this.name = feature.getName();
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

    public String getIcon() {
        return icon;
    }

    public void setIcon(String icon) {
        this.icon = icon;
    }

    @Override
    public String toString() {
        return "FeatureDto{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", icon='" + icon + '\'' +
                '}';
    }
}
