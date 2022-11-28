package br.com.dh.emprescar.controller;

import br.com.dh.emprescar.dto.UserDto;
import br.com.dh.emprescar.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping(value = "/users")
public class UserController {

    @Autowired
    UserService userService;

    @CrossOrigin(origins = "*")
    @GetMapping
    public ResponseEntity<List<UserDto>> searchAllUsers() {
        List<UserDto> list = userService.searchAll();
        return ResponseEntity.ok().body(list);
    }

    @CrossOrigin
    @PostMapping
    public ResponseEntity<UserDto> insertUser(@RequestBody UserDto dto) {
        dto = userService.insert(dto);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
                .buildAndExpand(dto.getId()).toUri();
        return ResponseEntity.created(uri).body(dto);
    }

}

