package com.security.management.controller;

import com.security.management.api.AuthApi;
import com.security.management.entity.UserEntity;
import com.security.management.model.LoginRequestDTO;
import com.security.management.model.LoginResponseDTO;
import com.security.management.model.RegisterRequestDTO;
import com.security.management.model.RegisterResponseDTO;
import com.security.management.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
@AllArgsConstructor
public class AuthController implements AuthApi {

    private final UserService userService;

    @Override
    public ResponseEntity<LoginResponseDTO> loginUser(
            @RequestBody LoginRequestDTO loginRequestDTO) {

        System.out.println(loginRequestDTO.getEmail());
        System.out.println(loginRequestDTO.getPassword());

        UserEntity user = userService.login(
                loginRequestDTO.getEmail(),
                loginRequestDTO.getPassword()
        );

        LoginResponseDTO response = new LoginResponseDTO();

        response.setUserId(user.getUserId());
        response.setEmail(user.getEmail());
        response.setRole(user.getRole());
        response.setMessage("Login Successful");

        return ResponseEntity.ok(response);
    }

    @Override
    public ResponseEntity<RegisterResponseDTO> registerUser(
            @RequestBody RegisterRequestDTO request) {

        UserEntity user = userService.register(
                request.getEmail(),
                request.getPassword(),
                request.getRole()
        );

        RegisterResponseDTO response = new RegisterResponseDTO();

        response.setUserId(Math.toIntExact(user.getUserId()));
        response.setEmail(user.getEmail());
        response.setRole(user.getRole());
        response.setMessage("Registration Successful");

        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }
}
