package br.com.dh.emprescar.controller;

import br.com.dh.emprescar.dto.BookingDto;
import br.com.dh.emprescar.model.User;
import br.com.dh.emprescar.security.user.UserLogged;
import br.com.dh.emprescar.service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping(value = "/bookings")
public class BookingController {

    @Autowired
    private BookingService bookingService;

    @CrossOrigin(origins = "*")
    @GetMapping
    public ResponseEntity<List<BookingDto>> searchAllBookingsByProductId(@RequestParam(required = false) Integer productId) {

        List<BookingDto> list = bookingService.searchAllByProductId(productId);
        return ResponseEntity.ok().body(list);

    }


    @CrossOrigin(origins = "*")
    @PostMapping
    public ResponseEntity<BookingDto> insertBooking(@RequestBody BookingDto dto) {

        dto = bookingService.insert(dto);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
                .buildAndExpand(dto.getId()).toUri();
        return ResponseEntity.created(uri).body(dto);
    }

}
