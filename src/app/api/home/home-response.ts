export interface HomeResponse {
    data: {
        description: string,
        courses: [
            {
                id: string,
                name: string,
                category: string,
                description: string,
                slug: string,
                cover_url: string,
            }
        ]
    }
}