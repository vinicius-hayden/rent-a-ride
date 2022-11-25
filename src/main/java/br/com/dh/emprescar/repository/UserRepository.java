package br.com.dh.emprescar.repository;

import br.com.dh.emprescar.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {
}
