package br.com.dh.emprescar.dto;

import br.com.dh.emprescar.model.User;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;

import java.io.Serializable;

public class UserDto implements Serializable {

    private static final long serialVersionUID = 1L;

    private Integer id;

    private String email;
    @JsonInclude(JsonInclude.Include.NON_NULL)
    private String password;
    @JsonInclude(JsonInclude.Include.NON_NULL)
    private RoleDto role;

    public UserDto(Integer id, String email, String password, RoleDto role) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.role = role;
    }

    public UserDto(User user) {
        this.id = user.getId();
        this.email = user.getEmail();
        if(user.getRole() != null) {
            this.role = new RoleDto(user.getRole());
        }
    }


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public RoleDto getRole() {
        return role;
    }

    public void setRole(RoleDto role) {
        this.role = role;
    }
}
