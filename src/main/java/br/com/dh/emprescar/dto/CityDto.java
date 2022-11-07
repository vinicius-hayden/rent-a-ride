package br.com.dh.emprescar.dto;

import br.com.dh.emprescar.model.City;
import br.com.dh.emprescar.model.Product;

import java.io.Serializable;
import java.util.List;

public class CityDto implements Serializable {

    private static final long serialVersionUID = 1L;

    private Integer id;
    private String name;
    private String country;
    private List<Product> products;

    public CityDto(Integer id, String name, String country, List<Product> products) {
        this.id = id;
        this.name = name;
        this.country = country;
        this.products = products;
    }

    public CityDto(City city) {
        this.id = city.getId();
        this.name = city.getName();
        this.country = city.getCountry();
        this.products = city.getProducts();
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

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public List<Product> getProducts() {
        return products;
    }

    public void setProducts(List<Product> products) {
        this.products = products;
    }

    @Override
    public String toString() {
        return "CityDto{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", country='" + country + '\'' +
                ", products=" + products +
                '}';
    }
}
