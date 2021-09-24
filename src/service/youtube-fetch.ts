type requestOptions = {
    method: string;
    redirect: RequestRedirect;
}

type item = {
  id: {
    kind: string;
    videoId: string;
  };
};


export class YoutubeFetch {
    key: string;
    getRequestOptions: requestOptions;
    constructor(key : any) {
        this.key = key;
        this.getRequestOptions = {
            method: 'GET',
            redirect: 'follow',
        };
    }

    async mostPopular() {
        const response = await fetch(
            `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`,
            this.getRequestOptions
        );
        const result_1 = await response.json();
        return (result_1.items);
    }

    async search(query:string) {
        const response = await fetch(
            `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResult=25&q=${query}&type=video&key=${this.key}`,
            this.getRequestOptions
        );
        const result_1 = await response.json();
        return result_1.items.map((item: item) => ({ ...item, id: item.id.videoId }));

    }
}