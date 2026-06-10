package com.security.management.config;

import com.security.management.entity.SecurityEntity;
import com.security.management.model.SecurityDTO;
import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ModelMapperConfig {
    @Bean
    public ModelMapper modelMapper(){
        ModelMapper mapper = new ModelMapper();
        mapper.typeMap(SecurityDTO.class, SecurityEntity.class)
                .addMappings(m->m.skip(SecurityEntity::setGuardId));
        return mapper;
    }
}
