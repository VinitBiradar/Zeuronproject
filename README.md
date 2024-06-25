# Gesture-Based Puzzle Game

## Project Overview

This project is a puzzle game where players solve puzzles by making specific gestures in front of their webcam. The game includes different types of puzzles such as assembling pieces, tracing shapes, or gesture-based memory games.

## Key Features

- Hand gesture recognition using MediaPipe Hands.
- A variety of puzzles requiring different gestures.
- Timed puzzles with scoring based on speed and accuracy.
- User authentication with personalized difficulty settings.
- Secure, local database setup with SQLite to maintain user progress and high scores.

## Technical Specifications

- **MediaPipe Hands**: For gesture detection.
- **Phaser.js**: For managing game states and visuals.
- **SQLite**: For storing user data, including progress and high scores.

## Setup Instructions

### Prerequisites

- Node.js and npm installed on your machine.
- A webcam connected to your computer.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/gesture-puzzle-game.git
   cd gesture-puzzle-game
