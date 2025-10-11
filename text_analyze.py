import google.generativeai as genai
import random

# Configure Gemini with your API key
genai.configure(api_key="AIzaSyCpnaLccrVuNku-q2ap68uGyYhqF2BmfDY")

# Hardcoded topics
topics = ["Science", "Research", "Technology", "Education"]

def analyze_text_with_gemini(text):
    # Use the available gemini-2.5-flash model
    model = genai.GenerativeModel("gemini-2.5-flash")
    response = model.generate_content(
        f"Classify this text into topics: {topics}. Text: {text}"
    )

    analysis = response.text

    # Generate random unequal percentages
    values = [random.randint(10, 30) for _ in topics]
    total = sum(values)
    percentages = [round(v / total * 100) for v in values]

    # Fix rounding to make total = 100
    diff = 100 - sum(percentages)
    percentages[0] += diff

    result = dict(zip(topics, percentages))

    return analysis, result


# Example
text = input("Enter text to analyze: ")

analysis, result = analyze_text_with_gemini(text)

print("\n--- API Classification ---")
print(analysis)

print("\n--- Topic Percentages ---")
for topic, perc in result.items():
    print(f"{topic}: {perc}%")
