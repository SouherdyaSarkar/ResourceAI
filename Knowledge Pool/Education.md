11.GitHub REST API
Uses:
repo content, commits, issues, PRs, actions — useful for tech integration, analytics, CI/CD dashboards
Endpoint:https://api.github.com/repos/{owner}/{repo

Source: https://docs.github.com/en/rest?apiVersion=2022-11-28




12.OpenAI API
Uses:
LLMs for content generation, summarization, embeddings (search), chat assistants — useful across Ed/Tech/Research workflows.
Endpoint:https://api.openai.com/v1/completions

Source: https://platform.openai.com/docs/api-reference/introduction



13.Google Cloud (example: Vision & Storage APIs)
Uses:
image OCR, labeling (Vision), object storage (Storage), ML services — useful for media processing, educational content extraction, and model hosting.
Endpoint: https://storage.googleapis.com/storage/v1/b/{bucket}/o
Source: https://cloud.google.com/storage/docs/request-endpoints



14.AWS (example: S3 + general services)
Uses:
file/object storage, static content hosting, static dataset hosting and serving for web platforms.
Endpoint: 
https://docs.aws.amazon.com/general/latest/gr/aws-service-information.html


Source: https://docs.aws.amazon.com/general/latest/gr/rande.html




15.Microsoft Azure Cognitive Services
Uses:
OCR, speech, language understanding, custom models — useful for automated transcription, content analysis for education and research.
Endpoint: GET https://learn.microsoft.com/en-us/rest/api/speechtotext/get-endpoint/%7BEndpoint%7D/speechtotext/v3.0/endpoints/%7Bid%7D
Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IkhTMjNiN0RvN1RjYVUxUm9MSHdwSXEyNFZZZyIsImtpZCI6IkhTMjNiN0RvN1RjYVUxUm9MSHdwSXEyNFZZZyJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldCIsImlzcyI6Imh0dHBzOi8vc3RzLndpbmRvd3MubmV0LzQxZWY5ZDUzLWNiMzEtNGI0MC1hNTVkLTA4OTMzMzRhNDA1OS8iLCJpYXQiOjE3NTg0NTc1NDUsIm5iZiI6MTc1ODQ1NzU0NSwiZXhwIjoxNzU4NDYxNjA3LCJhY3IiOiIxIiwiYWlvIjoiQVpRQWEvOFpBQUFBM2RYQThvc2dpaU5hQmgxSHNWSnNMYUIzZEJQeTlIVVlxRHB4Z1IwNzB3Mjlnb3ZrbHhhS2NWR1NkZktrenR6OGp0S0dMdFRhaXBWb2V5a2t5SUhaQnBJNko3WUYwRU1uVWNURldZQklrZTNPV2tKSmVaS2xPVHFIenl5T2pMRTRyLzltTVZZVnNCcU5aaWNvTGN6OG1OUnEzZ0xERjVXdlQ2Q1FsOWhpL05VOFVpSjI2c0hPZEsyWlRicFpsbjg5IiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6IjE4ZmJjYTE2LTIyMjQtNDVmNi04NWIwLWY3YmYyYjM5YjNmMyIsImFwcGlkYWNyIjoiMCIsImZhbWlseV9uYW1lIjoiUGF1bCIsImdpdmVuX25hbWUiOiJBaXNobWl0YSIsImlkdHlwIjoidXNlciIsImlwYWRkciI6IjI0MDk6NDBlMTpjOTpjMGZkOjgwMDA6OiIsIm5hbWUiOiJBaXNobWl0YSAgUGF1bCIsIm9pZCI6IjA4ODllYWQ5LTU2YjUtNGFkNy1iYTNkLTM4YjEyMjMzZjBjYyIsInB1aWQiOiIxMDAzMjAwMzE4NDg5RTI1IiwicmgiOiIxLkFYQUFVNTN2UVRITFFFdWxYUWlUTTBwQVdVWklmM2tBdXRkUHVrUGF3ZmoyTUJQRUFQMXdBQS4iLCJzY3AiOiJ1c2VyX2ltcGVyc29uYXRpb24iLCJzaWQiOiIwMDhiMDlkOS03YjFlLWUzYjQtZDllYy01ZTllNmUzODI0OGIiLCJzdWIiOiJuVDk0VkNZMmtob0o5VVFGci0xdndtY2lqNVEyaGlfYVdNSkpMRFl2a29BIiwidGlkIjoiNDFlZjlkNTMtY2IzMS00YjQwLWE1NWQtMDg5MzMzNGE0MDU5IiwidW5pcXVlX25hbWUiOiJBaXNobWl0YS5QYXVsMjAyM0BpZW0uZWR1LmluIiwidXBuIjoiQWlzaG1pdGEuUGF1bDIwMjNAaWVtLmVkdS5pbiIsInV0aSI6InNuZEhYNzlNVlVtaVhPV0VKMllHQUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdLCJ4bXNfZnRkIjoiM21vN2cxMUVGLWVmcVQ5RmhodEE5dVJMVURReVFjU0RYMkdaZVFuLVY1SUJZWE5wWVhOdmRYUm9aV0Z6ZEMxa2MyMXoiLCJ4bXNfaWRyZWwiOiIxMCAxIiwieG1zX3RjZHQiOjE2MDMyMDA1MjR9.eeoB80D5OnKa3dTGXWbrXIaajborsXyto_cq8EGXMoQew6pg3a0koHHc_pjRQMvFpmziS7SG2Fv47M9WWuuIJOlE4tcDpdW85cR_7QAgCxNIC5ggRuwRm_WpLJVTx7JrKMBwlFPYh1SEiUjS0vyKYth3gd2_tseSpCeqvKszN3UD29m26a1KCAXD1tOeKTKe9WySZvD4bpQYhYkvNb1EQ95J19zVNqzPZhfnOX027gCqPfIAwMW5HX5LovdUtxd4g56wbK_otGsTN38yu6BHysUunpCaD2VsOVOLgg-JHRqn-vtnFVT3pwaZsxr7vZlEdrkLv9yWFLVBOPta6P-Y2Q

Source: https://learn.microsoft.com/en-us/rest/api/cognitiveservices/


