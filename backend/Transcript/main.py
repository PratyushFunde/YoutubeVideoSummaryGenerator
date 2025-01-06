from youtube_transcript_api import YouTubeTranscriptApi
from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import google.generativeai as genai

app = FastAPI()



# Replace with your YouTube video ID (part after 'v=' in the URL)

prompt='''You are a text summarizer with 20 years of experience ,p lease provide a concise pointwise summary of the following text, keeping it within a word limit of 200-250 words . The summary should capture the most important information and key arguments presented in the text.
Give the summary in points with numbers.
'''

def get_summary(text):    
    genai.configure(api_key="#Your_Gemini_API_KEY")
    model = genai.GenerativeModel("gemini-1.5-flash")
    response = model.generate_content(prompt+text)
    print("----------------------------------------------------------------------------------------")
    print(response.text)
    return response.text


# Enable CORS for frontend-backend communication
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins for simplicity
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def get_response(video_id):
    if(video_id):
        try:
    # Fetch the transcript
            transcript = YouTubeTranscriptApi.get_transcript(video_id)
    
    # Combine transcript into a single string
            full_transcript = " ".join([item['text'] for item in transcript])
            print("Transcript:")
            print(full_transcript)
            return get_summary(full_transcript)
        except Exception as e:
            print("An error occurred:", e)
            return e
    

class InputData(BaseModel):
    inputString: str



@app.get('/')
def default_page():
    return "Home Page"

@app.post("/process")
async def process_string(data: InputData):
    input_string = data.inputString
    # Example: Reverse the input string
    response=get_response(input_string)
    return {"response": response}


