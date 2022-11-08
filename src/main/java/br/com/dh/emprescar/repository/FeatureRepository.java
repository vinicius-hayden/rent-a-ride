package br.com.dh.emprescar.repository;

import br.com.dh.emprescar.model.Feature;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface FeatureRepository extends JpaRepository<Feature, Integer>  {
     List<Feature> findByIdIn(List<Integer> featureIdList);
}
