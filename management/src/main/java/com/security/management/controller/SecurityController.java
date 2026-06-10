package com.security.management.controller;

import com.security.management.api.SecurityApi;
import com.security.management.model.FilterDTO;
import com.security.management.model.SecurityDTO;
import com.security.management.service.SecurityService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class SecurityController implements SecurityApi {
    private final SecurityService securityService;
    @Override
    public ResponseEntity<SecurityDTO> createGuardDetails(SecurityDTO securityDTO) {
        return ResponseEntity.ok(securityService.create(securityDTO));
    }
}
