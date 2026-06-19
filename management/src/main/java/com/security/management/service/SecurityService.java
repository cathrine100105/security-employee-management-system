package com.security.management.service;

import com.security.management.entity.SecurityEntity;
import com.security.management.mapper.SecurityMapper;
import com.security.management.model.FilterDTO;
import com.security.management.model.SecurityDTO;
import com.security.management.repository.SecurityRepository;
import com.security.management.specification.SecuritySpecification;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;


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

    public List<SecurityDTO> search(FilterDTO filterDTO) {

        com.security.management.dto.FilterDTO dto =
                com.security.management.dto.FilterDTO.builder()
                        .guardId(filterDTO.getGuardId())
                        .name(filterDTO.getName())
                        .qualification(filterDTO.getQualification())
                        .shiftType(filterDTO.getShiftType())
                        .assignedLocation(filterDTO.getAssignedLocation())
                        .status(
                                filterDTO.getStatus() == null
                                        ? null
                                        : SecurityDTO.StatusEnum.fromValue(
                                        filterDTO.getStatus().getValue())
                        )
                        .build();

        List<SecurityEntity> entities =
                securityRepository.findAll(
                        SecuritySpecification.search(dto)
                );


        return entities.stream()
                .map(securityMapper::entityToDto)
                .toList();
    }

    public List<SecurityDTO> getAll(Integer page, Integer size) {
        Pageable pageable = PageRequest.of(page,size);

        Page<SecurityEntity> securityEntityPage = securityRepository.findAll(pageable);
        List<SecurityEntity> entities = securityEntityPage.getContent();
        List<SecurityDTO> dtos = new ArrayList<>();

        for(SecurityEntity entity : entities){
            dtos.add(securityMapper.entityToDto(entity));
        }
        return dtos;
    }

    public SecurityDTO getById(Integer guardId) {
        SecurityEntity securityEntity = securityRepository.findByGuardId(guardId);
        return securityMapper.entityToDto(securityEntity);
    }

    public SecurityDTO update(Integer guardId, SecurityDTO securityDTO) {
        SecurityEntity existingEntity = securityRepository.findByGuardId(guardId);
        securityMapper.getModelMapper().map(securityDTO,existingEntity);
        SecurityEntity updated = securityRepository.save(existingEntity);
        return securityMapper.entityToDto(updated);
    }

    public String delete(Integer guardId) {
        SecurityEntity securityEntity = securityRepository.findByGuardId(guardId);
        securityRepository.delete(securityEntity);
        return "Deleted Successfully!";
    }
}
