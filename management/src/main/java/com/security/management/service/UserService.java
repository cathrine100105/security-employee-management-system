package com.security.management.service;

import com.security.management.email.EmailService;
import com.security.management.entity.UserEntity;
import com.security.management.model.ForgotPassword200Response;
import com.security.management.model.ResetPassword200Response;
import com.security.management.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final EmailService emailService;

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

    public ForgotPassword200Response forgotPassword(String email) {

        UserEntity user = userRepository.findByEmail(email)
                .orElseThrow(() ->
                        new RuntimeException("Email not found"));

        String token = UUID.randomUUID().toString();

        user.setResetToken(token);
        user.setTokenExpiry(LocalDateTime.now().plusMinutes(15));

        userRepository.save(user);


        String resetLink =
                "https://guardtrack-ruby.vercel.app/reset-password?token="
                        + token;


        emailService.sendResetPasswordEmail(
                user.getEmail(),
                resetLink
        );


        ForgotPassword200Response response =
                new ForgotPassword200Response();

        response.setMessage(
                "Password reset link sent to your email"
        );


        return response;
    }

    public ResetPassword200Response resetPassword(String token, String newPassword) {

        UserEntity user = userRepository.findByResetToken(token)
                .orElseThrow(() ->
                        new RuntimeException("Invalid reset token"));

        if (user.getTokenExpiry() == null ||
                user.getTokenExpiry().isBefore(LocalDateTime.now())) {

            throw new RuntimeException("Reset token has expired");
        }

        user.setPassword(passwordEncoder.encode(newPassword));

        user.setResetToken(null);
        user.setTokenExpiry(null);

        userRepository.save(user);

        ResetPassword200Response response = new ResetPassword200Response();
        response.setMessage("Password updated successfully");

        return response;
    }
}

