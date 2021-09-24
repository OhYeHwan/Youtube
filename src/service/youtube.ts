import axios from 'axios';

type item = {
  id: {
    kind: string;
    videoId: string;
  };
};


export class Youtube {
    
    youtube: any;
    
    constructor(key: any) {
        this.youtube = axios.create({
            baseURL: 'https://www.googleapis.com/youtube/v3',
            params: { key: key },
        });
    }

    async mostPopular() {
        const response = await this.youtube.get('videos', {
            params: {
                part: 'snippet',
                chart: 'mostPopular',
                maxResults: 25,
            }
        });
        return response.data.items;
    }

    async search(query:string) {
        const response = await this.youtube.get('search', {
            params: {
                part: 'snippet',
                maxResults: 25,
                type: 'video',
                q: query,
            }
        });
        return response.data.items.map((item: item) => ({ ...item, id: item.id.videoId }));
    }
}