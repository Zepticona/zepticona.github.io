---
title: "Scam Detector"
excerpt: "AI-powered phone fraud detection system combining call transcription and LLM-based scam classification, with automated safe-contact alerts.<br/>"
collection: portfolio
---

**Scam Detector** is an AI-powered system built to combat phone scams targeting vulnerable individuals, particularly older adults who may be unfamiliar with digital security practices.

### How it works
* A mobile app (Android/Java) records phone calls in the background with user consent.
* Recordings are sent to a Node.js/Express server, which transcribes the audio using the Assembly AI API.
* The transcription is passed to GPT-3.5 Turbo, configured to classify the conversation as a scam or not, with a confidence percentage.
* If flagged as a scam, an automatic SMS alert is sent via Twilio to a safe contact designated by the user (e.g. a family member).
* All call metadata, transcriptions, and verdicts are stored in Firebase Firestore, with Firebase Authentication securing both the mobile app and a companion website.
* The website lets users and their safe contact review scam history remotely.

### Tech stack
Android Studio, Java, Node.js, Express, Firebase (Auth + Firestore), Twilio, Assembly AI API, ChatGPT (GPT-3.5 Turbo), JavaScript, ReactJS

### Motivation
In Bangladesh, a significant share of mobile financial service (MFS) fraud victims are tricked into sharing passwords over the phone, disproportionately affecting less tech-familiar users. This project was built as an undergraduate capstone (ETE 2200: Electronic Project Design and Development, RUET) to provide a practical, low-friction defense against this specific attack pattern.

Supervised by Dr. Shah Ariful Hoque Chowdhury, Dept. of Electronics & Telecommunication Engineering, RUET.

[View source on GitHub](#)
<!-- TODO: replace # with your actual repo link -->
