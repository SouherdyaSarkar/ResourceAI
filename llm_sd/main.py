import os
from google import genai
from fastapi import FastAPI
from dotenv import load_dotenv
from pydantic import BaseModel
# Load environment variables
load_dotenv()
app = FastAPI(title="Gemini FastAPI Example")

# Create a client using your API key
client = genai.Client(api_key=os.environ["GOOGLE_API_KEY"])

# # Generate text with Gemini
# response = client.models.generate_content(
#     model="gemini-2.5-flash",  # or gemini-1.5-pro
#     contents="Write a haiku about the ocean."
# )

# print(response.text)

# Pydantic model for input
class UserPrompt(BaseModel):
    text: str

# Home endpoint for GET
@app.get("/")
def read_root():
    return {"message": "Welcome! Use POST /api/gemini to get a response from Gemini."}

# POST endpoint to send user input to Gemini
@app.post("/api/gemini")
def gemini_endpoint(user_input: UserPrompt):
    try:
        response = client.models.generate_content(
            model="gemini-2.5-flash",
            config=genai.types.GenerateContentConfig(
                system_instruction="You are an assistant that rates a text for Technology, Science, Education, Research in terms of percentage in JSON. Please do it with utmost accuracy. the sum of all the percentages must be equal to 100%. If the text is not related to any of these categories, return 0% for all categories. Respond only in JSON format without any additional text."
            ),
            contents=[user_input.text]
        )

        # response.text contains the generated output
        return {
            "input": user_input.text,
            "output": response.text
        }

    except Exception as e:
        return {"error": str(e)}