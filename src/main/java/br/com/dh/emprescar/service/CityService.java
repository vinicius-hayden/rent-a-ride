package br.com.dh.emprescar.service;

import br.com.dh.emprescar.dto.CityDto;
import br.com.dh.emprescar.model.City;
import br.com.dh.emprescar.repository.CityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

public class CityService {

    @Autowired
    private CityRepository cityRepository;

    @Transactional(readOnly = true)
    public List<CityDto> searchAll() {
        List<City> list = cityRepository.findAll();
        return list.stream().map(x -> new CityDto(x)).collect(Collectors.toList());
    }

    @Transactional
    public CityDto insert(CityDto dto) {
        City entity = copyDtoToEntity(dto);
        entity = cityRepository.save(entity);
        return entityToDto(entity);
    }

    private City copyDtoToEntity(CityDto dto) {
        City city = new City();
        city.setName(dto.getName());
        city.setCountry(dto.getCountry());
        city.setProducts(dto.getProducts());
        return city;
    }

    private CityDto entityToDto(City city) {
        return new CityDto(
                city.getId(),
                city.getName(),
                city.getCountry(),
                city.getProducts()
        );
    }

}
