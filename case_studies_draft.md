# Case Studies Content Draft

## Project 1: SBA Lead Sourcing Engine

**What We Built:**
An end-to-end data pipeline and search engine that transforms 1.87 million raw, public Paycheck Protection Program (PPP) loan records from the Small Business Administration (SBA) into a highly searchable, enriched lead generation database.

**Why We Built It:**
Raw government datasets are massive but lack actionable contact information and are difficult to query semantically. Sales and marketing teams need targeted, enriched leads (emails, owner names) based on specific industry niches, not just raw CSV dumps. The goal was to automate the transition from "raw public data" to "actionable outreach list."

**How It Works:**
1. **Data Ingestion & Storage:** Loaded 1.87M records into a PostgreSQL database.
2. **Semantic Search:** Implemented `pgvector` and Sentence Transformers to create an HNSW (Hierarchical Navigable Small World) vector index, allowing users to search by semantic meaning rather than exact keyword matches.
3. **Hierarchical Filtering:** Built filtering logic based on NAICS sector and industry codes.
4. **Multi-Fallback Enrichment Pipeline:** Engineered a robust contact enrichment system. It first queries the Google Places API, then falls back to custom web scraping (using BeautifulSoup4) with four distinct fallback strategies to maximize the extraction rate of emails and owner names.
5. **Delivery:** The Flask backend streams the enriched, highly targeted results directly to the user as a ready-to-use CSV.

---

## Project 2: Local LLM MCP Server

**What We Built:**
A custom Model Context Protocol (MCP) server designed specifically to constrain and enhance the capabilities of local, smaller-parameter Large Language Models (9B–12B range) running via LM Studio.

**Why We Built It:**
While massive cloud models (like GPT-4) are highly capable, relying on them introduces latency, cost, and privacy concerns. Local 9B-12B models are fast and private but often struggle with complex reasoning or formatting tasks, leading to hallucinations or broken outputs. We needed a way to make these smaller models reliable enough for production workflows, specifically for document generation and resume tailoring.

**How It Works:**
1. **Constrained Execution:** Instead of letting the model "freestyle" its output, the MCP server provides narrow, highly validated tools. The model is only responsible for determining *intent*, while the MCP server handles the *execution* and structure.
2. **Deterministic Output:** Integrated tools like `docxtemplater` to ensure that when the model decides to generate a document, the output strictly adheres to a predefined template, eliminating formatting errors.
3. **Guardrails & Fallbacks:** Implemented strict input validation and fallback parsing mechanisms within the Node.js server. If the local model outputs malformed JSON or incorrect parameters, the MCP server catches it, preventing the workflow from breaking.
