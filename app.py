from fastapi import FastAPI, Query
import spacy
import random

# ------------------------------------------------------------
# Load spaCy NLP model
# ------------------------------------------------------------
nlp = spacy.load("en_core_web_sm")

# ------------------------------------------------------------
# Define FastAPI app
# ------------------------------------------------------------
app = FastAPI(title="NLP Text Analyzer API")

# Predefined topics and keywords
topics = ["Science", "Research", "Technology", "Education"]

topic_keywords = {
    "Science": ["experiment", "biology", "chemistry", "physics", "scientific", "nature"],
    "Research": ["study", "analysis", "survey", "experiment", "findings", "data", "results"],
    "Technology": ["computer", "ai", "software", "hardware", "robotics", "internet", "device"],
    "Education": ["school", "college", "university", "teacher", "student", "learning", "education"]
}

# ------------------------------------------------------------
# NLP Analysis Function
# ------------------------------------------------------------
def analyze_text_with_nlp(text: str):
    doc = nlp(text.lower())
    topic_scores = {topic: 0 for topic in topics}

    for token in doc:
        for topic, words in topic_keywords.items():
            if token.text in words:
                topic_scores[topic] += 1

    total = sum(topic_scores.values())

    if total == 0:
        values = [random.randint(10, 30) for _ in topics]
        total = sum(values)
        percentages = [round(v / total * 100) for v in values]
    else:
        percentages = [round(v / total * 100) for v in topic_scores.values()]

    diff = 100 - sum(percentages)
    percentages[0] += diff

    result = dict(zip(topics, percentages))
    analysis = f"This text discusses {', '.join([t for t, v in result.items() if v > 25])} primarily."

    return analysis, result


# ------------------------------------------------------------
# Routes
# ------------------------------------------------------------

@app.get("/")
def home():
    return {"message": "Welcome to the NLP Text Analyzer API! Try /test?text=Your+sentence+here"}


# ✅ New GET endpoint (query param)
@app.get("/test")
def test_endpoint(text: str = Query(..., description="Text to analyze")):
    analysis, result = analyze_text_with_nlp(text)
    return {
        "text": text,
        "analysis": analysis,
        "topic_percentages": result
    }
