package lomDDeock.service.member;

import com.fasterxml.jackson.databind.ObjectMapper;
import lomDDeock.dto.member.KakaoToken;
import lomDDeock.dto.member.SignUpForm;
import lomDDeock.dto.util.JwtDTO;
import lomDDeock.util.OAuth2Attributes;
import lombok.RequiredArgsConstructor;
import org.springframework.http.*;
import org.springframework.security.oauth2.client.registration.ClientRegistration;
import org.springframework.security.oauth2.client.registration.InMemoryClientRegistrationRepository;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

import java.util.Map;

@Service
@RequiredArgsConstructor
public class SocialLoginService {
    private final InMemoryClientRegistrationRepository clientRegistrationRepository;

    public SignUpForm signIn(String providerName, String code){
        ClientRegistration provider = clientRegistrationRepository.findByRegistrationId(providerName);
        KakaoToken tokens = getTokens(provider, code);
        return getFormFromUserProfile(provider, tokens.getAccess_token());
    }

    private SignUpForm getFormFromUserProfile(ClientRegistration provider, String token) {
        Map<String, Object> map = (Map<String, Object>) getUserAttributes(provider, token);
        OAuth2Attributes attributes = OAuth2Attributes.of(provider.getRegistrationId(), map);
        return new SignUpForm(attributes.getEmail(), null);
    }

    private Map<?, ?> getUserAttributes(ClientRegistration provider, String token) {
        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(token);
        HttpEntity<MultiValueMap<String, String>> request = new HttpEntity<>(headers);
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<String> response = restTemplate.exchange(provider.getProviderDetails().getUserInfoEndpoint().getUri(),
                HttpMethod.GET, request, String.class);
        try {
            return new ObjectMapper().readValue(response.getBody(), Map.class);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    private KakaoToken getTokens(ClientRegistration provider, String code) {
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
        HttpEntity<MultiValueMap<String, String>> request = new HttpEntity<>(tokenRequest(provider, code), headers);
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<String> response = restTemplate.postForEntity(provider.getProviderDetails().getTokenUri(),
                request, String.class);
        try {
            return new ObjectMapper().readValue(response.getBody(), KakaoToken.class);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    private MultiValueMap<String, String> tokenRequest(ClientRegistration provider, String code) {
        MultiValueMap<String, String> map = new LinkedMultiValueMap<>();
        map.add("code", code);
        map.add("grant_type", provider.getAuthorizationGrantType().getValue());
        map.add("redirect_uri", provider.getRedirectUri());
        map.add("client_id", provider.getClientId());
        map.add("client_secret", provider.getClientSecret());
        return map;
    }

    // 테스트용
    public String tryOAuth2(String providerName) {
        ClientRegistration provider = clientRegistrationRepository.findByRegistrationId(providerName);
        return provider.getProviderDetails().getAuthorizationUri()
                + "?client_id=" + provider.getClientId()
                + "&response_type=code"
                + "&redirect_uri=" + provider.getRedirectUri()
                + "&scope=" + String.join(",", provider.getScopes());
    }

    public ResponseEntity<JwtDTO> connectToSocialSignIn(String providerName, String code) {
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.TEXT_PLAIN);
        HttpEntity<String> request = new HttpEntity<>(code, headers);
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<JwtDTO> response = restTemplate.postForEntity(
                "http://localhost:8080/api/social/" + providerName,
                request, JwtDTO.class);
        return response;
    }
}