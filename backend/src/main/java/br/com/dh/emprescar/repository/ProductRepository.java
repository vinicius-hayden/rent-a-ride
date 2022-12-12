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

    @Query("select p from Product p inner join p.bookings b where not (b.pickupDate >= :pickupDate and b.dropoffDate <= :dropoffDate)")
    List<Product> findAllByDateRange(@Param("pickupDate") Date pickupDate, @Param("dropoffDate") Date dropoffDate);

    @Query("select p from Product p inner join p.bookings b where p.city.id = :cityId and not (b.pickupDate >= :pickupDate and b.dropoffDate <= :dropoffDate)")
    List<Product> findAllByDateRangeAndDateRange(@Param("cityId") Integer cityId, @Param("pickupDate") Date pickupDate, @Param("dropoffDate") Date dropoffDate);
}
