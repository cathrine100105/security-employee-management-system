package com.security.management.specification;

import com.security.management.dto.FilterDTO;
import com.security.management.entity.SecurityEntity;
import jakarta.persistence.criteria.Predicate;
import org.springframework.data.jpa.domain.Specification;

import java.util.ArrayList;
import java.util.List;

public class SecuritySpecification {

    public static Specification<SecurityEntity> search(FilterDTO filterDTO) {

        return (root, query, criteriaBuilder) -> {

            List<Predicate> predicates = new ArrayList<>();

            // Guard ID
            if (filterDTO.getGuardId() != null) {
                predicates.add(
                        criteriaBuilder.equal(
                                root.get("guardId"),
                                filterDTO.getGuardId()
                        )
                );
            }

            // Name
            if (filterDTO.getName() != null && !filterDTO.getName().isBlank()) {
                predicates.add(
                        criteriaBuilder.like(
                                criteriaBuilder.lower(root.get("name")),
                                "%" + filterDTO.getName().toLowerCase() + "%"
                        )
                );
            }

            // Shift Type
            if (filterDTO.getShiftType() != null && !filterDTO.getShiftType().isBlank()) {
                predicates.add(
                        criteriaBuilder.equal(
                                root.get("shiftType"),
                                filterDTO.getShiftType()
                        )
                );
            }

            // Qualification
            if (filterDTO.getQualification() != null && !filterDTO.getQualification().isBlank()) {
                predicates.add(
                        criteriaBuilder.equal(
                                root.get("qualification"),
                                filterDTO.getQualification()
                        )
                );
            }

            // Assigned Location
            if (filterDTO.getAssignedLocation() != null && !filterDTO.getAssignedLocation().isBlank()) {
                predicates.add(
                        criteriaBuilder.like(
                                criteriaBuilder.lower(root.get("assignedLocation")),
                                "%" + filterDTO.getAssignedLocation().toLowerCase() + "%"
                        )
                );
            }

            // Status (Enum)
            if (filterDTO.getStatus() != null) {
                predicates.add(
                        criteriaBuilder.equal(
                                root.get("status"),
                                filterDTO.getStatus()
                        )
                );
            }

            return criteriaBuilder.and(predicates.toArray(new Predicate[0]));
        };
    }
}