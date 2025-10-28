# Multi-Tenant CRM System - Project Documentation

> This document contains the Product Requirements Document (PRD) and project timeline for the Multi-Tenant CRM System project.

---

## Product Requirements Document (PRD)

| Metadata      | Details                                                    |
|---------------|------------------------------------------------------------|
| Project Title | Multi-Tenant Customer Relationship Management (CRM) System |
| Team          | Stratus                                                    |
| Date          | 27 October 2025                                            |

---

## 1. Introduction
This project delivers a multi‑tenant Customer Relationship Management (CRM) system designed to help vendors manage their customers, track interactions, and integrate with third‑party services. The CRM supports both B2B and B2C use cases, ensuring that a single customer account can be linked to multiple vendors while maintaining strict tenant isolation.

The project is divided into two phases, each lasting two weeks. Phase 1 establishes the foundational CRM platform with essential integrations, while Phase 2 introduces agentic, AI‑driven features to enhance usability and automation.

---

## 2. Objectives
- Provide a secure, multi‑tenant CRM platform for vendors and customers.
- Capture and centralize interactions from multiple channels (email, chat, calls, meetings).
- Integrate with third‑party services for issue tracking and telephony.
- Deliver a conversational AI assistant in Phase 2 to improve productivity.
- Ensure the system is testable, modular, and extensible.

---

## 3. Scope

### Phase 1 (27 Oct – 10 Nov 2025)
- **Core CRM Entities:** Vendors, Customers, Accounts, Organizations, Interactions.
- **Integrations:** Gmail, LinkedIn, Calendar, Telegram, phone transcripts (via API), meeting notes (Zoom/Meet).
- **Features:**
  - Searchable repository of interactions.
  - Complaint/issue tracking via Jira or Linear integration.
  - Direct call feature (via telephony API).
- **Platforms:** Web app (Spring Boot backend + React frontend), Mobile app (Java/Android).
- **Testing:** Unit, integration, and basic end‑to‑end tests.

### Phase 2 (10 Nov – 24 Nov 2025)
- **Conversational AI Assistant:** Natural language queries (e.g., “Prep me for a meeting with Client X”).
- **Voice‑Based Features:** Voice input/output in web and mobile apps.
- **Auto‑Updating CRM:** Continuous ingestion from connectors, automatic updates for potential leads.
- **AI‑Powered Orchestration:** Use external AI APIs (e.g., Anthropic) for summarization and reasoning.
- **No custom ML training required.**

---

## 4. Non‑Functional Requirements
- Multi‑tenant access control.
- Secure authentication (OAuth2, JWT).
- Full‑text search.
- Modular, API‑first architecture.
- Automated testing coverage.

---

## 5. Out of Scope
- Building a custom issue tracker.
- Order Management System (OMS).
- Success metrics, UML diagrams, wireframes, mockups (future milestones).

---

## 6. Deliverables
- **Phase 1 (10 Nov 2025):** Functional CRM with connectors, issue tracking integration, search, direct call, web + mobile prototypes, and automated tests. Phase 1 deliverables will be demonstrated as a working prototype showcasing core CRM functionality and integrations.
- **Phase 2 (24 Nov 2025):** Conversational AI assistant, voice features, auto‑updating pipelines, extended documentation and demo. Phase 2 deliverables will be demonstrated as an enhanced prototype with AI features, showing the evolution from basic CRM to an intelligent, automated system.

---

## 7. Risks and Assumptions
- API rate limits and OAuth complexity.
- Limited access to LinkedIn APIs.
- Time constraints may limit the depth of integrations; mock data will be used where APIs are restricted.
- Assumption: third‑party APIs (Gmail, Jira, Twilio, etc.) available; mock data acceptable if restricted.

---

## 8. Conclusion
This CRM project introduces modern software engineering practices, including multi‑tenant design, third‑party integrations, and AI‑driven enhancements. Phase 1 ensures a working foundation; Phase 2 demonstrates innovation with conversational AI and automation.

---

## Project Timeline

### Phase 1: Foundation (27 Oct – 10 Nov 2025)

| Week | Dates          | Focus Area    | Deliverables                                                                                                                                                                                                       |
|------|----------------|---------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1    | 27 Oct – 2 Nov | Core Platform | - Database schema implementation<br>- CRUD APIs development<br>- JWT authentication<br>- Multi-tenant logic<br>- React frontend (login, customer list)<br>- Search functionality                                   |
| 2    | 3 Nov – 10 Nov | Integrations  | - Third-party integrations (Gmail, Calendar, Telegram)<br>- Phone transcript integration<br>- Issue tracking integration<br>- Direct call feature<br>- Testing suite<br>- Docker containerization<br>- Android MVP |

### Phase 2: AI Enhancement (10 Nov – 24 Nov 2025)

| Week | Dates           | Focus Area | Deliverables                                                                                                                                     |
|------|-----------------|------------|--------------------------------------------------------------------------------------------------------------------------------------------------|
| 3    | 10 Nov – 16 Nov | AI & Voice | - Conversational AI assistant integration<br>- Natural language query system<br>- Voice features implementation<br>- Conversation flow testing   |
| 4    | 17 Nov – 24 Nov | Automation | - Auto-updating pipeline development<br>- AI orchestration refinement<br>- UI/UX improvements<br>- E2E testing<br>- Documentation and final demo |
