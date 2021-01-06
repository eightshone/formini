export interface AuthResponse {
    data: {
        user: {
            name: string,
            email: string,
            role: string,
            token: string,
        }
    }
}
