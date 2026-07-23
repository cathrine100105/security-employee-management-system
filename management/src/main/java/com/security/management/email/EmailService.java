package com.security.management.email;


import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class EmailService {

    private final JavaMailSender mailSender;

    @Value("${spring.mail.host}")
    private String host;

    @Value("${spring.mail.port}")
    private String port;

    @Value("${spring.mail.username}")
    private String username;

    public void sendResetPasswordEmail(String toEmail, String resetLink) {

        try {
            SimpleMailMessage message = new SimpleMailMessage();

            message.setTo(toEmail);
            message.setSubject("Reset Your Password");
            message.setText(
                    "Hello,\n\n" +
                            "Click the link below:\n\n" +
                            resetLink
            );
            System.out.println("Host: " + host);
            System.out.println("Port: " + port);
            System.out.println("Username: " + username);


            mailSender.send(message);
            System.out.println("Email sent successfully.");

        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException("Email sending failed", e);
        }
    }
}