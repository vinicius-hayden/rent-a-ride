package br.com.dh.emprescar.repository;

import br.com.dh.emprescar.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category, Integer> {
}
