from fastapi import FastAPI
import google.generativeai as genai
import random
import uvicorn

# Configure Gemini
genai.configure(api_key=" AIzaSyCpnaLccrVuNku-q2ap68uGyYhqF2BmfDY")

app = FastAPI(title="Gemini Text Analyzer API")

topics = ["Science", "Research", "Technology", "Education"]

def analyze_text_with_gemini(text: str):
    model = genai.GenerativeModel("gemini-2.5-flash")
    response = model.generate_content(
        f"Classify this text into topics: {topics}. Text: {text}"
    )
    analysis = response.text

    values = [random.randint(10, 30) for _ in topics]
    total = sum(values)
    percentages = [round(v / total * 100) for v in values]
    diff = 100 - sum(percentages)
    percentages[0] += diff

    result = dict(zip(topics, percentages))
    return analysis, result

@app.get("/test")
def test_endpoint(text: str):
    analysis, result = analyze_text_with_gemini(text)
    # Print output in terminal
    print("\n--- API Classification ---")
    print(analysis)
    print("\n--- Topic Percentages ---")
    for topic, perc in result.items():
        print(f"{topic}: {perc}%")
    print("-" * 40)
    return {"analysis": analysis, "topic_percentages": result}

if __name__ == "__main__":
    uvicorn.run("app:app", host="127.0.0.1", port=8000, reload=True)
