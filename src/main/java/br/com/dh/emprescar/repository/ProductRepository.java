package br.com.dh.emprescar.repository;

import br.com.dh.emprescar.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Integer> {

    @Query("select p from Product p where p.categoryId = ?1")
    List<Product> findAllByCategoryId(Integer categoryId);

    @Query("select p from Product p where p.cityId = ?1")
    List<Product> findAllByCityId(Integer cityId);
}
