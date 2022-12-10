package br.com.dh.emprescar.controller;

import br.com.dh.emprescar.dto.ImageDto;
import br.com.dh.emprescar.service.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping(value = "/images")
public class ImageController {

    @Autowired
    ImageService imageService;

    @CrossOrigin(origins = "*")
    @GetMapping
    public ResponseEntity<List<ImageDto>> searchAllImages() {
        List<ImageDto> list = imageService.searchAll();
        return ResponseEntity.ok().body(list);
    }

    @CrossOrigin(origins = "*")
    @PostMapping
    public ResponseEntity<ImageDto> insertImage(@RequestBody ImageDto dto) {
        dto = imageService.insert(dto);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
                .buildAndExpand(dto.getId()).toUri();
        return ResponseEntity.created(uri).body(dto);
    }

}
