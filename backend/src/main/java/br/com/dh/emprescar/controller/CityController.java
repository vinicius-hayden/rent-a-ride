package br.com.dh.emprescar.controller;

import br.com.dh.emprescar.dto.CityDto;
import br.com.dh.emprescar.service.CityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping(value = "/cities")
public class CityController {

    @Autowired
    CityService cityService;

    @CrossOrigin(origins = "*")
    @GetMapping
    public ResponseEntity<List<CityDto>> searchAllCities() {
        List<CityDto> list = cityService.searchAll();
        return ResponseEntity.ok().body(list);
    }

    @CrossOrigin(origins = "*")
    @PostMapping
    public ResponseEntity<CityDto> insertCity(@RequestBody CityDto dto) {
        dto = cityService.insert(dto);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
                .buildAndExpand(dto.getId()).toUri();
        return ResponseEntity.created(uri).body(dto);
    }

}
