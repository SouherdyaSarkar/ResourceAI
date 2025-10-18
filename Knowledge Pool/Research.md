1.OpenAlex
Uses:
global open scholarly index — works (papers), authors, institutions, concepts; great for bibliometrics, publication timelines, open dashboards.
Endpoint: https://api.openalex.org/works/W2741809807
Source:
https://share.google/HrP5uCbcHysLlMoPf



2.NASA Open APIs
Uses:
space & earth science imagery, telemetry, near-earth object data, planetary science — excellent for science visualisations and educational content.
Endpoint: https://api.nasa.gov/planetary/apod?api_key=H1tnmV3Nq5Yg2vjssegkIkWrNPI9klIqAnePtOvn


Source:
https://share.google/pcv1TCY7XLh6dDINc



3.Crossref (REST API)
Uses:
DOI metadata, references, publisher metadata — essential for citation resolution and DOI lookups.
Endpoint: https://api.crossref.org/works


Source:
https://www.crossref.org/



4.DataCite (REST API)
Uses:
DOIs for datasets, dataset metadata lookup and DOI minting (when authorized).
Endpoint: 
https://api.datacite.org/works/{doi}

Source:
https://support.datacite.org/docs/api



5.Elsevier (Scopus / ScienceDirect APIs)
Uses:
Scopus metadata, abstracts, author & affiliation profiles, citation metrics (commercial/academic use).
Endpoint:

b839253d5d6d25fa5e5f198caf224a0c
https://api.elsevier.com/content/search/scopus


Source: 
https://dev.elsevier.com/



6.Springer Nature APIs
Uses:
Publisher metadata, OA content, article/book metadata for discovery and indexing.
Endpoint: https://api.springernature.com/meta/v2/json


Source:
https://dev.springernature.com/

7.arXiv API
Uses:
Preprint metadata (physics/CS/math/etc.) ideal for fresh research discovery and alerts.
Endpoint: http://export.arxiv.org/api/query?search_query=

Source:https://colab.research.google.com/github/EPS-Libraries-Berkeley/volt/blob/main/Search/arxiv_api.ipynb



8.NCBI Entrez / PubMed (E-utilities)
Uses:
Biomedical literature (PubMed), sequences, chemical info; good for life-science search and pipelines.
Endpoint: https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?...

Source: https://www.ncbi.nlm.nih.gov/




9.ORCID API
Uses:
Researcher identifiers, profiles, affiliations — use to disambiguate authors and populate profiles.
Endpoint: https://pub.orcid.org/v3.0/{orcid},

Source: https://info.orcid.org/what-is-orcid/services/public-api/




10.Zenodo REST API
Uses:
Deposit, publish and retrieve research outputs, DOIs (via Zenodo) — ideal for programmatic dataset deposits
Endpoint: https://zenodo.org/api/records

Source: https://developers.zenodo.org/

Open Science Framework (OSF) API
Uses: Programmatic access to research projects, files, components, versioning, logs hosted via the OSF (good for open science workflows, reproducibility).

Endpoint: https://api.osf.io/v2/ (for example: GET /v2/projects/ to list) Source: https://help.osf.io/article/393-api-integrations

Materials Cloud API
Uses: A platform for open computational science (particularly materials modelling) offering data, workflows, provenance, simulation results. Endpoint: Specific endpoints vary by service, but via their web platform; e.g., https://www.materialscloud.org/…/api (see platform documentation) Source: “Materials Cloud, a platform for open computational science” paper.

TAPIs (CyVerse) REST API
Uses: Science-as-a-service API platform (CyVerse) for data store, authentication, HPC resources, workflows in life & environmental sciences. Endpoint: https://terrain.cyverse.org/terrain/v2/ (for example) Source: “Science APIs — CyVerse” documentation.

PUBTator API
Uses: Biomedical literature resource with semantic/relations annotations of genes, diseases, chemicals; ideal for advanced life-science text mining. Endpoint: https://www.ncbi.nlm.nih.gov/research/pubtator3/api/ (for example) Source: PubTator 3.0 paper.

Data Commons API
Uses: Open knowledge graph / dataset platform combining public datasets (science, environment, socio-economic) accessible via API and graph queries. Endpoint: e.g., https://api.datacommons.org/ or SPARQL endpoint via datacommons.org Source: Wikipedia summary of Data Commons.


