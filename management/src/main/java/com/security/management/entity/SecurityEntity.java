package com.security.management.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Entity
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "Guards")
public class SecurityEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long guardId;

    private String name;
    private String address;
    private Integer age;
    private LocalDate dob;
    private String qualification;
    private String shiftType;
    private String experience;
    private String mobile1;
    private String mobile2;
    private LocalDate joinedDate;

    @Enumerated(EnumType.STRING)
    private Status status;

    private String assignedLocation;
}