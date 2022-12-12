package br.com.dh.emprescar.repository;

import br.com.dh.emprescar.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<Role, Integer> {
}
