package br.com.dh.emprescar.dto;

import br.com.dh.emprescar.model.Booking;

import java.io.Serializable;
import java.util.Date;

public class BookingDto implements Serializable {

    private static final long serialVersionUID = 1L;

    private Integer id;
    private Date pickupDate;
    private Date dropoffDate;
    private ProductDto product;

    private CustomerDto customer;

    public BookingDto(Integer id, Date pickupDate, Date dropoffDate, ProductDto product, CustomerDto customer) {
        this.id = id;
        this.pickupDate = pickupDate;
        this.dropoffDate = dropoffDate;
        this.product = product;
        this.customer = customer;
    }

    public BookingDto(Booking entity) {
        this.id = entity.getId();
        this.pickupDate = entity.getPickupDate();
        this.dropoffDate = entity.getDropoffDate();
        this.product = new ProductDto(entity.getProduct());
        this.customer = new CustomerDto(entity.getCustomer());
    }


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Date getPickupDate() {
        return pickupDate;
    }

    public void setPickupDate(Date pickupDate) {
        this.pickupDate = pickupDate;
    }

    public Date getDropoffDate() {
        return dropoffDate;
    }

    public void setDropoffDate(Date dropoffDate) {
        this.dropoffDate = dropoffDate;
    }

    public ProductDto getProduct() {
        return product;
    }

    public void setProduct(ProductDto product) {
        this.product = product;
    }

    public CustomerDto getCustomer() {
        return customer;
    }

    public void setCustomer(CustomerDto customer) {
        this.customer = customer;
    }
}
