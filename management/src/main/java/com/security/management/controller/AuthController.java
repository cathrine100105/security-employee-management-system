package com.security.management.controller;

import com.google.api.client.googleapis.auth.oauth2.GoogleIdToken;
import com.security.management.api.AuthApi;
import com.security.management.entity.UserEntity;
import com.security.management.google.GoogleAuthService;
import com.security.management.model.*;
import com.security.management.security.JwtService;
import com.security.management.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.security.management.email.EmailService;

@RestController
@AllArgsConstructor
public class AuthController implements AuthApi {

    private final EmailService emailService;
    private final UserService userService;
    private final GoogleAuthService googleAuthService;
    private final JwtService jwtService;


    @Override
    public ResponseEntity<ForgotPassword200Response> forgotPassword(
            ForgotPasswordRequestDTO forgotPasswordRequestDTO) {

        ForgotPassword200Response response =
                userService.forgotPassword(forgotPasswordRequestDTO.getEmail());

        return ResponseEntity.ok(response);
    }

    @Override
    public ResponseEntity<LoginResponseDTO> googleLogin(
            @RequestBody GoogleLoginRequestDTO request) {

        try {

            GoogleIdToken.Payload payload =
                    googleAuthService.verifyToken(request.getIdToken());

            String email = payload.getEmail();
            String googleId = payload.getSubject();
            String name = (String) payload.get("name");
            String picture = (String) payload.get("picture");

            UserEntity user = userService.googleLogin(
                    email,
                    googleId,
                    name,
                    picture
            );
            String token = jwtService.generateToken(user);


            LoginResponseDTO response = new LoginResponseDTO();

            response.setUserId(Math.toIntExact(user.getUserId()));
            response.setEmail(user.getEmail());
            response.setRole(user.getRole());
            response.setProvider(user.getProvider());
            response.setName(user.getName());
            response.setPicture(user.getPicture());
            response.setToken(token);
            response.setMessage("Google Login Successful");


            return ResponseEntity.ok(response);


        } catch (Exception e) {

            e.printStackTrace();
            throw new RuntimeException("Google Login Failed");
        }
    }

    @Override
    public ResponseEntity<LoginResponseDTO> loginUser(
            @RequestBody LoginRequestDTO loginRequestDTO) {

        System.out.println(loginRequestDTO.getEmail());
        System.out.println(loginRequestDTO.getPassword());

        UserEntity user = userService.login(
                loginRequestDTO.getEmail(),
                loginRequestDTO.getPassword()
        );

        String token = jwtService.generateToken(user);

        LoginResponseDTO response = new LoginResponseDTO();

        response.setUserId(Math.toIntExact(user.getUserId()));
        response.setEmail(user.getEmail());
        response.setRole(user.getRole());
        response.setProvider(user.getProvider());
        response.setName(user.getName());
        response.setPicture(user.getPicture());
        response.setMessage("Login Successful");
        response.setToken(token);

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
        response.setProvider(user.getProvider());
        response.setMessage("Registration Successful");

        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

    @Override
    public ResponseEntity<ResetPassword200Response> resetPassword(
            ResetPasswordRequestDTO resetPasswordRequestDTO) {

        ResetPassword200Response response =
                userService.resetPassword(
                        resetPasswordRequestDTO.getToken(),
                        resetPasswordRequestDTO.getNewPassword()
                );

        return ResponseEntity.ok(response);
    }
}
