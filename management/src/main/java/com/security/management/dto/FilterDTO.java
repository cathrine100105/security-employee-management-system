package com.security.management.dto;

import com.security.management.model.SecurityDTO;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class FilterDTO {
    private String name;
    private Integer guardId;
    private String shiftType;
    private String qualification;
    private String assignedLocation;
    private SecurityDTO.StatusEnum status;
}
