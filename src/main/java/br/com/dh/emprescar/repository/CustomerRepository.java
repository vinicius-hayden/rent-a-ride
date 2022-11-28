package br.com.dh.emprescar.repository;

import br.com.dh.emprescar.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<Customer, Integer> {
}
