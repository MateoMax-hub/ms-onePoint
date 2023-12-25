let instance = null;
/**
 * Singleton class for managing and providing authentication credentials.
 *
 * @class CredentialsProvider
 */
class CredentialsProvider {
    credentials = {
        scope: '',
        client_id: '',
        client_secret: '',
        tenant_id: '',
        redirect_uri: '',
        refresh_token: '',
        response_type: ''
    };

    /**
     * Initializes the singleton instance of CredentialsProvider.
     *
     * @static
     * @returns {CredentialsProvider} - The singleton instance of CredentialsProvider.
     */
    static InitCredentials() {
        if (!instance) {
            instance = new CredentialsProvider();
        }
        return instance;
    }

    /**
     * Gets the stored credentials from the singleton instance.
     *
     * @returns {Object} - The stored credentials.
     */
    getCredentials() {
        return this.credentials;
    }

    /**
     * Sets the credentials in the singleton instance.
     *
     * @param {Object} params - Parameters for setting credentials.
     * @param {string} params.scope - The scope of the credentials.
     * @param {string} params.clientId - The client ID.
     * @param {string} params.clientSecret - The client secret.
     * @param {string} params.responseType - The response type.
     * @param {string} params.redirectUri - The redirect URI.
     * @param {string} params.refreshToken - The refresh token.
     * @param {string} params.tenantId - The tenant ID.
     */
    setCredentials({
        scope,
        clientId,
        clientSecret,
        responseType,
        redirectUri,
        refreshToken,
        tenantId,
    }) {
        this.credentials = {
            scope: scope,
            client_id: clientId,
            client_secret: clientSecret,
            response_type: responseType,
            redirect_uri: redirectUri,
            refresh_token: refreshToken,
            tenant_id: tenantId,
        };
    }
}

module.exports = CredentialsProvider;
