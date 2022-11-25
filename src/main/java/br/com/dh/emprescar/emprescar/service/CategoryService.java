package br.com.dh.emprescar.service;

import br.com.dh.emprescar.repository.CategoryRepository;
import br.com.dh.emprescar.dto.CategoryDto;
import br.com.dh.emprescar.model.Category;
import br.com.dh.emprescar.service.exceptions.DatabaseException;
import br.com.dh.emprescar.service.exceptions.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;

    @Transactional(readOnly = true)
    public List<CategoryDto> searchAll() {
        List<Category> list = categoryRepository.findAll();
        return list.stream().map(x -> new CategoryDto(x)).collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public CategoryDto searchById(Integer id) {
        Optional<Category> object = categoryRepository.findById(id);
        Category entity = object.orElseThrow(() -> new EntityNotFoundException("Entity or register " + id + " not found on database!"));
        return new CategoryDto(entity);
    }

    public void delete(Integer id) {
        try {
            categoryRepository.deleteById(id);
        } catch (EmptyResultDataAccessException emptyResultDataAccessException) {
            throw new EntityNotFoundException("Error on Deleting: Register " + id + " not found on database!");
        } catch (DataIntegrityViolationException dataIntegrityViolationException) {
            throw new DatabaseException("Integrity Violation: Register " + id + " is inserted in another register!");
        }
    }

    @Transactional
    public CategoryDto insert(CategoryDto dto) {
        Category entity = copyDtoToEntity(dto, new Category());

        if (entity.getRating() > 6 || entity.getRating() < 1) {
            throw new RuntimeException("Error: Rating should be between 1 and 5");
        }

        entity = categoryRepository.save(entity);
        return new CategoryDto(entity);
    }

    @Transactional
    public CategoryDto update(CategoryDto dto) {

        try {
            Category entity = categoryRepository.getReferenceById(dto.getId());
            copyDtoToEntity(dto, entity);
            entity = categoryRepository.save(entity);
            return new CategoryDto(entity);
        } catch (EntityNotFoundException entityNotFoundException) {
            throw new EntityNotFoundException("Entity or register " + dto.getId() + " Not found on database!");
        }
    }

    private Category copyDtoToEntity(CategoryDto dto, Category entity) {
        entity.setName(dto.getName());
        entity.setRating(dto.getRating());
        entity.setDescription(dto.getDescription());
        entity.setUrl(dto.getUrl());
        return entity;
    }

}
