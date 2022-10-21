package br.com.dh.emprescar.controller;

import br.com.dh.emprescar.dto.CategoryDto;
import br.com.dh.emprescar.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping(value = "/categories")
public class CategoryController {

    @Autowired
    CategoryService categoryService;

    @CrossOrigin(origins = "*")
    @GetMapping
    public ResponseEntity<List<CategoryDto>> searchAllCategories() {
        List<CategoryDto> list = categoryService.searchAll();
        return ResponseEntity.ok().body(list);
    }

    @CrossOrigin(origins = "*")
    @GetMapping(value = "/{id}")
    public ResponseEntity<CategoryDto> searchCategoriesById(@PathVariable Integer id) {
        CategoryDto dto = categoryService.searchById(id);
        return ResponseEntity.ok().body(dto);
    }

    @CrossOrigin(origins = "*")
    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Void> deleteCategory(@PathVariable Integer id) {
        categoryService.delete(id);
        return ResponseEntity.noContent().build();
    }

    @CrossOrigin(origins = "*")
    @PostMapping
    public ResponseEntity<CategoryDto> insertCategory(@RequestBody CategoryDto dto) {
        System.out.println(dto);
        dto = categoryService.insert(dto);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
                .buildAndExpand(dto.getId()).toUri();
        return ResponseEntity.created(uri).body(dto);
    }

    @CrossOrigin(origins = "*")
    @PutMapping(value = "/{id}")
    public ResponseEntity<CategoryDto> updateCategory(@PathVariable Integer id,  @RequestBody CategoryDto dto) {
        dto = categoryService.update(id, dto);
        return ResponseEntity.ok().body(dto);
    }

}
