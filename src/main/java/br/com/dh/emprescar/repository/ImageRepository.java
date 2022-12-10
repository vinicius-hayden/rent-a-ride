package br.com.dh.emprescar.repository;

import br.com.dh.emprescar.model.Image;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ImageRepository extends JpaRepository<Image, Integer> {
}
