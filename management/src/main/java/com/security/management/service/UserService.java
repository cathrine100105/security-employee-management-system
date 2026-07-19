package com.security.management.service;

import com.security.management.entity.UserEntity;
import com.security.management.repository.UserRepository;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public UserEntity login(String email,String password){

        UserEntity user = userRepository.findByEmail(email)
                .orElseThrow(() ->
                        new RuntimeException("Invalid email or password")
                );

        if ("GOOGLE".equals(user.getProvider())) {
            throw new RuntimeException("Please login using Google");
        }

        if (!passwordEncoder.matches(password, user.getPassword())) {
            throw new RuntimeException("Invalid email or password");
        }

        return user;
    }

    public UserEntity register(String email, String password, String role) {

        if (userRepository.findByEmail(email).isPresent()) {
            throw new RuntimeException("Email already exists");
        }

        UserEntity user = UserEntity.builder()
                .email(email)
                .password(passwordEncoder.encode(password))
                .role(role)
                .provider("LOCAL")
                .build();

        return userRepository.save(user);
    }

    public UserEntity googleLogin(String email,
                                  String googleId,
                                  String name,
                                  String picture) {

        return userRepository.findByEmail(email)
                .map(user -> {

                    user.setProvider("GOOGLE");
                    user.setGoogleId(googleId);
                    user.setName(name);
                    user.setPicture(picture);

                    return userRepository.save(user);

                }).orElseGet(() -> {

                    UserEntity user = UserEntity.builder()
                            .email(email)
                            .password(null)
                            .role("USER")
                            .provider("GOOGLE")
                            .googleId(googleId)
                            .name(name)
                            .picture(picture)
                            .build();

                    return userRepository.save(user);
                });
    }
}

