package br.com.dh.emprescar.controller;

import br.com.dh.emprescar.dto.FeatureDto;
import br.com.dh.emprescar.service.FeatureService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/features")
public class FeatureController {

    @Autowired
    private FeatureService featureService;

    @CrossOrigin(origins = "*")
    @GetMapping
    public ResponseEntity<List<FeatureDto>> searchAllfeatures() {
        List<FeatureDto> list = featureService.searchAll();
        return ResponseEntity.ok().body(list);
    }

}
