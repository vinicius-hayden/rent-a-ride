package br.com.dh.emprescar.repository;

import br.com.dh.emprescar.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Date;
import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Integer> {

    @Query("select p from Product p where p.category.id = ?1")
    List<Product> findAllByCategoryId(Integer categoryId);

    @Query("select p from Product p where p.city.id = ?1")
    List<Product> findAllByCityId(Integer cityId);

    @Query(value = "SELECT p.* FROM products p WHERE NOT EXISTS (SELECT 1 FROM bookings b WHERE b.product_id = p.id AND b.pickup_date >= :pickupDate AND b.dropoff_date <= :dropoffDate)", nativeQuery = true)
    List<Product> findAllByDateRange(@Param("pickupDate") Date pickupDate, @Param("dropoffDate") Date dropoffDate);

    @Query(value = "SELECT p.* FROM products p WHERE NOT EXISTS (SELECT 1 FROM bookings b WHERE b.product_id = p.id AND b.pickup_date >= :pickupDate AND b.dropoff_date <= :dropoffDate) AND p.city_id = :cityId", nativeQuery = true)
    List<Product> findAllByCityIdAndDateRange(@Param("cityId") Integer cityId, @Param("pickupDate") Date pickupDate, @Param("dropoffDate") Date dropoffDate);
}
