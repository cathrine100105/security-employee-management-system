package com.security.management.repository;

import com.security.management.entity.SecurityEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface SecurityRepository extends JpaRepository<SecurityEntity,Long> , JpaSpecificationExecutor<SecurityEntity> {
    SecurityEntity findByGuardId(long guardId);
}
