export interface AuthResponse {
    data: {
        user: {
            name: string,
            last_name: string,
            profile_picture: string,
            email: string,
            role: string,
            token: string,
        }
    }
}
