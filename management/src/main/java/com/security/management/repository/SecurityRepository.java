package com.security.management.repository;

import com.security.management.entity.SecurityEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SecurityRepository extends JpaRepository<SecurityEntity,Long> {

}
