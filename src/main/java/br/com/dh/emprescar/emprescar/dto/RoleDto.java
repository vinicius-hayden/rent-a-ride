package br.com.dh.emprescar.dto;

import br.com.dh.emprescar.model.Role;

import java.io.Serializable;

public class RoleDto implements Serializable {

    private static final long serialVersionUID = 1L;
    private Integer id;
    private String name;

    public RoleDto(Integer id, String name) {
        this.id = id;
        this.name = name;
    }

    public RoleDto(Role role) {
        this.id = role.getId();
        this.name = role.getName();
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

}
