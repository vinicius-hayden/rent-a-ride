package br.com.dh.emprescar.repository;

import br.com.dh.emprescar.model.City;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CityRepository extends JpaRepository<City, Integer> {
}
