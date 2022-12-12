package br.com.dh.emprescar.dto;

import java.io.Serializable;

public class AuthorizationResponseDto implements Serializable  {

    private static final long serialVersionUID = 1L;

    private String jwt;

    public AuthorizationResponseDto(String jwt) {
        this.jwt = jwt;
    }

    public String getJwt() {
        return this.jwt;
    }
}
