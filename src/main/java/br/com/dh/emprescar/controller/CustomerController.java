package br.com.dh.emprescar.controller;

import br.com.dh.emprescar.dto.CustomerDto;
import br.com.dh.emprescar.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;

@RestController
@RequestMapping(value = "/customers")
public class CustomerController {

    @Autowired
    CustomerService customerService;

    @CrossOrigin
    @PostMapping
    public ResponseEntity<CustomerDto> insertCustomer(@RequestBody CustomerDto dto) {
        dto = customerService.insert(dto);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
                .buildAndExpand(dto.getId()).toUri();
        return ResponseEntity.created(uri).body(dto);
    }

}

