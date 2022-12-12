package br.com.dh.emprescar.controller;

import br.com.dh.emprescar.dto.AuthorizationResponseDto;
import br.com.dh.emprescar.dto.LoginFormDto;
import br.com.dh.emprescar.security.TokenManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthorizationController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private TokenManager tokenManager;

//    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE,
//            produces = MediaType.APPLICATION_JSON_VALUE)
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping()
    public ResponseEntity<AuthorizationResponseDto> authenticate(@RequestBody LoginFormDto loginInfo) {

        UsernamePasswordAuthenticationToken authenticationToken = loginInfo.build();

        try {
            Authentication authentication = authenticationManager.authenticate(authenticationToken);

            String jwt = tokenManager.generateToken(authentication);
            return ResponseEntity.ok().body(new AuthorizationResponseDto(jwt));

        } catch (AuthenticationException e) {

            return ResponseEntity.badRequest().build();
        }

    }
}