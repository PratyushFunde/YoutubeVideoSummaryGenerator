import google.generativeai as genai
from youtube_transcript_api import YouTubeTranscriptApi

# def get_summary(text):    
#     genai.configure(api_key="AIzaSyCPL7RgLXknm-Sdh4cVmBmXh-ot5ZH_ISw")
#     model = genai.GenerativeModel("gemini-1.5-flash")
#     response = model.generate_content(prompt+text)
#     print(response.text)

def get_response(video_id):
    if(video_id):
        try:
    # Fetch the transcript
            transcript = YouTubeTranscriptApi.get_transcript(video_id)
    
    # Combine transcript into a single string
            full_transcript = " ".join([item['text'] for item in transcript])
            print("Transcript:")
            print(full_transcript)
            # get_summary(full_transcript)
        except Exception as e:
            print("An error occurred:", e)
            return e
    