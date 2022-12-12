package br.com.dh.emprescar.service;

import br.com.dh.emprescar.dto.ImageDto;
import br.com.dh.emprescar.model.Image;
import br.com.dh.emprescar.repository.ImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ImageService {

    @Autowired
    private ImageRepository imageRepository;

    @Transactional(readOnly = true)
    public List<ImageDto> searchAll() {
        List<Image> list = imageRepository.findAll();
        return list.stream().map(x -> new ImageDto(x)).collect(Collectors.toList());
    }

    @Transactional
    public ImageDto insert(ImageDto dto) {
        Image entity = copyDtoToEntity(dto, new Image());
        entity = imageRepository.save(entity);
        return new ImageDto(entity);
    }

    private Image copyDtoToEntity(ImageDto dto, Image entity) {
        entity.setTitle(dto.getTitle());
        entity.setUrl(dto.getUrl());
        return entity;
    }

}
