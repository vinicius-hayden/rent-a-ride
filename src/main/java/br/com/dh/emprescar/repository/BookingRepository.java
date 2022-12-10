package br.com.dh.emprescar.repository;

import br.com.dh.emprescar.model.Booking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface BookingRepository extends JpaRepository<Booking, Integer> {
    @Query("select b from Booking b where b.product.id = ?1")
    List<Booking> findAllByProductId(Integer productId);

    @Query("select b from Booking b where b.customer.id = ?1")
    List<Booking> findAllByCustomerId(Integer customerId);
}
