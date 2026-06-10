package com.security.management.mapper;

import com.security.management.entity.SecurityEntity;
import com.security.management.model.SecurityDTO;
import lombok.Getter;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

@Getter
@Component
public class SecurityMapper {
    private final ModelMapper modelMapper;

    public SecurityMapper(ModelMapper modelMapper) {
        this.modelMapper = modelMapper;
    }

    public SecurityEntity dtoToEntity(SecurityDTO securityDTO){
        return modelMapper.map(securityDTO, SecurityEntity.class);
    }

    public SecurityDTO entityToDto(SecurityEntity securityEntity){
        return modelMapper.map(securityEntity, SecurityDTO.class);
    }

    public ModelMapper getModelMapper() {
        return modelMapper;
    }
}
