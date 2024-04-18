import { API_BASE_URL, API_ENDPOINTS } from '@/api/apiConfig';

export const sendForm = async (data) => {
    const url = `${API_BASE_URL}${API_ENDPOINTS.SEND_FORM}`; // Constructing the URL

    try {
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'CORS':'no-cors'
            },
            
            body: JSON.stringify(data)
        });
    }
    catch (error) {
        console.error('Error:', error);
    }
}