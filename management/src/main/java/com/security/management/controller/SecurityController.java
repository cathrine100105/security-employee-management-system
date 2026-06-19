package com.security.management.controller;

import com.security.management.api.SecurityApi;
import com.security.management.model.FilterDTO;
import com.security.management.model.SecurityDTO;
import com.security.management.service.SecurityService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class SecurityController implements SecurityApi {
    private final SecurityService securityService;
    @Override
    public ResponseEntity<SecurityDTO> createGuardDetails(@RequestBody SecurityDTO securityDTO) {
        return ResponseEntity.ok(securityService.create(securityDTO));
    }

    @Override
    public ResponseEntity<String> deleteProfile(Integer guardId) {
        return ResponseEntity.ok(securityService.delete(guardId));
    }

    @Override
    public ResponseEntity<List<SecurityDTO>> getAllGuards(Integer page, Integer size) {
        return ResponseEntity.ok(securityService.getAll(page,size));
    }

    @Override
    public ResponseEntity<SecurityDTO> getsecurityById(Integer guardId) {
        return ResponseEntity.ok(securityService.getById(guardId));
    }

    @Override
    public ResponseEntity<List<SecurityDTO>> searchSecurity(@RequestBody  FilterDTO filterDTO) {
        return ResponseEntity.ok(securityService.search(filterDTO));
    }

    @Override
    public ResponseEntity<SecurityDTO> updateSecurity(Integer guardId, SecurityDTO securityDTO) {
        return ResponseEntity.ok(securityService.update(guardId , securityDTO));
    }

}
