export interface CoursesResponse {
    data: {
        courses: 
            {
                _id: string,
                name: string,
                category: string,
                description: string,
                slug: string,
                cover_url: string,
                instructors: any,
                participants: any,
            }
    }
}