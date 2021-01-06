export interface AuthResponse {
    user: {
        name: string,
        email: string,
        role: string,
        token: string,
    }
}
