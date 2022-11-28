package br.com.dh.emprescar.security;

import br.com.dh.emprescar.security.user.SecurityService;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Optional;

public class JwtAuthenticationFilter extends OncePerRequestFilter {

    private TokenManager tokenManager;
    private SecurityService securityService;

    public JwtAuthenticationFilter(TokenManager tokenManager, SecurityService securityService) {
        this.tokenManager = tokenManager;
        this.securityService = securityService;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        Optional<String> optionalToken = getTokenFromRequest(request);

        if (optionalToken.isPresent() && tokenManager.isValid(optionalToken.get())) {

            String userName = tokenManager.getUserName(optionalToken.get());
            UserDetails userDetails = securityService.loadUserByUsername(userName);

            UsernamePasswordAuthenticationToken authentication =
                    new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());

            SecurityContextHolder.getContext().setAuthentication(authentication);

        }

    }

    private Optional<String> getTokenFromRequest(HttpServletRequest request) {
        String authToken = request.getHeader("Authorization");

        return Optional.ofNullable(authToken);
    }

}
