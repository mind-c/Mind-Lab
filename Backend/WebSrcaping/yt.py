from youtubesearchpython import VideosSearch

def print_youtube_video_links(query):
    videos = VideosSearch(query, limit=3).result()["result"]
    links=[]
    for video in videos:
        links.append(video["link"])
    return links


