package com.security.management.service;

import com.security.management.entity.UserEntity;
import com.security.management.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    public UserEntity login(String email,String password){

        UserEntity user = userRepository.findByEmail(email)
                .orElseThrow(() ->
                        new RuntimeException("Invalid email or password")
                );

        if(!user.getPassword().equals(password)){
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
                .password(password)
                .role(role)
                .build();

        return userRepository.save(user);
    }
}

