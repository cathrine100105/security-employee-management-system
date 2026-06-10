package com.security.management.service;

import com.security.management.entity.SecurityEntity;
import com.security.management.mapper.SecurityMapper;
import com.security.management.model.SecurityDTO;
import com.security.management.repository.SecurityRepository;
import lombok.RequiredArgsConstructor;
import org.jspecify.annotations.Nullable;
import org.springframework.stereotype.Service;


@Service
@RequiredArgsConstructor
public class SecurityService {
    private final SecurityRepository securityRepository;
    private final SecurityMapper securityMapper;

    public SecurityDTO create(SecurityDTO securityDTO) {
        SecurityEntity securityEntity = securityMapper.dtoToEntity(securityDTO);
        securityRepository.save(securityEntity);
        return securityMapper.entityToDto(securityEntity);
    }
}
