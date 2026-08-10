package com.security.management.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name="users")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UserEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;

    @Column(nullable = false, unique = true)
    private String email;

    @Column
    private String password;

    @Column(nullable = false)
    private String role;

    @Column
    private String provider;

    @Column
    private String googleId;

    @Column
    private String name;

    @Column(length = 500)
    private String picture;

    private String token;

    @Column
    private String resetToken;

    @Column
    private LocalDateTime tokenExpiry;
}