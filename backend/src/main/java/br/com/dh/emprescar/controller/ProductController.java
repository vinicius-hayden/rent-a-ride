package br.com.dh.emprescar.controller;

import br.com.dh.emprescar.dto.ProductDto;
import br.com.dh.emprescar.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.xml.bind.DatatypeConverter;
import java.net.URI;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping(value = "/products")
public class ProductController {

    @Autowired
    ProductService productService;

    @CrossOrigin(origins = "*")
    @GetMapping
    public ResponseEntity<List<ProductDto>> searchAllProducts(@RequestParam(required = false) Integer categoryId, @RequestParam(required = false) Integer cityId, @RequestParam(required = false, name = "pickupDate") String pickupDateString, @RequestParam(required = false, name = "dropoffDate") String dropoffDateString) {

        if (categoryId != null) {
            List<ProductDto> list = productService.searchAllByCategoryId(categoryId);
            return ResponseEntity.ok().body(list);
        }
        if (cityId != null && pickupDateString != null && dropoffDateString != null) {
            Date pickupDate = DatatypeConverter.parseDateTime(pickupDateString+"T00:00:00.000+00:00").getTime();
            Date dropoffDate = DatatypeConverter.parseDateTime(dropoffDateString+"T23:59:59.999+00:00").getTime();
            List<ProductDto> list = productService.searchAllByCityIdAndDateRange(cityId, pickupDate, dropoffDate);
            return ResponseEntity.ok().body(list);
        }
        if (cityId != null) {
            List<ProductDto> list = productService.searchAllByCityId(cityId);
            return ResponseEntity.ok().body(list);
        }
        if (pickupDateString != null && dropoffDateString != null) {
            Date pickupDate = DatatypeConverter.parseDateTime(pickupDateString+"T00:00:00.000+00:00").getTime();
            Date dropoffDate = DatatypeConverter.parseDateTime(dropoffDateString+"T23:59:59.999+00:00").getTime();
            List<ProductDto> list = productService.searchAllByDateRange(pickupDate, dropoffDate);
            return ResponseEntity.ok().body(list);
        }

        List<ProductDto> list = productService.searchAll();
        return ResponseEntity.ok().body(list);
    }

//    @CrossOrigin(origins = "*")
//    @GetMapping
//    public ResponseEntity<List<ProductDto>> searchAllProductsByCategoryId(@RequestParam Integer categoryId) {
//        List<ProductDto> list = productService.searchAllByCategoryId(categoryId);
//        return ResponseEntity.ok().body(list);
//    }
//
//    @CrossOrigin(origins = "*")
//    @GetMapping
//    public ResponseEntity<List<ProductDto>> searchAllProductsByCityId(@RequestParam Integer cityId) {
//        List<ProductDto> list = productService.searchAllByCityId(cityId);
//        return ResponseEntity.ok().body(list);
//    }

    @CrossOrigin(origins = "*")
    @GetMapping(value = "/{id}")
    public ResponseEntity<ProductDto> searchProductById(@PathVariable Integer id) {
        ProductDto dto = productService.searchById(id);
        return ResponseEntity.ok().body(dto);
    }

    @CrossOrigin(origins = "*")
    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Void> deleteProduct(@PathVariable Integer id) {
        productService.delete(id);
        return ResponseEntity.noContent().build();
    }

    @CrossOrigin(origins = "*")
    @PostMapping
    public ResponseEntity<ProductDto> insertProduct(@RequestBody ProductDto dto) {
        dto = productService.insert(dto);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
                .buildAndExpand(dto.getId()).toUri();
        return ResponseEntity.created(uri).body(dto);
    }

    @CrossOrigin(origins = "*")
    @PutMapping(value = "/{id}")
    public ResponseEntity<ProductDto> updateProduct(@PathVariable Integer id,  @RequestBody ProductDto dto) {
        dto.setId(id);
        dto = productService.update(dto);
        return ResponseEntity.ok().body(dto);
    }

}
