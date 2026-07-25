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

        System.out.println("Sending email to: " + toEmail);

        System.out.println("Reset Link: " + resetLink);

        SimpleMailMessage message = new SimpleMailMessage();

        message.setTo(toEmail);

        message.setSubject("Reset Your Password");

        message.setText(

                "Hello,\n\n" +

                        "Click below:\n\n" +

                        resetLink

        );

        try {

            mailSender.send(message);

            System.out.println("Email sent successfully");

        } catch (Exception e) {

            e.printStackTrace();

        }

    }


}
