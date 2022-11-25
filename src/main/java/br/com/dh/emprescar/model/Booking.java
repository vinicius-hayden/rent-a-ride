package br.com.dh.emprescar.model;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
@Table(name = "bookings")
public class Booking implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Date pickupDate;
    private Date dropoffDate;

    @ManyToOne
    Product product;

    @ManyToOne
    User user;

    public Booking() {
    }

    public Booking(Integer id, Date pickupDate, Date dropoffDate, Product product, User user) {
        this.id = id;
        this.pickupDate = pickupDate;
        this.dropoffDate = dropoffDate;
        this.product = product;
        this.user = user;
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

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    @Override
    public String toString() {
        return "Booking{" +
                "id=" + id +
                ", pickupDate=" + pickupDate +
                ", dropoffDate=" + dropoffDate +
                ", product=" + product +
                ", user=" + user +
                '}';
    }
}
