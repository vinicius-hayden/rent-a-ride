package br.com.dh.emprescar.service;

import br.com.dh.emprescar.dto.UserDto;
import br.com.dh.emprescar.model.Role;
import br.com.dh.emprescar.model.User;
import br.com.dh.emprescar.repository.RoleRepository;
import br.com.dh.emprescar.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private RoleRepository roleRepository;

     @Transactional(readOnly = true)
    public List<UserDto> searchAll() {
        List<User> list = userRepository.findAll();
        return list.stream().map(x -> new UserDto(x)).collect(Collectors.toList());
    }

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
        entity.setPassword(encodePassword(dto.getPassword()));
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

    public String encodePassword(String plainPassword){
        return new BCryptPasswordEncoder().encode(plainPassword);
    }


}
