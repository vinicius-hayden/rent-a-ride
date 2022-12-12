package br.com.dh.emprescar.dto;

import br.com.dh.emprescar.model.Image;

import java.io.Serializable;

public class ImageDto implements Serializable {

    private static final long serialVersionUID = 1L;

    private Integer id;
    private String title;
    private String url;

    public ImageDto(Integer id, String title, String url) {
        this.id = id;
        this.title = title;
        this.url = url;
    }

    public ImageDto(Image entity) {
        this.id = entity.getId();
        this.title = entity.getTitle();
        this.url = entity.getUrl();
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

}
