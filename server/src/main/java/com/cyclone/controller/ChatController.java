package com.cyclone.controller;

import com.google.genai.Client;
import com.google.genai.types.GenerateContentResponse;
import io.github.cdimascio.dotenv.Dotenv;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173")
public class ChatController {
    public static String generateResponse(String prompt) {
        Dotenv de = Dotenv.load();
        String apiKey = de.get("GEMINI_API");
        String model = de.get("MODEL");
        Client client = Client.builder().apiKey(apiKey).build();
        GenerateContentResponse response = client.models.generateContent(model,prompt,null);
        return response.text();
    }

    @PostMapping("/send")
    public Response sendMessage(@RequestBody Request request){
        String userMessage = request.getPrompt();

        String response = ChatController.generateResponse(userMessage);
        String responseMessage = response;
        return new Response(responseMessage);
    }

    static class Request{
        private String prompt;

        public String getPrompt() {
            return prompt;
        }

        public void setPrompt(String prompt) {
            this.prompt = prompt;
        }
    }

    static class Response{
        private String response;

        public Response(String response) {
            this.response = response;
        }

        public String getResponse() {
            return response;
        }

        public void setResponse(String response) {
            this.response = response;
        }
    }
}
