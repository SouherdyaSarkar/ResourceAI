16.Canvas LMS (Instructure) API
Uses:
course management, gradebooks, assignments, submissions; central for integrating institutional LMS data into dashboards.
Endpoint:    GET /api/v1/courses/:course_id/assignments

Source: https://www.instructure.com/canvas



17.Moodle (Web Services API)
Uses:
users, courses, grades, enrolments — widely used for custom integrations with school systems.
Endpoint: https://{moodle-site}/webservice/rest/server.php?wsfunction={function}&wstoken={token

Source: 
https://moodle.org/



18.DIKSHA (India) — (example: Indian govt OER portal)
Uses:
curriculum-mapped lessons, textbooks, quizzes, teacher resources (India-specific OER content).
Endpoint:
GET /api/v1/content/class/6

Source:
https://diksha.gov.in/index.html

BIODIVERSITY:
19.PubChem (PUG REST)
Uses:
compound structures, properties, bioassay data — good for chemistry & life-science tooling integrated into your research/education pipelines.
Endpoint:
https://pubchem.ncbi.nlm.nih.gov/rest/pug/sourcetable/substance/json

Source:
https://pubchem.ncbi.nlm.nih.gov/docs/pug-rest




20.GBIF (Global Biodiversity Information Facility) API
Uses:
species occurrences, biodiversity records and geolocation — ideal for environmental science & field data visualisation.
Endpoint:
https://api.gbif.org/v1/occurrence/search


Source:
https://techdocs.gbif.org/en/openapi/



21.RCSB PDB (Protein Data Bank) APIs
Uses:
3D macromolecular structures, experimental metadata — useful for life-science education, structural analysis and visualization.
Endpoint:
https://search.rcsb.org/rcsbsearch/v2/query

Source: https://data.rcsb.org/#gql-api

Technology

1. Azure DevOps Services REST API



Uses: For software development operations: work items, CI/CD pipelines, repos, artifacts in Microsoft’s Azure DevOps environment. 
Endpoint: https://dev.azure.com/{organization}/_apis/{area}/{resource}?api-version={version} 
Source: Microsoft documentation. 

2. GitHub REST API



Uses: Manage repos, commits, issues, pull requests, workflows on GitHub (ideal for tech integration, metrics, analytics).
Endpoint: https://api.github.com/repos/{owner}/{repo}
Source: Official GitHub REST API docs (from your original list)

3. Google APIs Explorer



Uses: Portal to access many Google service APIs (Compute, Storage, Machine Learning, Maps, etc). Useful in tech architectures. 
Endpoint: Via APIs Explorer UI; individual endpoints like https://www.googleapis.com/{service}/{version}/{resource}
Source: Google Developers site. 

4. Swagger (OpenAPI) Tools API



Uses: Tools/API for designing, documenting, testing other REST APIs (important for tech architecture, internal services). 
Endpoint: E.g., https://api.swagger.io/… (tool-specific)
Source: Wikipedia entry on Swagger. 

5. RAML API igning RESTful APIs; helps build and integrate tech APIs in large systems. 
Endpoint: RAML is a specification not a single endpoint, but used with tools like https://api.raml.org/
Source: Wikipedia entry on RAML. 





