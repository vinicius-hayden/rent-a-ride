package br.com.dh.emprescar.service;

import br.com.dh.emprescar.dto.UserDto;
import br.com.dh.emprescar.model.Role;
import br.com.dh.emprescar.model.User;
import br.com.dh.emprescar.repository.RoleRepository;
import br.com.dh.emprescar.repository.UserRepository;
import com.google.common.hash.Hashing;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.nio.charset.StandardCharsets;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private RoleRepository roleRepository;

    @Transactional
    public UserDto insert (UserDto dto) {
        User entity = copyDtoToEntity(dto, new User());
        entity = userRepository.save(entity);
        return new UserDto(entity);
    }

    private User copyDtoToEntity(UserDto dto, User entity) {
        entity.setName(dto.getName());
        entity.setLastName(dto.getLastName());
        entity.setEmail(dto.getEmail());
        String hashedPassword = Hashing.sha256()
                .hashString(dto.getPassword(), StandardCharsets.UTF_8)
                .toString();
        entity.setPassword(hashedPassword);
        if (dto.getRole() == null ) {
            entity.setRole(defaultRole());
        } else {
            Role role = roleRepository.getReferenceById(dto.getRole().getId());
            entity.setRole(role);
        }
        return entity;
    }

    private Role defaultRole() {
        final Integer CUSTOMER = 2;
        return roleRepository.getReferenceById(CUSTOMER);
    }

}
